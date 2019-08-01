import { Link, useStaticQuery, graphql } from 'gatsby'

export const useLessonStepsData = () => {
  const { dataJson } = useStaticQuery(
    graphql`
      query LessonQuery {
        dataJson {
          title
          programmingLanguage
          activity {
            steps {
              text
              javaScriptBlocks
            }
          }
        }
      }
    `
  )

  return dataJson
}
