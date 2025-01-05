const SESSION_KEYS = {
  USER: 'sessionUser',
  AUTH_TOKEN: 'sessionToken'
}

class SessionAuth {
  static storeCredentials(user, token) {
    sessionStorage.setItem(SESSION_KEYS.USER, JSON.stringify(user))
    sessionStorage.setItem(SESSION_KEYS.AUTH_TOKEN, token)
  }

  static clearCredentials() {
    Object.values(SESSION_KEYS).forEach(key => sessionStorage.removeItem(key))
  }

  static getStoredCredentials() {
    const user = sessionStorage.getItem(SESSION_KEYS.USER)
    const token = sessionStorage.getItem(SESSION_KEYS.AUTH_TOKEN)
    return user && token ? { user: JSON.parse(user), token } : null
  }

  static isAuthenticated() {
    return !!this.getStoredCredentials()
  }
}

export default SessionAuth