import React, { Component } from 'react'
import FloatingInfo from '../../shared/floating-info'

export default class ExperienceItem extends Component {
  render() {
    return (
      <FloatingInfo
        showWhenWithin='10vh'
        minScroll={this.props.minScroll}
        maxScroll={this.props.maxScroll}
        position='relative'
      >
        <tr className='modal white-background list-item'>
          <td className='list-item-image-container'><img 
            className='list-item-image'
            src={'/api/v1/images/' + this.props.imgSrc + '.' + (this.props.imgFormat || 'jpg')}
          /></td>
          <td className='list-item-name'>{this.props.company}</td>
          <td className='list-item-column'>
            <p style={{fontSize: 'inherit', fontFamily: 'inherit', borderStyle: 'solid', borderWidth: '0px 0px 1px 0px', paddingLeft: '30px'}}>
              {this.props.position} - {this.props.timeWorked}
            </p>
            <div className='experience-description'>
              { this.props.children }
            </div>
          </td>
        </tr>
      </FloatingInfo>
    )
  }
}
