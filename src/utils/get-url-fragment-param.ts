
/**
 *
 * @param name Hash parameter name
 * @param fragment (Optional) Hash string passed or location.hash
 * @returns String | null
 */
export default function getUrlFragmentParam (name:string, fragment:string = window.location.hash):string {
  let hash = fragment ? (fragment.startsWith('#') ? fragment.substring(1) : fragment) : ''
  hash = window.decodeURIComponent(hash)
  const paramsObj:Record<string, string> = {}
  const keyValPairArr = hash.split('&')

  for (const keyValPair of keyValPairArr) {
    const keyValArr = keyValPair.split('=')
    const key = keyValArr[0]
    const val = keyValArr[1]

    if (paramsObj[key]) { // if already exists
      paramsObj[key] += ',' + val
    } else {
      paramsObj[key] = val
    }
  }

  if (paramsObj[name]) {
    return paramsObj[name]
  } // else
  return ''
}
