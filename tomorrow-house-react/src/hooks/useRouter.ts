import { useNavigate, useLocation } from 'react-router-dom'

const useQuery = () => {
  return new URLSearchParams(useLocation().search)
}

export const useRouter = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const query = useQuery()

  return {
    pathname: location.pathname,
    query,
    location,
    navigate,
  } as const
}
