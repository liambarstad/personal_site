import React, { Component } from 'react'
import FullPageImage from '../../../shared/full-page-image'
import FloatingInfo from '../../../shared/floating-info'
import SkillList from '../skill-list'

export default class Version1 extends Component {
  render() {
    return (
      <FullPageImage
        imageName='neurons3'
        minScroll={this.props.minScroll}
        maxScroll={this.props.maxScroll}
        backgroundPosFactor={2.5}
      >
        <FloatingInfo
          offsetTop='20vh'
          offsetLeft='40vh'
          showWhenWithin='15vh'
          minScroll={this.props.minScroll}
          maxScroll={this.props.maxScroll}
        >
          <h1>Skills</h1>
        </FloatingInfo>

        <FloatingInfo
          offsetTop='80vh'
          offsetLeft='20vh'
          showWhenWithin='30vh'
          minScroll={this.props.minScroll}
          maxScroll={this.props.maxScroll}
        >
          <div className='modal gray-background'>
            <SkillList 
              height='60vh'
              width='30vw'
            />
          </div>
        </FloatingInfo>
      </FullPageImage>
    )
  }
}
