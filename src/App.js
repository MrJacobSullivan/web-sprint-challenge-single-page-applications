import { Route } from 'react-router-dom'
import Layout from './components/Layout'

import Home from './pages/Home'
import Order from './pages/Order'
import Confirmation from './pages/Confirmation'

const App = () => {
  return (
    <Layout>
      <Route exact path='/' component={Home} />
      <Route path='/order' component={Order} />
      <Route path='/confirmation' component={Confirmation} />
    </Layout>
  )
}
export default App
