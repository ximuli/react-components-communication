import React, { Component } from 'react'
import Motto from './Motto'

export default class UserInfoCard extends Component {
  constructor(props) {
    super(props)
  }
  change = () => {
    this.props.changeOccupation('在线炒粉')
  }
  render() {
    return (
      <div className='card-wrapper'>
        <img className='avatar' src={this.props.avatarURL} alt='avatar' />
        <div>姓名：{this.props.name}</div>
        <div>职业：{this.props.occupation}</div>
        {/* <div>座右铭：{this.props.motto}</div> */}
        {/* <Motto motto={this.props.motto} /> */}
        <Motto />
        <button onClick={this.change}>更换职业</button>
      </div>
    )
  }
}
