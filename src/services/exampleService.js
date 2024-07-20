exports.getAllExamples = async () => {
    return [{ id: 1, name: 'Example' }];
};

exports.createExample = async (exampleData) => {
  // This is a mock implementation. Replace with actual logic.
  return { id: 2, ...exampleData };
};