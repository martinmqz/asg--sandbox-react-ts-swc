import React from 'react'
import ReactDOM from 'react-dom/client'
import consoleError from '../../utils/console-error'
import Charts from './Charts'

const clientRoot = document.getElementById('root')
if (clientRoot === null) {
  consoleError('Root element not found')
} else {
  const root = ReactDOM.createRoot(clientRoot)
  root.render(
    <React.StrictMode>
      <Charts/>
    </React.StrictMode>
  )
}
