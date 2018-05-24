import * as React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { increment, decrement } from 'actions/counter'
import Current from 'components/Count/Current'
import Button from 'components/Universal/Button'

export class Count extends React.Component<any> {
  render() {
    return (
      <div>
        <Current count={this.props.count} />
        <Button onClick={this.props.onIncrement}>Increment</Button>
        <Button onClick={this.props.onDecrement}>Decrement</Button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement())
  }
}

function mapStateToProps(state) {
  return { count: state.counter.count }
}

export default connect(mapStateToProps, mapDispatchToProps)(Count)
