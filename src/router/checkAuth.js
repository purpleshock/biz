import * as tokenApi from '../store/services/token'

export const needLogin = (redirect = '/') => async (to, from, next) => {
  try {
    await tokenApi.checkToken()
    next()
  } catch (err) {
    next(redirect)
  }
}

export const needAnnoymous = (redirect = '/dashboard') => async (to, from, next) => {
  const token = tokenApi.getToken()
  if (token) {
    next(redirect)
  } else {
    next()
  }
}
