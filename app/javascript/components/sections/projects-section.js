import React, { Component } from 'react'
import FullPageImage from '../shared/full-page-image'
import FloatingInfo from '../shared/floating-info'
import ProjectItem from './projects/project-item'
import EducationItem from './projects/education-item'

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
        style={{paddingTop: '30px'}}
        sectionName='projects'
      >
        <FloatingInfo
          position='relative'
          showWhenWithin='15vh'
          minScroll={this.props.minScroll}
          maxScroll={this.props.maxScroll}
        >
          <div className='header-container'>
            <h1 className='modal gray-background'>Projects</h1>
          </div>
        </FloatingInfo>

        <table style={{ position: 'relative', left: '10vw', right: '10vw', width: '80vw' }}>
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
              date='March 2024'
              name='NLP Trading'
              github='https://github.com/tonydaggett/NLP_trading_strategy'
              imgSrc='stocks'
            >
              <ul>
                <li>Collaboration with <a class='softgreen' href='https://www.linkedin.com/in/tonydaggett/' target='_blank'>Tony Dagget</a></li>
                <li>Predicts NLP stock signals in sentiment model for use in trading model</li>
                <li>Airflow pipeline using TaskFlow API</li>
                <li>Postgres database for technical indicators, MongoDB for storage of news files, Vector database for article vectors</li>
                <li>Running on local Kubernetes cluster using Airflow KubernetesExecutor</li>
              </ul>
            </ProjectItem>

            <ProjectItem
              index={0}
              start={this.startOffset}
              minScroll={this.props.minScroll}
              maxScroll={this.props.maxScroll}
              date='January 2024'
              name='Content-Aware MOS Prediction'
              github='https://github.com/liambarstad/content_aware_mos_prediction'
              imgSrc='content_aware_mos'
            >
              <ul>
                <li>Predicts Mean Opinion Score (MOS) of synthesized speech snippets, using NLP features</li>
                <li>Suite of modified MOSNet, LDNet and SSL-MOS models</li>
                <li>Models built in Pytorch</li>
              </ul>
            </ProjectItem>

            <ProjectItem
              index={0}
              start={this.startOffset}
              minScroll={this.props.minScroll}
              maxScroll={this.props.maxScroll}
              date='February-July 2023'
              name='Pee Wee Text-to-Speech'
              url='peewee-tts.liambarstad.com'
              github='https://github.com/liambarstad/peewee-tts'
              imgSrc='peewee'
            >
              <ul>
                <li>Generates speech with the goal to mimic the context-dependent nature of Pee Wee Herman's voice</li>
                <li>Combination of 3 deep neural networks trained separately</li>
                <li>LSTM encoder generates speaker embeddings specific to the character</li>
                <li>Tacotron 2 text synthesizer, attention-based DNN that takes speaker embeddings and generates spectrograms</li>
                <li>WaveNet DNN Vocoder turns spectrograms into final waveform</li>
              </ul>
            </ProjectItem>

            <ProjectItem
              index={1}
              start={this.startOffset}
              minScroll={this.props.minScroll}
              maxScroll={this.props.maxScroll}
              date='July 2020'
              name='Personal Site'
              url='resume.liambarstad.com'
              github='https://github.com/liambarstad/personal_site'
              imgSrc='particles'
            >
              <ul>
                <li>Built in Rails 6.1 and React</li>
                <li>Deployed on GCP and Docker</li>
                <li>Very rare 3D effect with 7 layers moving at different speeds (see background graphic on top page)</li>
              </ul>
            </ProjectItem>

            <ProjectItem
              index={2}
              start={this.startOffset}
              minScroll={this.props.minScroll}
              maxScroll={this.props.maxScroll}
              date='January 2019'
              name='Ping Timer'
              github='https://github.com/liambarstad/PingTimer'
              imgSrc='ping-timer'
            >
              <ul>
                <li>Built in React Native with a Realm NoSQL database, and deployed with Expo</li>
                <li>Allows users to time multiple tasks simultaneously</li>
                <li>Features the ability to organize timers into projects and categories</li>
                <li>Allows color and theme customization</li>
              </ul>
            </ProjectItem>
          </tbody>
        </table>

        <FloatingInfo
          position='relative'
          showWhenWithin='15vh'
          minScroll={this.props.minScroll}
          maxScroll={this.props.maxScroll}
        >
          <div className='header-container'>
            <h1 className='modal gray-background'>Education</h1>
          </div>
        </FloatingInfo>

        <table style={{ position: 'relative', left: '10vw', right: '10vw', width: '80vw' }}>
          <tbody>
            <tr>
              <th />
              <th />
              <th />
            </tr>

            <EducationItem
              school='University of California San Diego'
              degree='Machine Learning Bootcamp'
              year='2023'
              img='ucsd'
              minScroll={this.props.minScroll}
              maxScroll={this.props.maxScroll}
            >
              <ul>
                <li>Immersive online bootcamp presenting the latest cutting-edge Machine Learning techniques and platforms</li>
                <li>Although I had already been self-taught for a number of years, taught me new concepts such as Spark and Recommendation Engines</li>
                <li>Was crucial in order to transfer what I had already learned to a production, industry-standard setting</li>
              </ul>
            </EducationItem>

            <EducationItem
              school='Turing School of Software and Design'
              degree='Back End Web Development Certificate'
              year='2017'
              img='turing'
              imgSrc='png'
              minScroll={this.props.minScroll}
              maxScroll={this.props.maxScroll}
            >
              <ul>
                <li>Rigorous, over-full-time bootcamp focusing on back end web development in Ruby on Rails</li>
                <li>Taught me extensible programming paradigms that helps me create reliable software in any language</li>
                <li>Focused on concepts such as Object Oriented Programming and Test Driven Development</li>
                <li>While there, I founded the Python interest group, which later became the Machine Learning club</li>
              </ul>
            </EducationItem>

          </tbody>
        </table>

      </FullPageImage>
    )
  }
}
