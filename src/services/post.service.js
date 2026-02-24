const postModel = require("../models/post.model");

class PostService {
	async findAll(page) {
		const limit = 7;
		const offset = (page - 1) * limit;
		const posts = await postModel.findAll(limit, offset);
		const totalPost = await postModel.count();

		const pagination = {
			total: totalPost,
			per_page: limit,
			current_page: page,
		};

		if (posts.length) {
			pagination.from = offset + 1;
			pagination.to = offset + posts.length;
		}

		return {
			rows: posts,
			pagination,
		};
	}

	async findAllPostByUserId(id) {
		const posts = await postModel.findAllPostByUserId(id);
		return posts;
	}
}

module.exports = new PostService();
