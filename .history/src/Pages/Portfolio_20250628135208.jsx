import React from 'react'
import { useParams } from 'react-router'
const Portfolio = () => {
    const ParamsData = useParams();
    console.log(ParamsData.username)

  return (
    <div>
      
    </div>
  )
}

export default Portfolio
