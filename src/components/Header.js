import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <h1>Lambda Eats</h1>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/order'>Order</Link>
      </nav>
    </header>
  )
}
