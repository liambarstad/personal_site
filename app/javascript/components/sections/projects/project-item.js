import React, { Component } from 'react'
import FloatingInfo from '../../shared/floating-info'

export default class ProjectItem extends Component {

  render() {
    return (
      <FloatingInfo
        showWhenWithin='10vh'
        minScroll={this.props.minScroll}
        maxScroll={this.props.maxScroll}
        position='relative'
      >
        <tr className='modal gray-background list-item'>
          <td className='list-item-image-lg-container'>
            <a href={'/projects/' + this.props.url} target='_blank'>
              <img
                className='list-item-image-lg'
                src={'/api/v1/images/' + this.props.imgSrc + '.jpg'}
              />
            </a>
          </td>
          <td className='list-item-name'>{this.props.name}</td>
          <td className='list-item-column'>
            Date Created: {this.props.date}
            <div className='experience-description'>
              What it Does:
              {this.props.children}
            </div>
          </td>
        </tr>
      </FloatingInfo>
    )
  }
}
