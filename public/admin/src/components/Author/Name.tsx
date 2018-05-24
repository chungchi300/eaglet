import * as React from 'react'
import styled from 'styled-components'

interface Props {
  className?: string
  name: string
}
import { getAuthorType } from 'helpers/util'
function Name({ className, name }: Props) {
  return (
    <div className={className}>
      Author:{getAuthorType(name)} {name}
    </div>
  )
}
export default styled(Name)`
  color: blue;
`
