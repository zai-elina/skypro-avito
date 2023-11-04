export function maskString(str: string) {
  if (str.length <= 3) {
    return str
  }

  const firstThreeChars = str.substring(0, 3)
  const remainingChars = str.substring(3)
  const maskedChars = remainingChars.replace(/./g, 'X')

  return firstThreeChars + maskedChars
}
