
const credentials = require('./credentials.json')

const {
  PHONE_NUMBER,
  PROJECT_ID,
  ACCOUNT_SID,
  AUTH_TOKEN,
  PORT,
  KNOWLEDGE_BASE
} = process.env

module.exports = {
  PORT: PORT || 4433,
  PHONE_NUMBER,
  PROJECT_ID,
  ACCOUNT_SID,
  AUTH_TOKEN,
  KNOWLEDGE_BASE,
  GOOGLE_APPLICATION_CREDENTIALS: credentials,
}
