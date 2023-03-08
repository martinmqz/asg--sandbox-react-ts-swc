
export default function consoleLog (...params:unknown[]) {
  const prefix = '::ASG:: '
  console.log.apply(window, [prefix, ...params])
}
