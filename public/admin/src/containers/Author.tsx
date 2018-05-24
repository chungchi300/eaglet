import * as React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Button from 'components/Universal/Button'
import Name from 'components/Author/Name'
import { setName } from 'actions/author'

export class Author extends React.Component<any> {
  static propTypes = {}

  render() {
    return (
      <div>
        <Button onClick={this.props.setName}>set name to jeff chung</Button>
        <Name name={this.props.name} />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setName: () => dispatch(setName('jeff chung'))
  }
}

function mapStateToProps(state) {
  return { name: state.author.name }
}

export default connect(mapStateToProps, mapDispatchToProps)(Author)
