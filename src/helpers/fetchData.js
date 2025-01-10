export const fetchdata = async (endPoint) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`)
      const data = await response.json()
      console.log(data)
      // setData(data)
      // setIsLoading(false)
      return {
        data,
        isLoading: false
      }
    } catch (error) {
      console.error(error)
    }
  }