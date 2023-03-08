// *Legacy
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */

import mapValues from 'lodash-es/mapValues'
import keyBy from 'lodash-es/keyBy'
import flatMap from 'lodash-es/flatMap'
import get from 'lodash-es/get'
import { ILookups } from '../config/HARDCODED_LOOKUPS'

export default function getClientGroups (client:any, lookups:ILookups) {
  // Object with each property representing a region; key is id of region and value is array of countries belonging to that region
  const regions = mapValues(keyBy(lookups['client-region'], 'id'), region => get(region, 'metadata.countries', []))

  // Array of client groups (ids) to which currently-self-id'ed client belongs
  return flatMap(lookups['client-group'], (clientGroup:any) => {
    let includesCountry
    const includesRole = get(clientGroup, 'metadata.roles', []).indexOf(client.role.id) > -1

    if (get(clientGroup, 'metadata.regions', []).length) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      includesCountry = flatMap(clientGroup.metadata.regions, region => regions[region]).includes(client.country.id as never)
    } else {
      includesCountry = get(clientGroup, 'metadata.countries', []).indexOf(client.country.id) > -1
    }

    return includesCountry && includesRole ? clientGroup.id : []
  })
}
