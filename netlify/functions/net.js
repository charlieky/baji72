
const fs = require('fs').promises;
const path = require('path');

exports.handler = async () => {
  try {
    const html = await fs.readFile(
      path.join(__dirname, '../../axw1dq0u7pe9d59akl8nt78phbkjdn.html'),
      'utf8'
    );

    return {
      statusCode: 200,
      headers: {'Content-Type': 'text/html'},
      body: html
    };
  } catch (error) {
    return {statusCode: 404, body: error.message};
  }
};
