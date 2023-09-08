import { useState } from "react"
import useFetch from "../hooks/use-fetch"
import AccountantList from "../components/accountant-list/accountant-list"
import Button from "../components/button/button"
import { LoadMoreContainer } from "../components/load-more/load-more.styles"

const Accountant = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const { isLoading, results } = useFetch(
    `https://randomuser.me/api/?seed=abc&gender=female&results=4&page=`,
    pageNumber
  )

  return (
    <>
      {results && results.length > 0 && (
        <>
          <AccountantList results={results} />
          <LoadMoreContainer>
            <Button
              label={isLoading ? "Ładowanie..." : "Załaduj kolejne karty"}
              onClick={() => setPageNumber((prevSate) => prevSate + 1)}
              disabled={isLoading}
            />
          </LoadMoreContainer>
        </>
      )}
      {isLoading && <p>Loading...</p>}
    </>
  )
}

export default Accountant
