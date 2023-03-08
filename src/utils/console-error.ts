
export default function consoleError (...params:unknown[]) {
  const prefix = '::ASG:: '
  console.error.apply(window, [prefix, ...params])
}
