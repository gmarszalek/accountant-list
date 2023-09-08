import styled from "styled-components"

export const CardListContainer = styled("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`

export const CardHeader = styled("div")`
  display: flex;
  align-items: stretch;
  margin-bottom: 24px;

  img {
    margin-right: 16px;
    width: 64px;
    height: 64px;
    border-radius: 8px;
  }
`

export const CardNameConatiner = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const CardLabel = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: rgb(84, 88, 92);
`

export const CardName = styled.p`
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
`

export const CardDetail = styled("div")`
  margin-bottom: 24px;
`

export const CardDetailLabel = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: rgb(84, 88, 92);
`

export const CardDetailValue = styled.p`
  font-size: 16px;
  line-height: 24px;

  a {
    color: #000000;
  }

  span {
    font-size: 12px;
  }
`
