const exampleService = require('../services/exampleService');

exports.getExamples = async (req, res, next) => {
    try {
        const examples = await exampleService.getAllExamples();
        res.status(200).json({ data:examples });
    } catch (error) {
        next(error);
    }
};

exports.createExample = async (req, res, next) => {
  try {
    const { name } = req.body;
    const newExample = await exampleService.createExample({ name });
    res.status(201).json({ data: newExample });
  } catch (error) {
    next(error);
  }
};