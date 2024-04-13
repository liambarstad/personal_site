import React, { Component } from 'react'
import FloatingInfo from '../shared/floating-info'
import FullPageImage from '../shared/full-page-image'
import ListedSkill from './skills/listed-skill'

export default class SkillsSection extends Component {
  state = {
    skills: {}
  }

  componentDidMount() {
    fetch('/api/v1/skills.json')
      .then(response => response.json())
      .then((res) => {
        let skills = {}
        Object.keys(res).forEach(key => skills[key] = (() => {
          let chunks = []

          for (let i=0; i < res[key].length; i+=4) {
            chunks.push(res[key].slice(i, i + 4))
          }

          return chunks.map((chunk, index) =>
            <tr key={index}>
              {chunk.map((skill) => 
                this.formatSkill(skill)
              )}
            </tr>
          )
        })())
        this.setState({ skills })
      })
  }

  formatSkill(skill) {
    return (
      <ListedSkill
        skillInfo={skill} 
        starImg={this.state.starImg}
      />
    )
  }

  render() {
    return (
      <FullPageImage 
        imageName='particles'
        layerImages={6}
        height='2200px'
        minScroll={this.props.minScroll}
        maxScroll={this.props.maxScroll}
        backgroundPosFactor={7}
        sectionName='skills'
      >
        <FloatingInfo
          position='relative'
          showWhenWithin='15vh'
          minScroll={this.props.minScroll}
          maxScroll={this.props.maxScroll}
        >
          <div className='header-container'>
            <h1 className='modal gray-background'>Liam Barstad</h1>
          </div>
        </FloatingInfo>

        <FloatingInfo
          position='relative'
          showWhenWithin='5vh'
          minScroll={this.props.minScroll}
          maxScroll={this.props.maxScroll}
        >

          <div style={{ textAlign: 'center', paddingBottom: '1.43em' }}>
            <img src='/api/v1/images/profile_picture.jpg' id='profile-image' />
            <div id='skills-summary' className='modal gray-background'>
              Hi, my name is Liam and I'm a multi-talented software engineer with 5 years of experience in big data engineering, machine learning, and web development. I have a long and proven track record of helping companies make their data work for them. Let's discuss your feature wishlist, and ask your data the right questions. You may be surprised how much a small bit of analysis can change your perspective. I build software that produces insights, learns from them, automates them, and provides novel offerings to the end user. Help me push the envelope of what is possible, and let's build the future together!
              <br></br>
              <strong className='skills-annotation'>Click the skills below for more info</strong> 
            </div>
          </div>
        </FloatingInfo>

        <div style={{width: '80vw', marginLeft: '10vw', marginRight: '10vw'}}>
          <FloatingInfo
            position='relative'
            showWhenWithin='100vh'
            minScroll={this.props.minScroll}
            maxScroll={this.props.maxScroll}
          >
            <div className='skill-list modal gray-background'>
              <h2 style={{textAlign: 'center', marginBottom: '1em'}}>Languages</h2>
              <table className='skill-table'>
                {this.state.skills.languages}
              </table>
            </div>
          </FloatingInfo>

          <FloatingInfo
            position='relative'
            showWhenWithin='85vh'
            minScroll={this.props.minScroll}
            maxScroll={this.props.maxScroll}
          >
            <div className='skill-list modal gray-background'>
              <h2 style={{textAlign: 'center', marginBottom: '1em'}}>Libraries</h2>
              <table className='skill-table'>
                {this.state.skills.libraries}
              </table>
            </div>
          </FloatingInfo>

          <FloatingInfo
            position='relative'
            showWhenWithin='85vh'
            minScroll={this.props.minScroll}
            maxScroll={this.props.maxScroll}
          >
            <div className='skill-list modal gray-background'>
              <h2 style={{textAlign: 'center', marginBottom: '1em'}}>Machine Learning</h2>
              <table className='skill-table'>
                {this.state.skills.machine_learning}
              </table>
            </div>
          </FloatingInfo>

          <FloatingInfo
            position='relative'
            showWhenWithin='85vh'
            minScroll={this.props.minScroll}
            maxScroll={this.props.maxScroll}
          >
            <div className='skill-list modal gray-background'>
              <h2 style={{textAlign: 'center', marginBottom: '1em'}}>DevOps</h2>
              <table className='skill-table'>
                {this.state.skills.devops}
              </table>
            </div>
          </FloatingInfo>

          <FloatingInfo
            position='relative'
            showWhenWithin='85vh'
            minScroll={this.props.minScroll}
            maxScroll={this.props.maxScroll}
          >
            <div className='skill-list modal gray-background'>
              <h2 style={{textAlign: 'center', marginBottom: '1em'}}>Soft Skills</h2>
              <table className='skill-table'>
                {this.state.skills.soft_skills}
              </table>
            </div>
          </FloatingInfo>
        </div>
        
      </FullPageImage>
    )
  }
}
