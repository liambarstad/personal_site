import React, { Component } from 'react'

export default class FloatingInfo extends Component {
  constructor(props) {
    super(props)
    this.containerRef = React.createRef()
    this.state = {
      fadedin: false
    }
  }

  style() {
    if (this.props.position == 'relative') {
      return { position: 'relative' }
    } else {
      const width = !!this.props.offsetRight ?
        (100 - (parseInt(this.props.offsetLeft) + parseInt(this.props.offsetRight))) + '%' :
        (100 - (parseInt(this.props.offsetLeft) * 2)) + '%' ;
      return {
        top: this.props.offsetTop,
        left: this.props.offsetLeft,
        width,
      }
    }
  }

  fadeinClass() {
    const curr = this.containerRef.current
    const { maxScroll, minScroll, showWhenWithin } = this.props
    if (!this.state.fadedin && !!curr && !!showWhenWithin) { 
      const showMargin = (window.innerHeight * parseInt(showWhenWithin.split('v')[0])) / 100
      if (curr.parentElement.getBoundingClientRect().y < (showMargin + (window.innerHeight / 2)) - curr.offsetTop) {
        this.fadeClass = 'fadein'
        this.setState({ fadedin: true })
      }
    }
    return this.fadeClass || ''
  }

  render() {
    return (
      <div 
        className={'floating-modal hidden ' + this.fadeinClass()} 
        style={ this.style() }
        ref={ this.containerRef }
      >
        { this.props.children }
      </div>
    )
  }
}
