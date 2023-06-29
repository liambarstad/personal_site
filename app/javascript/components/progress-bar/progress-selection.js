import React, { Component } from 'react'

export default class ProgressSelection extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { sectionEl } = this.props
    if (window.location.hash == '#' + sectionEl.dataset.name) {
      this.select()
    }
  }

  isSelected() {
    const { minScroll, sectionEl } = this.props,
      { offsetTop, offsetHeight } = sectionEl,
      actualScroll = minScroll + (window.innerHeight / 2)
    if (offsetTop <= actualScroll && actualScroll < (offsetTop + offsetHeight)) {
      return 'selected'
    } else {
      return ''
    }
  }

  select() {
    this.props.sectionEl.scrollIntoView({ block: 'start', behavior: 'smooth' })
  }

  render() {
    return (
      <div 
        className='progress-selection-container'
        onClick={this.select.bind(this)}
      >
        <span className={`progress-selection ${this.isSelected()}`} />
        <span
          className='progress-selection-name'
        >{this.props.sectionEl.dataset.name}</span>
      </div>
    )
  }
}
