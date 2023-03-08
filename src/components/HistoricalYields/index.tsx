import React from 'react'
import ReactDOM from 'react-dom/client'
import consoleError from '../../utils/console-error'
import HistoricalYields from './HistoricalYields'

const clientRoot = document.getElementById('root')
if (clientRoot === null) {
  consoleError('Root element not found (#root)')
} else {
  const root = ReactDOM.createRoot(clientRoot)
  root.render(
    <React.StrictMode>
    <HistoricalYields />
  </React.StrictMode>
  )
}

export default HistoricalYields
