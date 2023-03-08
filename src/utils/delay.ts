/**
 * Debounce
 * @param fn
 * @param time
 * @returns
 */
export default function delay<Params extends unknown[]> (
  fn: (...args: Params) => unknown,
  time: number
): (...args: Params) => void {
  let wait = false

  return (...args: Params) => {
    if (wait) {
      return // return console.log('delaying...')
    }
    // else
    wait = true
    setTimeout(() => {
      fn(...args)
      wait = false // reset
    }, time)
  }
}
