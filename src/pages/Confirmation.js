import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { useQuery } from '../hooks/useQuery'
import PageContainer from '../components/Page'
import pizza from '../static/Pizza.jpg'

const ConfirmationPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;

  * {
    transition: 2ms;
  }

  .img {
    width: 100%;
    height: 20vh;

    img {
      width: 100%;
    }
  }

  .text {
    width: 40%;
    height: calc(40vh * 0.4);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.dark};
    color: ${({ theme }) => theme.light};

    h2 {
      font-size: 1.8rem;
      padding-bottom: 5%;
    }
  }
`

export default function Confirmation() {
  const history = useHistory()
  const query = useQuery()

  // if no order id is present, route to home
  // can obviously be circumvented by passing in
  // a fake order-id
  if (!query.get('order-id')) {
    history.push('/')
  }

  return (
    <PageContainer>
      <ConfirmationPage>
        <div className='img'>
          <img src={pizza} alt='pizza' />
        </div>
        <div className='text'>
          <h2>Congratulations!</h2>
          <p>Order #{query.get('order-id')}</p>
        </div>
      </ConfirmationPage>
    </PageContainer>
  )
}
