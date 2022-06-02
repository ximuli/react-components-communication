import React, { Component } from 'react'
import UserInfoCard from './UserInfoCard'
import { myContext } from './myContext'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      myInfo: {
        avatarURL: 'https://p26-passport.byteacctimg.com/img/user-avatar/76a815f3450e3c836f11f32a058444d8~300x300.image',
        name: 'leyili',
        occupation: 'FED',
        motto: '生活不奖赏心血来潮。'
      }
    }
  }

  changeOccupation = (newVal) => {
    this.setState({
      myInfo: {
        ...this.state.myInfo,
        occupation: newVal
      }
    })
  }

  render() {
    return (
      <myContext.Provider value={{ motto: this.state.myInfo.motto }} >
        <UserInfoCard
          avatarURL={this.state.myInfo.avatarURL}
          name={this.state.myInfo.name}
          occupation={this.state.myInfo.occupation}
          motto={this.state.myInfo.motto}
          changeOccupation={this.changeOccupation}
        />
      </myContext.Provider>
    )
  }
}