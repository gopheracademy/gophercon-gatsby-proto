import React from  "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import { usePageMetadata } from "../../hooks/use-page-metadata.js"

const SEO = ({ description, lang, meta, title }) => {
    const seoData = usePageMetadata()

    const metaDescription = description || seoData.seo.description

    return (
        <Helmet
            htmlAttributes={{
            lang,
            }}
            title={title}
            titleTemplate={`%s | ${seoData.seo.title}`}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
            ].concat(meta)}
        />
    )
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
}

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
}

export default SEO