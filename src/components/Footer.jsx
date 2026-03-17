import './Footer.css'

const columns = ['Community', 'Support', 'Resource', 'More', 'Company']
const rows = [
  ['MSI Reward Program', 'Downloads', 'Press Room', 'About MSI', 'Artificial Intelligence'],
]

export default function Footer() {
  return (
    <footer>
      <table>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 6 }).map((_, i) => (
            <tr key={i}>
              {rows[0].map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </footer>
  )
}
