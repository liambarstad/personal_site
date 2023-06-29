import React, { Component } from 'react'
import FullPageImage from '../shared/full-page-image'
import FloatingInfo from '../shared/floating-info'
import ProjectItem from './projects/project-item'

export default class ProjectsSection extends Component {
  constructor(props) {
    super(props)
    this.startOffset = '40vh'
  }

  render() {
    return (
      <FullPageImage
        imageName='tangled'
        minScroll={this.props.minScroll}
        maxScroll={this.props.maxScroll}
        backgroundPosFactor={2.5}
        sectionName='projects'
        diggity='dog'
      >
        <FloatingInfo
          offsetTop='10vh'
          offsetLeft='0vw'
          showWhenWithin='15vh'
          minScroll={this.props.minScroll}
          maxScroll={this.props.maxScroll}
        >
          <div className='header-container'>
            <h1 className='modal gray-background'>Projects</h1>
          </div>
        </FloatingInfo>

        <table style={{ position: 'absolute', top: '40vh', left: '5vw', right: '5vw', width: '90vw' }}>
          <tbody>
            <tr>
              <th />
              <th />
              <th />
            </tr>

            <ProjectItem
              index={0}
              start={this.startOffset}
              minScroll={this.props.minScroll}
              maxScroll={this.props.maxScroll}
              date='June 2020'
              name='Prometheus'
              url='prometheus'
              imgSrc='prometheus'
            >
              <ul>
                <li>DDPG agent trained on the 1500 most volatile stocks, using intraday stock data from the last 15 years</li>
                <li>Agent coded in Tensorflow and Python</li>
                <li>Deployed using Kubernetes and Docker, with a Kafka queue to handle incoming messages</li>
                <li>Front end interface in Rails and React</li>
              </ul>
            </ProjectItem>

            <ProjectItem
              index={1}
              start={this.startOffset}
              minScroll={this.props.minScroll}
              maxScroll={this.props.maxScroll}
              date='July 2020'
              name='Personal Site'
              url='personal_site'
              imgSrc='particles'
            >
              <ul>
                <li>Built in Rails 6.0 and React (golly, that integration got so much easier)</li>
                <li>Utilizes a Rails Engine architecture for task delegation</li>
                <li>Deployed using Google App Engine</li>
                <li>Uses AB/MVT testing within a Rails Engine microservice, <a href='#contact'>more info below</a></li>
              </ul>
            </ProjectItem>

            <ProjectItem
              index={2}
              start={this.startOffset}
              minScroll={this.props.minScroll}
              maxScroll={this.props.maxScroll}
              date='January 2020'
              name='Poker Gameroom'
              url='poker_player'
              imgSrc='poker-chips'
            >
              <ul> 
                <li>Collaborated piece, existing back end built in C# and .NET</li>
                <li>Front end built in React, using websockets for video interface</li>
                <li>Microservices architecture for action delegation and performance</li>
                <li>Deployed using Kubernetes, Docker, and GCP</li>
              </ul>
            </ProjectItem>
            
            <ProjectItem
              index={3}
              start={this.startOffset}
              minScroll={this.props.minScroll}
              maxScroll={this.props.maxScroll}
              date='June 2019'
              name='Zober (Beta)'
              url='zober_beta'
              imgSrc='zober-frontpage'
            >
              <ul>
                <li>Provides an immersive search mechanism for addicts seeking treatment providers</li>
                <li>Interfaces with google maps to display listings</li>
                <li>Guides providers through a multi-step funnel for listing their facility</li>
                <li>Allows users to customize their profiles with images and descriptions</li>
              </ul>
            </ProjectItem>

            <ProjectItem
              index={4}
              start={this.startOffset}
              minScroll={this.props.minScroll}
              maxScroll={this.props.maxScroll}
              date='January 2019'
              name='Ping Timer'
              url='ping_timer'
              imgSrc='ping-timer'
            >
              <ul>
                <li>Allows users to time multiple tasks simultaneously</li>
                <li>Built in React Native with a Realm NoSQL database, and deployed with Expo</li>
                <li>Features the ability to organize timers into projects and categories</li>
                <li>Allows color and theme customization</li>
              </ul>
            </ProjectItem>
          </tbody>
        </table>
      </FullPageImage>
    )
  }
}
