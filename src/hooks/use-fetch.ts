import { useState, useEffect } from "react"

export type AccountantType = {
  cell: string
  name: {
    first: string
    last: string
  }
  email: string
  picture: { thumbnail: string; medium: string }
  login: {
    uuid: string
  }
}

type AccountantResponseType = {
  results: AccountantType[]
  isLoading: boolean
}

const useFetch = (url: string, pageNumber: number): AccountantResponseType => {
  const [isLoading, setIsLoading] = useState(false)
  const [results, setResults] = useState<AccountantType[]>([])

  useEffect(() => {
    setIsLoading(true)

    const fetchData = async () => {
      try {
        const response = await fetch(`${url}${pageNumber}`)

        if (response.ok && response.status === 200) {
          const data = await response.json()

          if (pageNumber > 1) {
            setResults((prev) => {
              return [...prev, ...data.results]
            })
          } else {
            setResults(data.results)
          }

          setIsLoading(false)
        } else {
          throw new Error("Request failed")
        }
      } catch (error) {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [url, pageNumber])

  return { results, isLoading }
}

export default useFetch
