const { User, Post } = require('../models');

exports.createPost = async (request, response) => {
    try {
        const { title, content } = request.body;
        //console.log(request.user.id);
        const post = await Post.create({ title, content, UserId: request.user.id });
        response.json(post);
    } catch(err) {
        response.status(400).json({ error: err.message });
    }
};


exports.getAllPosts = async(request, response) => {
    const posts = await Post.findAll({
        include: { model: User, attributes: ['username'] },
        order: [['createdAt', 'DESC']],
    });

    response.json(posts);
};

exports.getPostById = async (request, response) => {
    const post = await Post.findByPk(request.params.id, {
        include: { model: User, attributes: ['username']},
    });

    post ? response.json(post) : 
        response.status(400).json({ message: 'Post not found'});
};

exports.updatePost = async (request, response) => {
    const post = await Post.findByPk(request.params.id);
    // console.log(post);
    // console.log('post.userId:', post.UserId);
    // console.log('request.user.id:', request.user.id);

    if( !post || post.UserId !== request.user.id) 
        return response.status(403).json({ message: 'Unauthorized' });

    const { title, content } = request.body;
    await post.update({ title, content });
    response.json(post);
};

exports.deletePost = async (request, response) => {
    const post = await Post.findByPk(request.params.id);
    if( !post || post.UserId !== request.user.id) 
        return response.status(403).json({ message: 'Unauthorized' });

    await post.destroy();
    response.json({ message: 'Post Deleted' });
};