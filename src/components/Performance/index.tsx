import React from 'react'
import ReactDOM from 'react-dom/client'
import getAudience from '../../helpers/get-audience'
import Performance from './Performance'
import get from 'lodash-es/get'
import HARDCODED_LOOKUPS from '../../config/HARDCODED_LOOKUPS'
import consoleError from '../../utils/console-error'

const clientRoot = document.getElementById('root')
if (clientRoot === null) {
  consoleError('Root element not found (#root)')
} else {
  const root = ReactDOM.createRoot(clientRoot)
  const audience = getAudience()
  //
  /// Define legacy client-group
  const clientCountryId = get(audience.country, 'id') as string
  const clientRoleId:string = get(audience.role, 'id') as string
  const legacyClientGroups:Record<string, string> = {
    'US-FA': '1',
    'US-DI': '3',
    'US-IC': '4',
    'US-II': '5 '
  }
  const legacyClientGroupId:string = clientCountryId && clientRoleId && legacyClientGroups[`${clientCountryId}-${clientRoleId}`]
  const clientGroup = HARDCODED_LOOKUPS.clientGroups[legacyClientGroupId.trim()]

  root.render(
  <React.StrictMode>
    <Performance clientGroup={clientGroup} />
  </React.StrictMode>
  )
}
export default Performance
