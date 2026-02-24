const postService = require("../services/post.service");

const getAllPosts = async (req, res) => {
	const page = +req.query?.page || 1;
	const result = await postService.findAll(page);
	res.paginate(result);
};

const getAllPostByUserId = async (req, res) => {
	const userId = +req.params.id;
	const posts = await postService.findAllPostByUserId(userId);
	res.success(posts);
};

module.exports = { getAllPosts, getAllPostByUserId };
