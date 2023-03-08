// *Legacy

export default function getCookieForBot () {
  const path = window.location.pathname
  const cookie = { country: 'US', role: 'FA' }
  if (path.includes('/account-access')) {
    cookie.role = 'DI'
  } else if (path.includes('/investments/funds/ucits/')) {
    cookie.country = 'LU'
  } else if (path.includes('/investments/capabilities') ||
        path.includes('/investements/strategies')) {
    cookie.role = 'II'
  }
  return cookie
}
