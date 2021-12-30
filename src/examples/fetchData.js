import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ComponentName = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
          complexData {
            age
            name
          }
          description
          person {
            age
            name
          }
          simpleData
          title
        }
      }
    }
  `)
  //   return <pre>{JSON.stringify(data, null, 4)}</pre>
  return (
    <div>
      <h2>Name : {data.site.siteMetadata.person.name}</h2>
      <h2>site title is : {data.site.siteMetadata.title}</h2>
      <div>
        <h2>Iterate over object data</h2>
        {data.site.siteMetadata.complexData.map((item, index) => {
          return (
            <p key={index}>
              {item.name}:{item.age}
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default ComponentName
