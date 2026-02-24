class PaginationService {
	apply(service) {
		service.pagination = async (page, filters) => {
			const limit = 20;
			const offset = (page - 1) * limit;
			const rows = await service.model.findAll(limit, offset, filters);
			const count = await service.model.count();

			const pagination = {
				total: count,
				per_page: limit,
				current_page: page,
			};

			if (rows.length) {
				pagination.from = offset + 1;
				pagination.to = offset + rows.length;
			}

			return {
				rows,
				pagination,
			};
		};
	}
}

module.exports = new PaginationService();
