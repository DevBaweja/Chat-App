exports.getAll = (Model) => async (req, res, next) => {
    const doc = await Model.find();
    // Send Response
    res.status(200).json({
        status: 'success',
        results: doc.length,
        data: {
            data: doc,
        },
    });
};

exports.createOne = (Model) => async (req, res, next) => {
    const doc = await Model.create(req.body);

    // Send Response
    res.status(200).json({
        status: 'success',
        data: {
            data: doc,
        },
    });
};
