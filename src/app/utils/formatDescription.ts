import { Child } from '../types'

export function formatDescription(children: Child[]): string {
  return children
    .map((child) => {
      let text = child.text
      if (child.bold === true && child.italic === true) {
        text = `<strong><em>${text}</em></strong>`
      }
      if (child.bold === true) {
        text = `<strong>${text}</strong>`
      }
      if (child.italic === true) {
        text = `<em>${text}</em>`
      }
      return text
    })
    .join('')
}
