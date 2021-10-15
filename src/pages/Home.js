import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import PageContainer from '../components/Page'
import pizza from '../static/Pizza.jpg'

const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;

  * {
    transition: 2ms;
  }

  div {
    width: 100%;
    height: 20vh;

    img {
      width: 100%;
    }
  }

  button {
    padding: 2% 5%;
    color: white;
    font-weight: bold;
    background: ${({ theme }) => theme.dark};
    cursor: pointer;
    border: none;

    &:hover {
      background: ${({ theme }) => theme.blue};
    }
  }
`

export default function Home() {
  const history = useHistory()

  return (
    <PageContainer>
      <HomePage>
        <div>
          <img src={pizza} alt='pizza' />
        </div>
        <button onClick={() => history.push('/pizza')}>Order</button>
      </HomePage>
    </PageContainer>
  )
}
