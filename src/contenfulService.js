const contentful = require('contentful')

const client = contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  environment: 'master', // defaults to 'master' if not set
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
})

client.getEntry('1EirkGrxEZLiKshv21CELR')
  .then((entry) => console.log(entry))
  .catch(console.error)
