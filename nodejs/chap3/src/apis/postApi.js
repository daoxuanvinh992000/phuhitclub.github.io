const express = require('express');
const router = express.Router();
const postService = require('../services/postService')

// CRUD: creat/read/update/delete
router.get('/', function(req, res){
    throw {'message': 'Loi roi ban oi'};
    // console.log(req.query);
    // const posts = await postService.getAll(req.query);
    // res.json(posts);
})

router.post('/', async function(req, res) {
    let post = await postService.create(req.body);
    
    res.json(post);
});

router.put('/', async function(req, res) {
    let post = req.body;
    post = await postService.update(req.body)
    
    res.json(post);
});

router.delete('/:id', async function(req, res) {
    // id: path variable
    const result = await postService.delete(req.params.id);
    res.send(result)
});

module.exports = router;