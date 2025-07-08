import React from 'react'
import { useParams } from 'react-router'
const Portfolio = () => {
    const ParamsData = useParams();
    console.log(ParamsData.username)

  return (
    <div>
      <h1>portfolio :{useParams.id} </h1>
    </div>
  )
}

export default Portfolio
