function setBaseURL(baseURL) {

  var baseURL
  if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:50709/api/'
  } else if (process.env.NODE_ENV === 'production') {
    // TODO: Get URL API production
    baseURL = ''
  }
  return baseURL
}

export default setBaseURL