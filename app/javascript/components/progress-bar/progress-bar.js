import React, { Component } from 'react'
import ProgressSelection from './progress-selection'

export default class ProgressBar extends Component {
  constructor(props) {
    super(props)
  }

  progressSections(children) {
    return Array.from(children).map((sectionEl) => {
      return (
        <ProgressSelection 
          sectionEl={sectionEl} 
          minScroll={this.props.minScroll}
        />
      )
    })
  }

  render() {
    let { sectionsRef } = this.props
    if (!!sectionsRef.current && !!sectionsRef.current.children) {
      return (
        <div className='progress-selection-bar'>
          <div>
            { this.progressSections(sectionsRef.current.children) }
          </div>
        </div>
      )
    } else {
      return <div></div>
    }
  }
}
