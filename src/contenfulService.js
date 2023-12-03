const contentful = require('contentful');

const client = contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  environment: 'master', // defaults to 'master' if not set
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

// Define the fetchEntry function
const fetchEntry = (entryId) => {
  return client.getEntry(entryId);
};

// Define the fetchEntries function
const fetchEntries = (query) => {
  return client.getEntries(query);
};


// Export the fetchEntry function
module.exports = {
  fetchEntry,
  fetchEntries
};
