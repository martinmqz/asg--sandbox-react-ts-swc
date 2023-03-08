// *Legacy
/* eslint-disable @typescript-eslint/no-unsafe-return */

import * as Cookies from 'browser-cookies'
import consoleError from '../utils/console-error'
import getCookieForBot from './get-cookie-for-bot'

export default function getCookie () {
  const isBot = /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)
  const defaultCookie = isBot ? getCookieForBot() : {}

  try {
    return JSON.parse(atob(Cookies.get('agih') ?? '') || JSON.stringify(defaultCookie))
  } catch (error) {
    consoleError(error)
  }

  return {}
}
