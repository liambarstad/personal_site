import React, { Component } from 'react'
import FullPageImage from '../shared/full-page-image'
import FloatingInfo from '../shared/floating-info'
import ExperienceItem from './experience/experience-item'

export default class ExperienceSection extends Component {
  constructor(props) {
    super(props)
    this.startOffset = '40vh'
  }

  render() {
    return (
      <FullPageImage
        imageName='neurons3'
        height='2200px'
        style={{paddingTop: '30px'}}
        minScroll={this.props.minScroll}
        maxScroll={this.props.maxScroll}
        backgroundPosFactor={2.5}
        sectionName='experience'
      >
        <br></br>
        <FloatingInfo
          position='relative'
          showWhenWithin='15vh'
          minScroll={this.props.minScroll}
          maxScroll={this.props.maxScroll}
        >
          <div className='header-container'>
            <h1 className='modal white-background'>Experience</h1>
          </div>
        </FloatingInfo>

        <table style={{ position: 'relative', left: '10vw', right: '10vw', width: '80vw'}}>
          <tbody>
            <tr>
              <th />
              <th />
              <th />
            </tr>

            <ExperienceItem
              index={0}
              start={this.startOffset}
              minScroll={this.props.minScroll}
              maxScroll={this.props.maxScroll}
              imgSrc='att'
              imgFormat='png'
              company='AT&T'
              position='Data Engineer'
              timeWorked='2 years'
            >
              <ul>
                <li>Developed real-time Anomaly Detection for systems monitoring, trained using MLFlow and deployed with Kubeflow</li>
                <li>Created tooling for operations monitoring and ETL, using Flask/React/Airflow/SQL tech stack</li>
                <li>Trained LSTMs in Pytorch and graph-based algorithms in Neo4j for customer journey analysis</li>
                <li>Performed data analysis on behavioral metrics in SQL for root cause analysis and user categorization across a variety of datasets</li>
              </ul>
            </ExperienceItem>

            <ExperienceItem
              index={1}
              start={this.startOffset}
              minScroll={this.props.minScroll}
              maxScroll={this.props.maxScroll}
              imgSrc='align-tech'
              imgFormat='png'
              company='Align Tech and Finance'
              position='Machine Learning Consultant'
              timeWorked='2 months'
            >
              <ul>
                <li>Developed profitable Deep Reinforcement Learning (DQN/DDPG) solutions in Tensorflow for trading and arbitrage</li>
                <li>Performed quantitative analysis on real-time trade books</li>
                <li>Deployed pipelines to AWS SageMaker and created the infrastructure for the model to make trades</li>
              </ul>
            </ExperienceItem>

            <ExperienceItem
              index={2}
              start={this.startOffset}
              minScroll={this.props.minScroll}
              maxScroll={this.props.maxScroll}
              imgSrc='quantum_metric'
              company='Quantum Metric'
              position='Research Support Engineer'
              timeWorked='1 year 4 months'
            >
              <ul>
                <li>Generated custom analyses, including a kernel two-sample test in Google Bigquery SQL, for enterprise clients</li>
                <li>Wrote back-end pipelines in Airflow, Kubernetes, and Google Cloud Platform (GCP) for custom reports</li>
                <li>Performed feature extraction in ETL processes supporting the research team, for use in Data Science and Machine Learning on a large-scale behavioral dataset</li>
              </ul>
            </ExperienceItem>
              
            <ExperienceItem
              index={3}
              start={this.startOffset}
              minScroll={this.props.minScroll}
              maxScroll={this.props.maxScroll}
              imgSrc='zober'
              company='Zober'
              position='Senior Web Developer'
              timeWorked='9 months'
            >
              <ul>
                <li>Lead and collaborated with a team of 4 developers, using agile and SCRUM methodologies, communicating with leadership and actualizing business requirements</li>
                <li>Created the first iteration of a production ecommerce product in Ruby on Rails and React</li>
                <li>Developed authenticated user funnels and subscription pipelines, building the framework for future revenue of the SaaS service</li>
                <li>Automated lead generation and outreach to B2B clients</li>
              </ul>
            </ExperienceItem>

            <ExperienceItem
              index={4}
              start={this.startOffset}
              minScroll={this.props.minScroll}
              maxScroll={this.props.maxScroll}
              imgSrc='independent_contractor'
              company='Freelance'
              position='Various Positions'
              timeWorked='5 months'
            >
              <ul>
                <li>Built an application in React Native called "Ping Timer", in service of the quantified self movement, timing various tasks and allowing customers to customize their workspace.</li> 
                <li>Collaborated with Borsetta in its infancy, a company utilizing a blockhain for the tracking and distribution of luxury goods.</li>
                <li>Worked with startups as a part-time contrubutor, learning the basics of production-level development and putting agile into practice.</li>
                <li>Took a short-term government IT contract for hardware upkeep and system networking.</li>
              </ul>
            </ExperienceItem>

          </tbody>
        </table>
      
      </FullPageImage>
    )
  }
}
