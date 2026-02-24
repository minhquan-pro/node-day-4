const pool = require("../config/database");

class Post {
	async findAll(limit = 20, offset = 0) {
		const query = "select * from posts limit ? offset ?";
		const [rows] = await pool.query(query, [limit, offset]);
		return rows;
	}

	async count() {
		const [rows] = await pool.query("select count(*) as count from posts;");
		return rows[0].count;
	}

	async findAllPostByUserId(id) {
		const query = "select * from posts where user_id = ?";
		const [rows] = await pool.query(query, [id]);
		return rows;
	}
}

module.exports = new Post();
