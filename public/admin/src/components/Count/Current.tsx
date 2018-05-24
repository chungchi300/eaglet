import * as React from 'react'
import _ from 'lodash'
import styled from 'styled-components'
import { numberType } from 'helpers/util'

interface Props {
  className?: string
  count: any
}
function Current({ className, count }: Props) {
  return (
    <div className={className}>
      Current : {count} {numberType(count)}
    </div>
  )
}
export default styled(Current)`
  background-color: black;
  color: white;
`
