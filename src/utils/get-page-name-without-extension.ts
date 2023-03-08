/**
 *
 * @param pathname Optional
 * @returns Page name or empty string
 */
export default function getPageNameWithoutExtension (pathname:string = location.pathname) {
  const lastSlashIndex = pathname.lastIndexOf('/')
  const lastDotIndex = pathname.lastIndexOf('.')
  return (~lastDotIndex ? pathname.substring(lastSlashIndex, lastDotIndex) : pathname.substring(lastSlashIndex)).replace('/', '')
}
