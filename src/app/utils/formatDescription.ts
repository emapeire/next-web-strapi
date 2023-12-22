import { Child } from '../types'

export function formatDescription(children: Child[]): string {
  return children
    .map((child) => {
      let text = child.text
      // Apply styles combinations
      if (child.bold && child.italic && child.underline) {
        text = `<strong><em><u>${text}</u></em></strong>`
      } else if (child.bold && child.italic) {
        text = `<strong><em>${text}</em></strong>`
      } else if (child.bold && child.underline) {
        text = `<strong><u>${text}</u></strong>`
      } else if (child.italic && child.underline) {
        text = `<em><u>${text}</u></em>`
      } else {
        // Apply styles individually
        if (child.bold) {
          text = `<strong>${text}</strong>`
        }
        if (child.italic) {
          text = `<em>${text}</em>`
        }
        if (child.underline) {
          text = `<u>${text}</u>`
        }
      }
      // Apply code
      if (child.code) {
        text = `<code>${text}</code>`
      }
      // Apply links
      if (child.href) {
        text = `<a href="${child.href}" target="_blank" rel="noopener noreferrer">${text}</a>`
      }
      return text
    })
    .join('')
}
