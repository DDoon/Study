import React, { memo } from 'react'
import { Grid } from '../Grid'
import { StyledGlobalFooter } from 'src/components/TheFooter/styles'
import { ChevronIcon } from 'src/assets/icons'

const TheFooter: React.FC = () => {
  return (
    <StyledGlobalFooter>
      <Grid sm={4}>
        <h3 className="global-footer-title">
          고객센터
          <ChevronIcon className="chevron" />
        </h3>

        <a className="global-footer-contact" href="tel:1004-1004">
          1004-1004
        </a>

        <p className="global-footer-time">
          평일 09:00 ~ 18:00 (주말 & 공휴일 제외)
        </p>

        <dl className="global-footer-detail">
          <div>
            <dt>상호명</dt>
            <dd>버그가 너무많아</dd>
          </div>
          <div>
            <dt>이메일</dt>
            <dd>
              <address>
                <a href="mailto:bean@gmail.com">bean@gmail.com</a>
              </address>
              (제휴문의)
            </dd>
          </div>
          <div>
            <dt>대표이사</dt>
            <dd>박성빈</dd>
          </div>
          <div>
            <dt>주소</dt>
            <dd>
              <address>
                <a href="/">https://www.youtube.com/</a>
              </address>
            </dd>
          </div>
        </dl>
      </Grid>
    </StyledGlobalFooter>
  )
}

const MemoGlobalFooter = memo(TheFooter)
export { MemoGlobalFooter as TheFooter }
