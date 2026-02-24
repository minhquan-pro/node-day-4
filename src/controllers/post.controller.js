const postService = require("../services/post.service");

const getAllPosts = async (req, res) => {
	const page = +req.query?.page || 1;
	const result = await postService.pagination(page);
	res.paginate(result);
};

const getAllPostByUserId = async (req, res) => {
	const page = +req.query?.page || 1;
	const user_id = +req.params?.id;
	const posts = await postService.pagination(page, { user_id });
	res.success(posts);
};

module.exports = { getAllPosts, getAllPostByUserId };
