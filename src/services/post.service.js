const postModel = require("../models/post.model");

class PostService {
	async findAll(page) {
		const limit = 7;
		const offset = (page - 1) * limit;
		const posts = await postModel.findAll(limit, offset);

		const totalPost = await postModel.count();

		return {
			rows: posts,
			pagination: {
				total: totalPost,
				per_page: limit,
				current_page: page,
				from: offset + 1,
				to: offset + posts.length,
			},
		};
	}

	async findAllPostByUserId(id) {
		const posts = await postModel.findAllPostByUserId(id);
		return posts;
	}
}

module.exports = new PostService();
