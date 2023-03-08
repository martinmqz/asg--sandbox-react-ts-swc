import React from 'react'
import ReactDOM from 'react-dom/client'
import consoleError from '../../utils/console-error'
import getPageNameWithoutExtension from '../../utils/get-page-name-without-extension'
import RateReport from './RateReport'

const clientRoot = document.getElementById('root')
if (clientRoot === null) {
  consoleError('Root element not found (#root)')
} else {
  const pageName = getPageNameWithoutExtension()
  const root = ReactDOM.createRoot(clientRoot)

  root.render(
  <React.StrictMode>
    <RateReport pageId={pageName} />
  </React.StrictMode>
  )
}
export default RateReport
