'use client'

import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'

export default function SeoProvider() {
  return <DefaultSeo {...SEO} />
}
