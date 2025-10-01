exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: await fs.promises.readFile('axw1dq0u7pe9d59akl8nt78phbkjdn.html')
  };
};
