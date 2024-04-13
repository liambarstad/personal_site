import React, { Component } from 'react'
import FullPageImage from '../shared/full-page-image'
import FloatingInfo from '../shared/floating-info'

export default class BlogSection extends Component {
  render() {
    return (
      <FullPageImage
        imageName='grid'
        minScroll={this.props.minScroll}
        maxScroll={this.props.maxScroll}
        backgroundPosFactor={2.5}
        sectionName='blog'
      >
        <FloatingInfo
          offsetTop='20vh'
          offsetLeft='20vw'
          offsetRight='50vw'
          showWhenWithin='10vh'
          minScroll={this.props.minScroll}
          maxScroll={this.props.maxScroll}
        >
          <h2 className='modal gray-background'>Want to know more?</h2>
        </FloatingInfo>

        <FloatingInfo
          offsetTop='40vh'
          offsetLeft='45vw'
          offsetRight='5vw'
          showWhenWithin='10vh'
          minScroll={this.props.minScroll}
          maxScroll={this.props.maxScroll}
        >
          <h1 className='modal gray-background'>Check out my blog!</h1>
        </FloatingInfo>

        <FloatingInfo
          offsetTop='60vh'
          offsetLeft='35vw'
          showWhenWithin='10vh'
          minScroll={this.props.minScroll}
          maxScroll={this.props.maxScroll}
        >
          <h2 className='modal gray-background'>(Cuz I write stuff now)</h2>
        </FloatingInfo>
      </FullPageImage>
    )
  }
}
