import React from "react"

import { usePageMetadata } from "../hooks/use-page-metadata.js"

import SEO from '../components/seo/'
import Navbar from '../components/navigation/navbar'
import Bodysections from '../components/bodyBuilder'
import Footer from '../components/footer'

export default () => {
    const pageBuildingProps = usePageMetadata()

    return (
        <>
            <SEO title={pageBuildingProps.seo.title}
                description={pageBuildingProps.seo.description}
            />
            <Navbar navigationData={pageBuildingProps.header} />
            <main>
                { pageBuildingProps.sections.map (section => (
                    <Bodysections
                        key={section.id}
                        pageId={pageBuildingProps.id}
                        sectionId={section.id}
                        sectionType={section.sectionType}
                        sectionData={section.sectionData}
                    />
                ))}
            </main>
            <Footer
                pageId={pageBuildingProps.id}
            />
        </>

    )
}