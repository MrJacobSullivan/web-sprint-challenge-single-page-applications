import { useHistory } from 'react-router-dom'
import { useQuery } from '../hooks/useQuery'
import PageContainer from '../components/Page'

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
      <h2>Confirmation</h2>
      <p>Order #{query.get('order-id')}</p>
    </PageContainer>
  )
}
