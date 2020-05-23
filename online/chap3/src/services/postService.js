const Post = require('../models/post');

const PostService = {

    getAll: async (params) => {
        console.log(params)
        let query = {};

        if(params && params.title) {
            query.title = params.title;
        }
        if(params && params.author) {
            query.author = params.author; 
        }

        let posts = await Post.find(query);

        return posts;
    },
    create: async (post) => {
        //validate
        console.log(post);
        post = new Post(post);
        const result = await post.save();
        return result;
    },
    update: async (post) => {
        let currentPost = await Post.findById(post._id);

        currentPost.title = post.title;
        currentPost.content = post.content;
        currentPost.author = post.author;
        const result = await currentPost.save();

        return result;
    },
    delete: async (id) => {
        return await Post.deleteOne({_id: id})
    }

}

module.exports = PostService;