import styled from 'styled-components'
import Header from './Header'

const AppContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const MainContainer = styled.main`
  flex-grow: 1;
  width: 65%;
`

export default function Layout({ children }) {
  return (
    <AppContainer>
      <Header />
      <MainContainer>{children}</MainContainer>
    </AppContainer>
  )
}
