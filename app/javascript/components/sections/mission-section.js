import React, { Component } from 'react'
import FullPageImage from '../shared/full-page-image'
import FloatingInfo from '../shared/floating-info'

export default class MissionSection extends Component {
  render() {
    return (
      <FullPageImage 
        imageName='particles'
        layerImages={6}
        minScroll={this.props.minScroll}
        maxScroll={this.props.maxScroll}
        backgroundPosFactor={7}
        sectionName='mission'
      >
        <FloatingInfo 
          offsetTop='10vh'
          offsetLeft='0vw'
          showWhenWithin='100vh'
          minScroll={this.props.minScroll}
          maxScroll={this.props.maxScroll}
        >
          <div className='header-container'>
            <h1>Liam Barstad</h1>
          </div>
        </FloatingInfo>

        <FloatingInfo
          offsetTop='80vh'
          offsetLeft='45vw'
          offsetRight='5vw'
          showWhenWithin='10vh'
          minScroll={this.props.minScroll}
          maxScroll={this.props.maxScroll}
        >
          <h2 className='modal gray-background'>Here are some of the things that are important to me...</h2>
        </FloatingInfo>

        <FloatingInfo
          offsetTop='120vh'
          offsetLeft='15vw'
          showWhenWithin='10vh'
          minScroll={this.props.minScroll}
          maxScroll={this.props.maxScroll}
        >
          <div className='modal gray-background'>
            <table className='core-value'>
              <tbody>
                <tr>
                  <td className='value'><h2>Diversity in Thought</h2></td>
                  <td className='description'><p>When people with different perspectives, backgrounds, and cultures come together to create technology, the finished product is more likely to be beneficial to humanity, and less likely to be biased.</p></td>
                </tr>
              </tbody>
            </table>
          </div>
        </FloatingInfo>

        <FloatingInfo
          offsetTop='160vh'
          offsetLeft='15vw'
          showWhenWithin='10vh'
          minScroll={this.props.minScroll}
          maxScroll={this.props.maxScroll}
        >
          <div className='modal gray-background'>
            <table className='core-value'>
              <tbody>
                <tr>
                  <td className='description'><p>In code, the simplest and most extensible solution is ultimately the most practical. Developer empathy and proper design is imperative to the well being of any software service.</p></td>
                  <td className='value'><h2>Elegance in Expression</h2></td>
                </tr>
              </tbody>
            </table>
          </div>
        </FloatingInfo>

        <FloatingInfo
          offsetTop='200vh'
          offsetLeft='15vw'
          showWhenWithin='10vh'
          minScroll={this.props.minScroll}
          maxScroll={this.props.maxScroll}
        >
          <div className='modal gray-background'>
            <table className='core-value'>
              <tbody>
                <tr>
                  <td className='value'><h2>Benefit to Mankind</h2></td>
                  <td className='description'><p>Technology is power. We have the means to revolutionize the way humans perceive the world. It is essential for us to use that force to elevate the human condition.</p></td>
                </tr>
              </tbody>
            </table>
          </div>
        </FloatingInfo>
      </FullPageImage>
    )
  }
}
