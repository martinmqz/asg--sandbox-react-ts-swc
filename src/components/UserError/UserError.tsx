import React from 'react'
import consoleError from '../../utils/console-error'

interface ErrorProp {
  error: Error,
  customMessage?: string
}
/* ================================================== start Component ================================================== */
export default function UserError (props:ErrorProp) {
  // if (!props.error) return <></>

  // Log error
  consoleError(props)

  // Render error message
  const message = props.customMessage ?? props.error.message
  return (
    <div className='text-danger'>{message}</div>
  )
}
/* ==================================================  end Component  ================================================== */
