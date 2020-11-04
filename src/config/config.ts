if (!process.env.REACT_APP_API_SERVER_ROOT) {
  throw new Error('Please specify REACT_APP_BASE_URL env variable')
}
export const config = {
  baseUrl: process.env.REACT_APP_BASE_URL,
  isDev: process.env.NODE_ENV === 'development',
  isProd: process.env.NODE_ENV === 'production',
}
