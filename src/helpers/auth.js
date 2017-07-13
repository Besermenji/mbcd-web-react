const authToken = 'authToken'

export const saveToken = (token) => {
  localStorage.setItem(authToken, token)
}

export const isAuthenticated = () => {
  return !!localStorage.getItem(authToken)
}
