import consoleWarn from './console-warn'

export default function highchartReflow (hcChart: (Highcharts.Chart | undefined)) {
  setTimeout(() => {
    const hcContainer = hcChart?.container
    const parentElement = hcContainer?.parentElement
    if (parentElement) {
      if (hcContainer.offsetWidth > parentElement.offsetWidth) {
        hcChart?.reflow()
      }
    } else {
      consoleWarn('Highchart Chart\'s parent element not found')
    }
  }, 100)
}
