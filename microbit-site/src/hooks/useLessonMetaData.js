import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

export const useLessonMetaData = () => {
  const { dataJson } = useStaticQuery(
    graphql`
      query LessonMetaDataQuery {
        dataJson {
          title
          subtitle
          age
          durationInMinutes
          programmingLanguage
          introduction
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
