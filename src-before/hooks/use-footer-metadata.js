import { graphql, useStaticQuery } from "gatsby"

export const useFooterMetadata = () => {
    const query = useStaticQuery(
        graphql`
    { 
      allDataJson{
        edges {
          node {
            siteWideProps {
              footer {
                backgroundColor
                disclaimer
                links {
                    id
                    name
                    linkTo
                    onClick
                }
              }
            }
          }
        }
      }
    }
    `)
    return query.allDataJson.edges[0].node.siteWideProps
}