import React, { Component } from 'react'

export default class SkillModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: this.props.selected
    }
  }

  modalStyles() {
    let rect = this.props.skillListRef.current.getBoundingClientRect()
    let em = parseFloat(getComputedStyle(this.props.skillListRef.current).fontSize)
    return {
      position: 'absolute',
      overflow: 'hidden',
      left: (rect.right - rect.left) + (2*em),
      top: 0 + (0.5*em),
      height: rect.bottom - rect.top,
      width: (!!this.state.selected ? rect.width : 0),
      opacity: (!!this.state.selected ? 100 : 0),
    }
  }

  modalClassNames() {
    return this.state.selected ? 'selected' : '' ;
  }

  select() {
    this.props.onSelect()
    const selected = !this.state.selected
    this.setState({ selected }) 
  }

  render() {
    let skill = this.props.skillInfo
    return (
      <div className='skill' onClick={this.select.bind(this)}>
        <h2 className='skill-name'>{skill.name}</h2> 
        <div style={this.modalStyles()} onClick={null} className={`modal`}>
          <div className={`skills-modal ${this.modalClassNames()}`}>
            <div className={`inner-modal maroon-background ${this.modalClassNames()}`}>
              <div className='skill-header'>
                <h1>{skill.name}</h1>
                <h2>Years of experience: {skill.years_of_experience}</h2>
              </div>
              <p className='skill-description'>{skill.description}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

}
