import type { FC } from 'react'
import { Helmet, HelmetData } from 'react-helmet-async'
import {
  AUTHOR,
  KEYWORDS,
  OG_SITE_NAME,
  OG_TYPE_CONTENT,
  ROBOTS,
} from 'src/constants'

type Props = {
  tabTitle?: string
  metaDescriptionContent?: string
  metaOgTitleContent?: string
  metaOgDescriptionContent?: string
  metaOgURLContent?: string
  metaOgImageContent?: string
}

export const SEO: FC<Props> = ({
  tabTitle,
  metaDescriptionContent,
  metaOgTitleContent,
  metaOgDescriptionContent,
  metaOgURLContent,
}) => {
  const helmetData = new HelmetData({}, true)
  return (
    <Helmet helmetData={helmetData}>
      <title>{tabTitle}</title>

      <meta name='description' content={metaDescriptionContent} />
      <meta name='keywords' content={KEYWORDS} />
      <meta name='robots' content={ROBOTS} />
      <meta name='author' content={AUTHOR} />

      {/* meta OG */}
      <meta property='og:title' content={metaOgTitleContent} />
      <meta property='og:description' content={metaOgDescriptionContent} />
      <meta property='og:type' content={OG_TYPE_CONTENT} />
      <meta property='og:url' content={metaOgURLContent} />
      {/* <meta property='og:image' content={metaOgImageContent} /> */}
      <meta property='og:site_name' content={OG_SITE_NAME} />
    </Helmet>
  )
}
