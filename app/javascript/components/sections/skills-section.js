import React, { Component } from 'react'
import FloatingInfo from '../shared/floating-info'
import FullPageImage from '../shared/full-page-image'
import ListedSkill from './skills/listed-skill'

export default class SkillsSection extends Component {
  state = {
    starImg: <img src='/api/v1/images/star.png' style={{ height: '1em', width: '1em' }} />,
    skills: []
  }

  componentDidMount() {
    fetch('/api/v1/skills.json')
      .then(response => response.json())
      .then((res) => {
        let skills = res.map(skill => this.formatSkill(skill))
        skills = skills
          .sort((a, b) => { return b.props.skillInfo.years_of_experience - a.props.skillInfo.years_of_experience })
          .sort((a, b) => { return b.props.skillInfo.star_rating - a.props.skillInfo.star_rating })
        this.setState({ skills })
      })
  }

  formatSkill(skill) {
    return (
      <ListedSkill
        skillInfo={skill} 
        selectSkill={this.clearSkills.bind(this)}
        selected={false}
        starImg={this.state.starImg}
      />
    )
  }

  clearSkills() {

  }

  render() {
    return (
      <FullPageImage
        imageName='neurons'
        minScroll={this.props.minScroll}
        maxScroll={this.props.maxScroll}
        backgroundPosFactor={2.5}
        height='170vh'
        sectionName='skills'
      >
        <FloatingInfo
          offsetTop='10vh'
          offsetLeft='0vw'
          showWhenWithin='15vh'
          minScroll={this.props.minScroll}
          maxScroll={this.props.maxScroll}
        >
          <div className='header-container'>
            <h1 className='modal gray-background'>Skills</h1>
          </div>
        </FloatingInfo>

        <FloatingInfo
          offsetTop='40vh'
          offsetLeft='10vw'
          showWhenWithin='5vh'
          minScroll={this.props.minScroll}
          maxScroll={this.props.maxScroll}
        >

          <div style={{ textAlign: 'center', paddingBottom: '1.43em' }}>
            <img src='/api/v1/images/profile_picture.jpg' id='profile-image' />
            <div id='skills-summary' className='modal gray-background'>
              <strong>Summary:</strong> I am a back-end oriented engineer with 2-3 years of professional experience, and a passion for abstracting away the chaos of data. I believe that we live in one of the most scientifically interesting periods in history, where the human condition is documented every day through user data and interactions. I want to work with other passionate and driven individuals to push the envelope of what is possible.
            </div>
          </div>

          <div className='skill-list modal gray-background'>
            {this.state.skills}
          </div>
        </FloatingInfo>
      </FullPageImage>
    )
  }
}
