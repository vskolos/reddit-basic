interface CookieOptions {
  path?: string
  expires?: string | Date
  maxAge?: number
}

export function setCookie(
  name: string,
  value: string,
  options: CookieOptions = {}
) {
  options = {
    path: '/',
    ...options,
  }

  let updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value)
  updatedCookie += '; path=' + options.path

  if (options.expires instanceof Date)
    options.expires = options.expires.toUTCString()
  if (options.expires) updatedCookie += '; expires=' + options.expires

  if (options.maxAge) updatedCookie += '; max-age=' + options.maxAge

  document.cookie = updatedCookie
}

export function getCookie(name: string): string | undefined {
  let matches = document.cookie.match(
    new RegExp(
      '(?:^|; )' +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
        '=([^;]*)'
    )
  )
  return matches ? decodeURIComponent(matches[1]) : undefined
}

export function deleteCookie(name: string) {
  setCookie(name, '', {
    maxAge: -1,
  })
}
