import React, { Component } from 'react'

export default class FullPageImage extends Component {
  constructor(props) {
    super(props)
    this.imageName = props.imageName
    this.containerRef = React.createRef()
    this.fullHeight = this.props.maxScroll - this.props.minScroll
    this.state = {
      backgroundWidth: `${100 + (100 / this.props.factor)}vw`,
      backgroundHeight: `${100 + (100 / this.props.factor)}vh`,
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { maxScroll, minScroll } = nextProps
    return !(!this.containerRef.current && !!maxScroll && !!minScroll && !this.shouldLoad(maxScroll, minScroll))
  }

  shouldLoad(maxScroll, minScroll) {
    const topOfElement = this.containerRef.current.offsetTop
    const elementHeight = this.containerRef.current.getBoundingClientRect().height
    return (
      maxScroll > topOfElement - this.fullHeight &&
      minScroll < topOfElement + elementHeight + (this.fullHeight * 2)
    ) 
  }

  setBackground() {
    const { maxScroll, minScroll } = this.props
    if (!!this.containerRef.current && this.shouldLoad(maxScroll, minScroll)) {
      this.background = `/api/v1/images/${this.imageName}`
    }
  }

  calculateBackgroundPos(factor=3) {
    if (this.containerRef.current) {
      let rect = this.containerRef.current.getBoundingClientRect()
      return (rect.y * this.fullHeight) / (factor * rect.height)
    }
  }

  backgroundSpecs() {
    const layerImages = this.props.layerImages || 1
    let specString = ''
    if (!!this.background) {
      for (let i = 0; i < layerImages; i++) {
        const posFactor = (this.props.backgroundPosFactor * (i + 1)) / (layerImages)
        specString += `url(${this.background}-${i + 1}.png)` + ' '
        specString += 'center ' + (this.calculateBackgroundPos(posFactor) || 0) + 'px / ' 
        specString += `auto ${100 + (100 / this.props.backgroundPosFactor)}vh `
        specString += 'no-repeat fixed'
        if (i < layerImages - 1) {
          specString += ', '
        }
      }
    } else {
      specString = 'none'
    }
    return specString
  }

  render() {
    this.setBackground()
    return (
      <div style={{width: '100%', backgroundColor: 'black'}} data-name={this.props.sectionName}>
        <div 
          className='full-page'
          style={{
            height: 'auto',
            paddingBottom: '15%',
            background: this.backgroundSpecs(),
            ...this.props.style
          }}
          ref={this.containerRef}
        >
          {this.props.children}
        </div>
      </div>
    )
  }
}
