import React from 'react'
import { useParams } from 'react-router'
const Portfolio = () => {
    const ParamsData = useParams();
    console.log(ParamsData.id)

  return (
    <div>
      
    </div>
  )
}

export default Portfolio
