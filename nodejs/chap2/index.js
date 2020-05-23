const expess = require('express');
const mongoose = require('mongoose');
const app = expess();    
const Post = require('./models/post');


mongoose.connect('mongodb://127.0.0.1:27017/demo_nodejs',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, function (err) {
        if (err)
            throw err; 

        console.log("Connect to MongoDB success!")
    });


app.use(expess.json())
app.use(expess.urlencoded({ extended: false }))

app.get('/', function (req, res) {
    res.send('Something!')
})

// CRUD: creat/read/update/delete

app.get('/post', async function(req, res){
    const posts = await Post.find({});
    res.json(posts);
})

app.post('/post', async function(req, res) {
    let post = req.body;
    post = new Post(post);
    post = await post.save();

    res.json(post);
});

app.put('/post', async function(req, res) {
    const post = req.body;
    let currentPost = await Post.findById(post._id);

    currentPost.title = post.title;
    currentPost.content = post.content;
    currentPost.author = post.author;
    currentPost = await currentPost.save();
    
    res.json(currentPost);
});

app.delete('/post/:id', async function(req, res) {
    try{
        const result = await Post.deleteOne({_id: req.params.id});
        res.send(result)
    } catch (err) {
        res.status(404).json({'message': 'Not Found'})
    }
});

app.get('/err', function(req, res) {
    throw {'message': 'Error nay'};
})

app.use((err, req, res, next) => {
    console.log(err);
    res.status(400).json(err);
})

app.listen(3000, function () {
    console.log("Server is listening on port 3000");
})