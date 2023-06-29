import React, { Component } from 'react'
import SkillModal from './skill-modal'

export default class SkillList extends Component {
  constructor(props) {
    super(props)
    this.height = this.props.height
    this.width = this.props.width
    this.skillListRef = React.createRef()
    this.state = {
      skills: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/skills.json')
      .then(response => response.json())
      .then((res) => {
        let skills = res.map(skill => this.formatSkill(skill))
        this.setState({ skills })
      })
  }

  formatSkill(skill) {
    return  (
      <SkillModal
        skillInfo={skill}
        onSelect={this.clearSkills.bind(this)}
        selected={false}
        skillListRef={this.skillListRef}
      />
    )
  }

  clearSkills() {
    let skillEls = this.skillListRef.current.querySelectorAll('.selected')
    skillEls.forEach(el => el.classList.remove('selected'))
  }

  render() {
    return (
      <div 
        ref={this.skillListRef}
        style={{ height: this.props.height, width: this.props.width }}
        className='skill-list'
      >
        { this.state.skills }
      </div>
    )
  }
}
