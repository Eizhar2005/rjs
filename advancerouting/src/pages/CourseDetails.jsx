import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetails = () => {

    const params = useParams() //useParams() hook is used to access the dynamic parameters from the URL. 

  return (
    <div>
      <h1>{params.id }Course Details</h1>
      {/* Display the course ID from the URL parameters */}
    </div>
  )
}

export default CourseDetails
