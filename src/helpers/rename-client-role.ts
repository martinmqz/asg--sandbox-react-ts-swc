// *Legacy
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */

import find from 'lodash-es/find'
import get from 'lodash-es/get'

export default function renameClientRole (client:any) {
  const aliasedRole = find(get(client.role, 'metadata.aliases', []), alias => alias.country === client.country.id)
  client.role.name = aliasedRole ? aliasedRole.alias : client.role.name
}
