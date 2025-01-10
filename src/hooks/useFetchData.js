import { useEffect, useState } from 'react'
import { fetchdata } from '../helpers/fetchData'

export const useFetchData = ( endPoint ) => {

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  /*
  const fetchdata = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`)
      const data = await response.json()
      console.log(data)
      setData(data)
      setIsLoading(false)
    } catch (error) {
      console.error(error)
    }
  }
    */

  const getData = async () => {
    const {data, isLoading} = await fetchdata (endPoint)
    setData(data)
    setIsLoading(isLoading)
  }

  useEffect(() => {
    getData()
  }, [endPoint])

  return {
    data,
    isLoading
  }
}
