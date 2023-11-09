export default function reverseSlugify(slug: string) {
  return slug
    .toLowerCase()
    .split('-')
    .map((i) => i[0].toUpperCase() + i.substring(1))
    .join(' ')
}
