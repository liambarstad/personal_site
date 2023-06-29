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
        minScroll={this.props.minScroll}
        maxScroll={this.props.maxScroll}
        backgroundPosFactor={2.5}
        sectionName='experience'
      >
        <FloatingInfo
          offsetTop='10vh'
          offsetLeft='0vw'
          showWhenWithin='15vh'
          minScroll={this.props.minScroll}
          maxScroll={this.props.maxScroll}
        >
          <div className='header-container'>
            <h1 className='modal white-background'>Experience</h1>
          </div>
        </FloatingInfo>

        <table style={{ position: 'absolute', top: '40vh', left: '5vw', right: '5vw' }}>
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
              imgSrc='quantum_metric'
              company='Quantum Metric'
              position='Research Support Engineer'
              timeWorked='1 year 4 months'
            >
              <ul>
                <li>Spearheaded Quantum Metric’s client benchmarking platform, developing the data pipeline using Apache Airflow and Python, deploying with Docker and Kubernetes on Google Cloud Platform, and assisting in the creation of the productized interface in Flask and React.</li>
                <li>Successfully coded a recurrent Kernel Two-Sample analysis, in BigQuery SQL, for the analytics teams of enterprise-level clients.</li>
                <li>Provided the data for published news articles, including articles analyzing changes in customer behavior due to COVID-19.</li>
                <li>Created a subscription auditing system in Express.js to query multiple databases and email health checks to customer success representatives.</li>
              </ul>
            </ExperienceItem>
              
            <ExperienceItem
              index={1}
              start={this.startOffset}
              minScroll={this.props.minScroll}
              maxScroll={this.props.maxScroll}
              imgSrc='zober'
              company='Zober'
              position='VP of Software'
              timeWorked='9 months'
            >
              <ul>
                <li>Lead a team of up to 4 developers in an Agile environment to create and deploy the MVP, using Ruby on Rails, JavaScript, and React.</li>
                <li>Collaborated with the team to design the Postgres database, using composed SQL tables instead of inherited tables to account for a growing number of end-user classifications.</li>
                <li>Created the checkout funnel from scratch, using Stripe, Rails remote routes, and customer engagement best practices.</li>
                <li>Was the primary contributor to the front end, utilizing HTML5/CSS3, object-oriented JavaScript, React, and the Rails asset pipeline.</li>
              </ul>
            </ExperienceItem>

            <ExperienceItem
              index={2}
              start={this.startOffset}
              minScroll={this.props.minScroll}
              maxScroll={this.props.maxScroll}
              imgSrc='independent_contractor'
              company='Independent Contractor'
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

            <ExperienceItem
              index={3}
              start={this.startOffset}
              minScroll={this.props.minScroll}
              maxScroll={this.props.maxScroll}
              imgSrc='turing_school'
              company='Turing School of Software and Design'
              position='Back-End Development'
              timeWorked='7 months'
            >
              <ul>
                <li>Completed Turing's critically acclaimed, immersive, 7 month long program, focusing on back end development in Ruby on Rails and JavaScript.</li>
                <li>Founded the school's Python interest group, which would later become the Machine Learning club.</li>
                <li>Gave public presentations on AWS, Turing completeness, and the rule of least power for the school and potential employers.</li>
              </ul>
            </ExperienceItem>
          
            <ExperienceItem
              index={4}
              start={this.startOffset}
              minScroll={this.props.minScroll}
              maxScroll={this.props.maxScroll}
              imgSrc='front_range'
              company='Front Range College'
              position='Associate of Applied Mathematics'
              timeWorked='2 years'
            >
              <ul>
                <li>In order to progress at a faster rate, studied 3 semesters worth of calculus over the course of one semester, using only the textbook as a reference, and passing the final exam.</li>
                <li>Made the honor role for 3 out of 4 semesters, with an average GPA over 3.5</li>
                <li>Took programming courses in C++, my first introduction to the world of programming</li>
              </ul>
            </ExperienceItem>

          </tbody>
        </table>
      
      </FullPageImage>
    )
  }
}
