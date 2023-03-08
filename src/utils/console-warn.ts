
export default function consoleWarn (...params:unknown[]) {
  const prefix = '::ASG:: '
  console.warn.apply(window, [prefix, ...params])
}
