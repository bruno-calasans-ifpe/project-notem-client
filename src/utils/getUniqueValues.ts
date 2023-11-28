/* eslint-disable no-restricted-syntax */
export default function getUniqueValues<T>(data: T[]) {
  const uniques: T[] = []

  for (const item of data) {
    if (!uniques.includes(item)) {
      uniques.push(item)
    }
  }

  return uniques
}
