const pool = require("../config/database");

class Post {
	async findAll(limit = 20, offset = 0, filters = {}) {
		let query = "select * from posts";
		const conditions = [];
		const values = [];

		Object.entries(filters).forEach(([key, value]) => {
			if (value !== void 0) {
				conditions.push(`${key} = ?`);
				values.push(+value);
			}
		});

		if (conditions.length) {
			query += ` where ${conditions.join(" and ")} `;
		}

		query += ` limit ? offset ?`;

		const [rows] = await pool.query(query, [...values, limit, offset]);
		return rows;
	}

	async count() {
		const [rows] = await pool.query("select count(*) as count from posts;");
		return rows[0].count;
	}
}

module.exports = new Post();
