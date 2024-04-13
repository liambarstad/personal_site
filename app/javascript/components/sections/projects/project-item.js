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
            <img
              className='list-item-image-lg'
              src={'/api/v1/images/' + this.props.imgSrc + '.jpg'}
            />
          </td>
          <td className='list-item-column project-column'>
            <div className='experience-description'>
              <p className='project-header'>
                {this.props.name} - {this.props.date}
                {this.props.url ? <a className='project-link' href={'https://'+this.props.url}>{this.props.url}</a> : ''}
                {this.props.github ? <a className='project-link' href={this.props.github} target='_blank'>
                  <img src='/api/v1/images/github.png' className='project-github-link'/>
                </a> : ''}
              </p>
              {this.props.children}
            </div>
          </td>
        </tr>
      </FloatingInfo>
    )
  }
}
