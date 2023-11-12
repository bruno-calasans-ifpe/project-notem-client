import slugify from 'slugify'

export default function slug(url: string) {
  return slugify(url, { lower: true })
}
