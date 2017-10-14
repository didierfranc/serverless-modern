export default (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({
      message: 'Hello World',
      input: event,
    }),
  }

  callback(null, response)
}
