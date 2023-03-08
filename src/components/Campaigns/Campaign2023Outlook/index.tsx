import React from 'react'
import ReactDOM from 'react-dom/client'
import consoleError from '../../../utils/console-error'
import Campaign2023Outlook from './Campaign2023Outlook'

const clientRoot = document.getElementById('root')
if (clientRoot === null) {
  consoleError('Root element not found (#root)')
} else {
  const root = ReactDOM.createRoot(clientRoot)
  const isUSA = window.location.pathname.includes('/us/') || window.location.pathname.includes('/usa/')
  root.render(
    <React.StrictMode>
      <Campaign2023Outlook isUSA={isUSA} />
    </React.StrictMode>
  )
}
export default Campaign2023Outlook
