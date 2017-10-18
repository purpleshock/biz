import * as tokenApi from '../store/services/token'

export const needLogin = (redirect = '/') => async (to, from, next) => {
  let isValid = false
  try {
    isValid = await tokenApi.checkToken()
  } catch (err) {
    tokenApi.removeToken()
  } finally {
    if (isValid) {
      next()
    } else {
      next(redirect)
    }
  }
}

export const needAnnoymous = (redirect = '/dashboard') => async (to, from, next) => {
  const token = tokenApi.getToken()
  if (!token) {
    return next()
  }

  let isValid = false
  try {
    isValid = await tokenApi.checkToken()
  } catch (err) {
    tokenApi.removeToken()
  } finally {
    if (isValid) {
      next(redirect)
    } else {
      next()
    }
  }
}
