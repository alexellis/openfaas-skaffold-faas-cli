'use strict'

module.exports = async (event, context) => {
  const result = {
    'body': JSON.stringify(event.body),
    'content-type': event.headers["content-type"]
  }

  console.log("Extra data that gets deployed upon save", event.body)

  return context
    .status(200)
    .succeed(result)
}
