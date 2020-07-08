module.exports = class {
    constructor(query, obj) {
        this.query = query;
        this.obj = obj;
    }

    filter() {
        // Filtering using query string
        const queryObj = { ...this.obj };
        const excludeFields = ['page', 'sort', 'limit', 'fields'];
        excludeFields.forEach((cur) => delete queryObj[cur]);

        // Advance Filtering using query string
        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(
            /\b(gte|gt|lte|lt)\b/g,
            (match) => `$${match}`
        );

        this.query = this.query.find(JSON.parse(queryStr));

        return this;
    }

    sort() {
        if (this.obj.sort) {
            const sortBy = this.obj.sort.split(',').join(' ');
            this.query = this.query.sort(sortBy);
        } else {
            this.query = this.query.sort('-createdAt');
        }

        return this;
    }

    limitFields() {
        if (this.obj.fields) {
            const fields = this.obj.fields.split(',').join(' ');
            this.query = this.query.select(fields);
        } else {
            this.query = this.query.select('-__v');
        }

        return this;
    }

    paginate() {
        const page = +this.obj.page || 1;
        const limit = +this.obj.limit || 10;
        const skip = (page - 1) * limit;

        this.query = this.query.skip(skip).limit(limit);
        return this;
    }
};
