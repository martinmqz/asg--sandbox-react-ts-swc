import React from 'react'
import ReactDOM from 'react-dom/client'
import DemoApp from './DemoApp'
import consoleError from './utils/console-error'

const clientRoot = document.getElementById('root')
if (clientRoot === null) {
  consoleError('Root element not found (#root)')
} else {
  const root = ReactDOM.createRoot(clientRoot)
  root.render(
    <React.StrictMode>
      <DemoApp />
    </React.StrictMode>
  )

  // // WebpackDevServer: Check if HMR interface is enabled
  // if (module.hot) {
  // // Accept hot update
  //   module.hot.accept()
}
