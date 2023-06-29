class SkillsController < ApplicationController

  def index
    render json: [
      { 
        name: 'Python',
        star_rating: 4,
        years_of_experience: 2,
        description: 'Python is my language of choice for data analysis and machine learning. I have used Python frequently for back-end aggregation processes, as well as for personal projects that required mathematical intricacy.'
      },
      { 
        name: 'JavaScript',
        star_rating: 5,
        years_of_experience: 3,
        description: 'On the front end, I have used JavaScript, vanilla or otherwise, in ES5 and ES6/7. On the back end, I use JavaScript for school projects and microservices.'
      },
      { 
        name: 'Ruby',
        star_rating: 3,
        years_of_experience: 2,
        description: 'Ruby was the first language that I learned to its fullest, and may be the language that I have used most frequently. The emphasis that it places on developer empathy, extensibility, and design has followed me across languages.'
      },
      { 
        name: 'SQL',
        star_rating: 5,
        years_of_experience: 3,
        description: 'As a primarily back end oriented developer, I take pride in my ability to create optimal queries and tasks. I have used BigQuery (standard SQL), MariaDB (MySQL), and PostgreSQL regularly, and I am able to use the language for complex mathematical and business analytics.'
      },
      { 
        name: 'HTML/CSS', 
        star_rating: 3,
        years_of_experience: 3,
        description: 'I don\'t expect to meet much resistance when I claim that CSS is one of the most annoying languages to learn. However, having been called on to be the principal front end developer in multiple circumstances, I now find joy in design',
      },
      { 
        name: 'Object-oriented Programming',
        star_rating: 5,
        years_of_experience: 3,
        description: 'From the very beginning of my journey as a developer, I have been taught and put into practice the key tenants of object oriented programming. I am proud in the methods by which I break apart and encapsulate logic as I write code. At the same time, I am accutely aware that there is no one right way to architect software, and that there will always be a use case that the developers do not plan for. That is why I love sharing ideas, and having discussions about design mechanics.'
      },
      { 
        name: 'Test-driven development', 
        star_rating: 3,
        years_of_experience: 3,
        description: 'I am a firm proponent in the idea that software, whenever possible, should be test driven if it is expected to behave correctly under pressure. Test-driven development is a pattern that I was drilled on in school, as well as a mechanic that I take to heart. Of course, some things can\'t be tested, but wouldn\'t it be cooler if they could?'
      },
      { 
        name: 'React.js', 
        star_rating: 3,
        years_of_experience: 3,
        description: 'My go-to front end framework, I have used React in most of the SaaS applications and services that I have developed, excluding those that were written in vanilla JavaScript. I am also fluent in testing React front ends using jest, sinon, and enzyme'
      },
      { 
        name: 'React Native',
        star_rating: 2,
        years_of_experience: 1,
        description: 'The first flavor of React I learned, I enjoy React Native because I think it acts as a proof of the principle of least power. Although I have yet to deploy my React Native creations to the app store, I am fluent with the ecosystem (as fluent as one can be without knowing Java or Objective-C).'
      },
      { 
        name: 'D3.js',
        star_rating: 2,
        years_of_experience: 1,
        description: 'I use D3.js for graphing data that should be presented in the most professional way possible. Unlike Tabluar, Plotly/Dash, and Google Data Studio, it offers the greatest degree of flexibility. I am also accustomed to using D3.js alongside React, where the former handles the math and the latter handles the state updates.'
      },
      { 
        name: 'Rails',
        star_rating: 4,
        years_of_experience: 2,
        description: 'Ruby on Rails was the primary topic of my coding bootcamp, as well as the backbone of my work at Zober. I applaud the design mechanics that Rails uses to logically organize code, and thus most of my projects eventually end up looking like Rails applications. No shame.'
      },
      { 
        name: 'Google Cloud Platform',
        star_rating: 3,
        years_of_experience: 1,
        description: 'Lorem Ipsum, I\'m done with this shit.com'
      },
      { 
        name: 'Node.js',
        star_rating: 3,
        years_of_experience: 2,
        description: ''
      },
      { 
        name: 'Express.js',
        star_rating: 3,
        years_of_experience: 2,
        description: ''
      },
      { 
        name: 'Flask',
        star_rating: 2,
        years_of_experience: 2,
        description: ''
      },
      { 
        name: 'Pandas/Numpy',
        star_rating: 3,
        years_of_experience: 1,
        description: ''
      },
      { 
        name: 'Apache Airflow',
        star_rating: 4,
        years_of_experience: 1,
        description: ''
      },
      { 
        name: 'Kubernetes', 
        star_rating: 3,
        years_of_experience: 1,
        description: ''
      },
      { 
        name: 'Docker',
        star_rating: 2,
        years_of_experience: 1,
        description: ''
      },
      { 
        name: 'Tensorflow',
        star_rating: 3,
        years_of_experience: 1,
        description: ''
      },
      { 
        name: 'Selenium',
        star_rating: 2,
        years_of_experience: 2,
        description: ''
      },
      { 
        name: 'Apache Kafka',
        star_rating: 1,
        years_of_experience: 1,
        description: ''
      },
    ]

  end

end
