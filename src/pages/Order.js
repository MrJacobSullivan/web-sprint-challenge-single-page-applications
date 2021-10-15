import styled from 'styled-components'
import PageContainer from '../components/Page'
import OrderForm from '../components/OrderForm'

const OrderPage = styled.div`
  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      font-size: 1.8rem;
      text-align: center;
    }

    section {
      width: 45%;
      margin-top: 1%;
      display: flex;
      flex-direction: column;
      background: white;
      padding: 2%;

      * {
        padding-top: 0.625%;
      }

      h3 {
        font-size: 1.4rem;
        margin-bottom: 2%;
      }

      span {
        font-size: 0.8rem;
        color: ${({ theme }) => theme.red};
      }

      label {
        display: flex;
        justify-content: space-between;
      }

      input,
      select,
      textarea {
        min-height: fit-content;
      }

      textarea {
        margin: 5%;
      }

      button {
        width: 100%;
        padding: 2%;
        margin-top: 5%;
        cursor: pointer;
      }
    }
  }
`

export default function Order() {
  return (
    <PageContainer>
      <OrderPage>
        <OrderForm />
      </OrderPage>
    </PageContainer>
  )
}
