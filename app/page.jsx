"use client"
import React, {useEffect, useState} from 'react';

// Homepage
import Homepage from 'layout/Homepage';

// Loader
import Loader from '../components/Loader';





const page = () => {
  const [isLoading, setIsLoading] = useState(true);


useEffect(() => {
  // simulating async action
  setTimeout(() => {
    setIsLoading(false)
  }, 2000)
}, [])

  return (
  <>
{isLoading ? <Loader/> : <Homepage/>}
  </>
  )
}

export default page
