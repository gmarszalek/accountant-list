import Card from "../card/card"
import Button from "../button/button"
import {
  CardListContainer,
  CardHeader,
  CardNameConatiner,
  CardLabel,
  CardName,
  CardDetail,
  CardDetailLabel,
  CardDetailValue,
} from "./accountant-list.styles"
import { AccountantType } from "../../hooks/use-fetch"

interface AccountantListProps {
  results: AccountantType[]
}

const AccountantList = ({ results }: AccountantListProps) => {
  return (
    <CardListContainer>
      {results.map((result) => {
        const { cell, name, email, picture, login } = result

        return (
          <Card key={login.uuid}>
            <CardHeader>
              <img src={picture.thumbnail} alt="img" />
              <CardNameConatiner>
                <CardLabel>Twoja księgowa</CardLabel>
                <CardName>
                  {name.first} {name.last}
                </CardName>
              </CardNameConatiner>
            </CardHeader>
            <div>
              <CardDetail>
                <CardDetailLabel>E-mail</CardDetailLabel>
                <CardDetailValue>
                  <a href={`mailto:${email}`}>{email}</a>
                </CardDetailValue>
              </CardDetail>
              <CardDetail>
                <CardDetailLabel>Telefon</CardDetailLabel>
                <CardDetailValue>{cell}</CardDetailValue>
              </CardDetail>
              <CardDetail>
                <CardDetailLabel>
                  Średnia cena netto usługi / m-c
                </CardDetailLabel>
                <CardDetailValue>
                  350,00 <span>PLN</span>
                </CardDetailValue>
              </CardDetail>
            </div>

            <Button label="Dowiedz się więcej" />
          </Card>
        )
      })}
    </CardListContainer>
  )
}

export default AccountantList
