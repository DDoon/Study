import React from 'react'
import { NavLink } from 'react-router-dom'
import { Grid } from 'src/components/Grid'
import { StyledLnb } from 'src/components/TheHeader/Lnb/styles'
import { useRouter } from 'src/hooks/useRouter'
import navMap from '../../navMap.json'
import { getPageUrl } from '../../utils'
interface LnbProps {
  className?: string
}

export const Lnb: React.FC<LnbProps> = ({ className }) => {
  const { location } = useRouter()
  let [, category] = location.pathname.split('/')
  category = category.split('?')[0]

  if (!['community', 'store', 'expert'].includes(category))
    category = 'community'
  const urlMap = navMap[category as keyof typeof navMap]

  return (
    <StyledLnb>
      <Grid sm={4}>
        <h1 className="visually-hidden">스토어 메뉴</h1>

        <ul>
          {Object.entries(urlMap).map(([url, label]) => {
            return (
              <li key={`lnb-${url}`}>
                <NavLink to={getPageUrl(category, url)}>{label}</NavLink>
              </li>
            )
          })}
        </ul>
      </Grid>
    </StyledLnb>
  )
}
