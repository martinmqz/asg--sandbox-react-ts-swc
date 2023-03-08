
export default function tableToCSV (table:HTMLTableElement) {
  const rows = table.querySelectorAll('tr')
  const csv = []
  for (const row of rows) {
    const data = []
    const cols = row.querySelectorAll('td, th')
    for (const col of cols) {
      let content = col.textContent ?? ''
      content = content.replace(/[\s]{2,}/gm, ' ') // remove multiple space
      content = content.replace(/"/g, '""') // escape double quotes
      data.push(`"${content}"`)
    }
    csv.push(data.join(','))
  }
  const csvStr = csv.join('\n')
  return csvStr
}
