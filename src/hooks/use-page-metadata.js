import { graphql, useStaticQuery } from "gatsby"

export const usePageMetadata = () => {
    const query = useStaticQuery(
        graphql`
    {
        allDataJson(filter: {
        pages: {
            elemMatch: {page: {eq: "index"},
                sections: {elemMatch: {id: {eq: 1}}}}}}
    ) {
        edges {
            node {
                pages {
                    id
                    page
                    seo {
                        title
                        description
                        author
                    }
                    sections {
                        id
                        sectionType
                        sectionData {
                            imgPath
                            textH1
                            textP
                            backgroundColor
                            imgPath
                            imgAlt
                            btnText
                            btnLinkTo
                            ticketSalesOpen
                            ticketTypes {
                                id
                                ticketType
                                ticketName
                                price
                            }
                            talksCards {
                                id
                                imgPath
                                imgAlt
                                topic
                                author
                                position
                                company
                                brief
                            }
                            speakersCards {
                                id
                                imgPath
                                speaker
                                position
                                company
                                speakerBio
                            }
                        }
                    }
                    header {
                        bg
                        logoImg
                        logoLnk
                        logoAlt
                        conferenceTitle
                        links {
                            id
                            name
                            linkTo
                            sublinks {
                                id
                                name
                                linkTo
                            }
                        }
                    }
                }
            }
        }
    }
    }
    `)
    return query.allDataJson.edges[0].node.pages[0]
}