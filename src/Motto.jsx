import React, { Component } from 'react'
import { myContext } from './myContext'

export default class Motto extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    console.log('this', this)
  }
  static contextType = myContext
  render() {
    return (
      // <div>座右铭：{this.props.motto}</div>
      // <div>座右铭：{this.context.motto}</div>
      <myContext.Consumer>
        {value => <div>座右铭：{this.context.motto}</div>}
      </myContext.Consumer>
    )
  }
}
