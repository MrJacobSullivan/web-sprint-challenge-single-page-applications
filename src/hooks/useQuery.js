import { useLocation } from 'react-router-dom'

// found in react-router-dom docs
// allows the retrieval of query strings from the url
export const useQuery = () => new URLSearchParams(useLocation().search)
