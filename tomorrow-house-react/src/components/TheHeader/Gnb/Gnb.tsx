import React from 'react'
import classnames from 'classnames'
import { StyledGnb } from '../Gnb/styles'
import { Grid } from '../../Grid'
import { Link } from 'react-router-dom'
import { Logo } from 'src/assets/icons/index'

interface GnbProps {
  className: string
}

export const Gnb: React.FC<GnbProps> = ({ className }) => {
  return (
    <StyledGnb className={classnames('gnb', className)}>
      <Grid sm={4}>
        <div className="gnb-wrapper">
          <div className="gnb-left">
            <div className="logo">
              <Link to="/">
                <Logo />
              </Link>
            </div>
          </div>
        </div>
      </Grid>
    </StyledGnb>
  )
}
