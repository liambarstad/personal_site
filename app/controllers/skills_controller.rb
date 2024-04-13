class SkillsController < ApplicationController

  def index
    render json: {
      languages: [
        { 
          name: 'Python',
          description: 'Python is my language of choice in most cases. It\'s simple, powerful, and arguably the most effective for machine learning and data science tasks. I use Turing\'s rule of least power, using the simplest language first in most circumstances, to improve iteration speed, reduce technical debt, and avoid uneccessary complexity. I have used Python for most projects throughout my career.' 
        },
        {
          name: 'Golang',
          description: 'I am using Go extensively in my current research, developing a new type of relational database that allows for incredibly fast querying (patent pending). I am a big fan of Go\'s explicit error handling, functional structure, and native parallelism. Depending on the infrastructure and goals of a particular pipeline, I would implement Go for speed, paralellism, and reliability in ETL tasks.'
        },
        {
          name: 'SQL',
          description: 'If there\'s one thing in the world I feel comfortable bragging about, it\'s my proficiency in SQL. I have used SQL to perform many complicated mathematical tasks. I have written a kernel two sample test, mapping user attributes in hilbert space. I have performed fourier transformations, calculated poisson distributions, analyzed time series data, and applied machine learning algorithms in raw SQL. I feel that it is often optimal to perform a reasonable number of data transformations in SQL before the data is further manipulated and loaded somewhere else.'
        },
        { 
          name: 'JavaScript',
          description: 'It has been said that anything that can be written in JavaScript will, eventually, be written in JavaScript. While I don\'t agree with this in all circumstances, I lean on JavaScript for any front end or UI-oriented tasks. I have used React.js extensively, and have used React Native and Node.js for various applications. Whether it\'s a standalone app or internal tool, I believe a good user interface is crucial for the user to achieve their goals.'
        },
        {
          name: 'Ruby',
          description: 'Ruby is arguably the first language that I learned all the way through, focusing on back-end web development using Rails. Although I have largely moved on to other languages, my experience with Ruby and Rails informs many of the structual paradigms that I use to write code in any language. Concepts that I have learned from this language include proper Object-Oriented design (when appropriate), Test-Driven Development, developer empathy, encapsulation, polymorphism, duck-typing, and the importance of DRY code.'
        },
        {
          name: 'C++',
          description: 'During my early education, I took a number of C++ classes that served as an introduction to programming. Most of the languages I work with nowadays do not have pointers, manual memory allocations, fixed-length arrays, or custom garbage collection, but it is this peripheral knowledge that allows me to step into the world of statically types languages when necessary.'
        },
        {
          name: 'Cypher',
          description: 'Cypher is Neo4j\'s query language, and the language used in numerous graph databases. I use graph databases often, for relational data that needs to be accessed quickly and consistently. A good graph can reduce query times by orders of magnitude, and there are special graph traversal algorithms that can paint pictures that RDDs struggle with.'
        }
      ],
      libraries: [
        {
          name: 'Pytorch',
          description: 'Pytorch is my deep learning framework of choice in most cases due to it\'s ease in debugging, speed, and pythonic structure. I have used it for time series analysis and LSTMs, in my work with deep text-to-speech algorithms (such as Tacotron 2 and MOSNet), and extensively in my education.'
        },
        { name: 'Tensorflow',
          description: 'I have used Tensorflow to write and modify DQNs and DDPGs (reinforcement learning algorithms) in my work as a machine learning consultant, for use in predicting stock trends and conducting arbitrage. The library was also taught at my Machine Learning bootcamp, and I use it for its variety of datasets, algorithms, and helpers.'
        },
        {
          name: 'Airflow',
          description: 'I have used Apache Airflow for numerous ETL tasks, in my work at Quantum Metric and AT&T. I used it at AT&T to create an alerting system that is 1000x faster than any other vendor tools. I used it at Quantum Metric to provide custom aggregated reports to clients, after querying the data warehouse, deployed on Kubernetes'
        },
        {
          name: 'Spark',
          description: 'I have used Spark to deploy data pipelines across many smaller on-premises worker nodes, and in situations where individual workers may not always be reliable. I have also integrated Spark clusters with Databricks. Spark was taught at my Machine Learning bootcamp, and I have used it for various ETL tasks.'
        },
        {
          name: 'Neo4j',
          description: 'I love Neo4j and graph databases, and find that representing data on a graph can vastly increase query performance and allows for more complicated relations in the data. At AT&T, I used a graph to speed up the monitoring and alerting pipeline by a factor of 1000x, while maintaining the dats\'s relational structure.'
        },
        {
          name: 'Flask',
          description: 'Flask is ideally what I use for microservices, or any sort of back-end interface. I appreciate its customizability and its lightweight nature. What Flask lacks in middleware out of the box, I have the expertise to include manually. I am very familiar with Flask structure, and how to add the packages necessary to meet the needs of the application.'
        },
        {
          name: 'React.js',
          description: 'React is my go-to front end framework. In fact, I used React to create this site. If you look closely, you\'ll notice that the CSS for the background image of this section is dynamically generated by JavaScript in React as you scroll (please feel free to let me know if it lags, but I doubt that it will). The layers of the image move at different rates, creating a true 3D effect. This site also loads lazily to speed up performance, and only sets a single event listener for all the scrolling events site-wide. I am very familiar with proper state control, design paradigms, composition, and creating interfaces that are pleasurable to look at and interact with.'
        },
        {
          name: 'React Native',
          description: 'I have used React Native for a number of personal projects, and brief contracts early on in my career. I can use it to get a mobile app off the ground quickly, and set up CI/CD using AppCenter. I appreciate that the package is cross-platform, and I could easily contribute to a React Native app if given the opportunity.'
        },
        {
          name: 'Rails',
          description: 'My back-end web development bootcamp in 2017 was focused primarily on Ruby on Rails, and Turing School of Software and Design is notoriously rigorous. I am intimately familiar with Rails design paradigms and best practices. The back end of this website is also is built on Rails. I appreciate the extensibility that Rails provides, and I would consider it for use in back-end services that are primarily web-based and customer facing. I would find it easy to pick up a Rails project if the need were to arise.'
        },
        {
          name: 'Redis',
          description: 'I use Redis as a cache naturally whenever I need to put data in a low-latency intermediary state, before pushing to a larger database. I am also a big fan of RedisGraph, which I have used numerous times for projects and production applications.'
        },
        {
          name: 'Selenium',
          description: 'I have developed large-scale production applications for synthetic monitoring and testing using Selenium and Behave, and I use it frequently for integration testing and web scraping.'
        }
      ],
      devops: [
        {
          name: 'Linux',
          description: 'Linux/UNIX is my console of choice, and I write bash scripts and chron jobs for automation and deployments. I am comfortable with the command line, as well as permissions and file structure. I also use Arch Linux personally, for the sole purpose of telling everyone I know about it.'
        },
        {
          name: 'Git',
          description: 'I have been trained in proper Git practices and workflow management from the very beginning, using vanilla Git in a linux environment, Github, Gitlab, and Bitbucket. I have established CI/CD pipelines using Jenkins integration, AppCenter for native apps, and Gitlab pipelines. I use Git for version control in all of my projects.'
        },
        {
          name: 'Docker',
          description: 'I use Docker frequently when packaging and deploying apps or services that need to be containerized and/or orchestrated. I typically write a Dockerfile when I start a project, and deploy early and often. This website even has a Dockerfile, which is stored in GCP\'s container registry and deployed in Cloud Run.'
        },
        {
          name: 'Kubernetes',
          description: 'I use Kubernetes in pipelines for parallelism and orchestration, to handle deployments, security, and scaling. I use KubernetesExecutor with Airflow as well, and Airflow is the service that I am most familiar with interacting with using Kubernetes (at Quantum Metric, AT&T, and personally). I use Helm charts with Ansible to reuse cluster configuration, and I am becoming more familiar with Kubeflow for orchestraing ML training pipelines and managing experiments.'
        },
        {
          name: 'CI/CD',
          description: 'I have used Jenkins, Gitlab CI, and Github Actions for CI/CD pipelines, and I am familiar with the concepts of continuous integration and continuous deployment. I use CI and CD pipelines to typically run the test suite and health checks before deploying to lower environments such as test, development, and staging.'
        },
        {
          name: 'MLFlow',
          description: 'I use MLFlow to keep track of Machine Learning experiments, results, and models. I integrate it into Airflow and/or Kubernetes pipelines, on dedicated hardware or on the cloud, to enable data scientists to deploy models as services. You can see an example of my work with MLFlow in my PeeWee-TTS project listed in the "Projects" section. I am also familiar with the API and CLI.'
        },
        {
          name: 'AWS',
          description: 'I have used numerous AWS services and apps, including EC2 for dedicated servers, Lambda for one-off tasks and occasionally for ETL, CloudFormation to run large scale tasks, and Sagemaker for machine learning algorithms that need to exist on the cloud. I am also familiar with configuring firewall and IAM permissions, as well as production monitoring in CloudWatch. I used AWS to deploy the MVP when I worked at Zober, as well as my DDPG at Align Tech and Finance.'
        },
        {
          name: 'GCP',
          description: 'I am incredibly proficient in Google BigQuery, and this website itself is deployed to Cloud Run using Google Domains and Artifact Registry. I have also used a variety of GCP Python APIs and storage, and I appreciate how easy it is to integrate with other services using the cloud console and CLI.'
        }
      ],
      machine_learning: [
        {
          name: 'Reinforcement Learning',
          description: 'I have used reinforcement learning primarily in finance, to create agents that can respond to trading signals and act appropriately, given a changing portfolio "state". At Align Tech and Finance, I opted to use a DDPG, because the action space for this task is continuous. A DDPG consists of 2 macine learning models, in this case, one to ask "should I trade", and the other to ask "how much". In my implementation, the former was a DNN and the latter was a CNN. For A/B testing, I have also used multi-armed bandit and monte carlo machines.'
        },
        {
          name: 'Time Series Analysis',
          description: 'I work with time series analysis frequently, when interpreting poisson variables that emerge out of user traffic and CX. An example would be the number of errors that occur per minute. To this end, I have deployed Prophet and ARIMA models, and am currently investigating more powerful algorithms (perhaps even HTMs).'
        },
        {
          name: 'Anomaly Detection',
          description: 'With the CX data that I have used in my career so far, I have performed Anomaly Detection to show outliers in the expected paths that a given user takes when interacting with a website. The path can be represented by a discrete vector of page hits and/or events, which can then be interpreted through an LSTM VAE and other machine learning algorithms.'
        },
        {
          name: 'Gradient Boosting',
          description: 'Gradient boosting, such as XGBoost and Catboost, are fundamental for regression and classification, for most business goals where there are correlated variables. I typically use them as a baseline or first step, after logistic regression, and then extend the model into a DNN or ensemble if necessary.'
        },
        {
          name: 'Regression',
          description: 'I realize that it\'s a little vague to put "regression" as a skill, because it can include many different tasks. However, besides the fundamental knowledge of the concept that I gained from my ML bootcamp (which I was not necessarily getting through my self-studies beforehand), I use it regularly when estimating metrics such as dropoff, and time series prediction.'
        },
        {
          name: 'Classification',
          description: 'Like regression, I know that it\'s a little vague to put "classification" as a skill, but like regression I gained a more thorough and fundamental knowledge of this concept from my ML bootcamp. Up until that point, I had been reading research papers and implementing ML algorithms myself, and I lacked a solid foundation. I use classification now for tasks like user categorization.'
        },
        {
          name: 'Unsupervised Learning',
          description: 'Although I tend to try to use supervised or semi-supervised learning when possible, I use unsupervised learning for tasks like user categorization and clustering. Additionally, part of my text-to-speech project is unsupervised, namely the LSTM encoder that generates the speaker embeddings.'
        },
        {
          name: 'Text-to-Speech',
          description: 'At my Machine Learning bootcamp, my capstone project (which you can find below) is a text-to-speech agent. Thus, I am very familiar with TTS and have additionally read 20-30 papers, including some of the latest, on the subject. My next goal for my TTS project is to upgrade to a diffusion algorithm, using a paper written in early 2023.'
        }
      ],
      soft_skills: [
        {
          name: 'Mentorship',
          description: 'I am comfortable sharing whatever knowledge I learn and possess with others, in a way that is digestible to team members at any skill level. At Zober, I lead a team of 4 Ruby developers in an Agile environment, providing guidance towards recent bootcamp and college graduates. At AT&T, I have taught multiple non-technical employees how to code in Python and JavaScript, using proper coding principles with OOP and composition, and managing features with Git. I am proud to announce that 4 of my dedicated and passionate pupils (at time of writing) are now working on production code and following best practices without issue. I am currently creating training videos and Python courses that will be used across multiple teams.'
        },
        {
          name: 'Agile/Scrum',
          description: 'I am comfortable utilizing Agile properly, holding standups, writing user stories, and managing epics, alongside ticketing systems such as Jira and Git workflows. I use Agile for product and pipeline development, and anything that requires a high degree of iteration and feedback. I have used Agile in my work at all my previous companies. I believe that Agile can also be applied, where appropriate, to Machine Learning projects and experiments, especially services with well-established goals, metrics, and deployments.'
        },
        {
          name: 'Customer Success',
          description: 'I started off both my positions at Quantum Metric and AT&T in more customer-facing B2B environments, having to regularly interface with client and vendor teams. I have used this experience to inform my development practices, and I believe that it is crucial to understand the customer\'s needs and goals in order to deliver a product that is truly valuable,'
        },
        {
          name: 'Code Reusability',
          description: 'From my background in Ruby and Rails, to my current work in Go and Python, I have always endeavored to write idiomatic code that follows the design principles of the libraries and languages at hand. '
        }
      ]
    }
  end

end
