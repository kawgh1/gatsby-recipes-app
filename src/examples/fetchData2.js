import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query {
    site {
      info: siteMetadata {
        author
        description
        simpleData
        title
        complexData {
          age
          name
        }
        person {
          age
          name
        }
      }
    }
  }
`
const FetchData2 = () => {
  const {
    site: {
      info: { title, complexData },
    },
  } = useStaticQuery(getData)

  return (
    <div>
      {/* <h2>Name : {data.site.info.person.name}</h2> */}
      <h2>site title is : {title}</h2>
      <div>
        <h2>Iterate over object data</h2>
        {complexData.map((item, index) => {
          return (
            <p key={index}>
              {item.name}: {item.age}
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default FetchData2
