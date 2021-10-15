import { Route } from 'react-router-dom'
import Layout from './components/Layout'

import Home from './pages/Home'
import Order from './pages/Order'
import Confirmation from './pages/Confirmation'

export default function App() {
  return (
    <Layout>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/pizza'>
        <Order />
      </Route>
      <Route path='/confirmation'>
        <Confirmation />
      </Route>
    </Layout>
  )
}
