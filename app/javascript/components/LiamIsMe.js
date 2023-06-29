import React, { Component } from 'react'
import MissionSection from './sections/mission-section'
import SkillsSection from './sections/skills-section'
import ExperienceSection from './sections/experience-section'
import ProjectsSection from './sections/projects-section'
import BlogSection from './sections/blog-section'
import ContactSection from './sections/contact-section'
import ProgressBar from './progress-bar/progress-bar'

export default class LiamIsMe extends Component {
  constructor(props) {
    super(props)
    this.sectionsRef = React.createRef()
    this.state = {
      minScroll: document.documentElement.scrollTop,
      maxScroll: window.innerHeight,
    }
  }

  componentDidMount() {
    this.incrementLazyLoad()
    window.addEventListener('scroll', this.incrementLazyLoad.bind(this))
  }

  incrementLazyLoad() {
    const minScroll = document.documentElement.scrollTop
    const maxScroll = minScroll + window.innerHeight
    this.setState({ minScroll, maxScroll })
  }

  render() {
    return (
      <div>
        <ProgressBar 
          sectionsRef={this.sectionsRef} 
          minScroll={this.state.minScroll}
        />
        <div ref={this.sectionsRef}>
          <MissionSection
            minScroll={this.state.minScroll}
            maxScroll={this.state.maxScroll}
          />
          <SkillsSection
            version={2}
            minScroll={this.state.minScroll}
            maxScroll={this.state.maxScroll}
          />
          <ExperienceSection
            minScroll={this.state.minScroll}
            maxScroll={this.state.maxScroll}
          />
          <ProjectsSection
            minScroll={this.state.minScroll}
            maxScroll={this.state.maxScroll}
          />
          <BlogSection
            minScroll={this.state.minScroll}
            maxScroll={this.state.maxScroll}
          />
          <ContactSection 
            minScroll={this.state.minScroll}
            maxScroll={this.state.maxScroll}
          />
        </div>
      </div>
    )
  }

}
