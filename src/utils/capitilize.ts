function capitalize(text: string) {
  const firstLetter = text[0].toUpperCase()
  const rest = text.slice(1)
  return firstLetter + rest
}

export default capitalize
