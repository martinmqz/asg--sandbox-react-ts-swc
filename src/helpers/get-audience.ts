// *Legacy
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

/* eslint-disable @typescript-eslint/no-explicit-any */
import find from 'lodash-es/find'
import merge from 'lodash-es/merge'
import getClientGroups from './get-client-groups'
import getCookie from './get-cookie'
import HARDCODED_LOOKUPS from '../config/HARDCODED_LOOKUPS'
import renameClientRole from './rename-client-role'

/**
 * Simplified version of "getClientSettings()"
 * @returns Audience object
 */
export default function getAudience () {
  const lookups = HARDCODED_LOOKUPS
  const cookie = getCookie()
  const client:any = {
    country: find(lookups['client-country'], { id: cookie.country }),
    role: find(lookups['client-role'], { id: cookie.role }),
    cookies: cookie.cookies,
    groups: []
  }
  window.wfam = merge(window.wfam || {}, {
    country: client.country,
    role: client.role
  })

  if (client.country && client.role) {
    client.groups = getClientGroups(client, lookups)
    renameClientRole(client)
  }
  return {
    country: client.country,
    role: client.role,
    groups: client.groups,
    cookies: client.cookies,
    lookups
  }
}
