class SkillsController < ApplicationController

  def index
    render json: {
      languages: [
        { name: 'Python',
          description: 'Python is my language of choice for most tasks. It\'s simple, powerful, and arguably the most effective for machine learning and back-end tasks. I use Turing\'s rule of least power, using the simplest language first in most circumstances, to improve iteration speed, reduce technical debt, and avoid uneccessary complexity. I have used Python regularly for most tasks throughout my career.' 
        },
        { name: 'JavaScript',
          description: 'It has been said that anything that can be written in JavaScript will, eventually, be written in JavaScript. While I don\'t agree with this in all circumstances, I lean on JavaScript for any front end or UI-oriented tasks. I have used React.js extensively, as well as React Native, and developed custom widgets and front-end hooks to gather user data from some of the world\'s largest companies. Whether it\'s an internal tool, or a standalone app, I believe a good user interface is crucial for the user to achieve their goals.'
        },
        {
          name: 'SQL',
          description: 'If there\'s one thing in the world I feel comfortable bragging about, it\'s my SQL skills. I have used SQL to perform many complicated mathematical tasks. I wrote a kernel two sample test, mapping user attributes in hilbert space. I have performed fourier transformations, and written poisson distribution calculations, even performed machine learning and time series analysis, using nothing but SQL. I feel that it is often optimal to perform as many computationally intensive tasks as possible in SQL, before the data is transformed and loaded somewhere else.'
        },
        {
          name: 'Ruby',
          description: 'Ruby is the first language that I learned all the way through, and studying Ruby is how I learned most of the advanced programming principles that I know now. Although I have largely moved on to other languages, I transfer my knowledge of proper coding practices that Ruby is famous for into everything I do. It is because of my background in this language that I write clean, encapsulated, DRY, and test-driven code, whether the codebase is object-oriented, composed, or functional.'
        },
        {
          name: 'C++',
          description: 'During my early education, I took a number of C++ classes, that served as an introduction to programming. Most of the languages I work with nowadays do not have pointers, manual memory allocations, fixed-length arrays, or custom garbage collection, but it is this peripheral knowledge that allows me to step into the world of staticly types languages at will.'
        },
        {
          name: 'Cypher',
          description: 'Cypher is Neo4j\'s query language, and the language used in numerous graph databases. I use graph databases often, for relational data that needs to be accessed quickly and consistently. A good graph can reduce query times by orders of magnitude, and there are special graph traversal algorithms that can paint pictures that RDDs struggle with.'
        }
      ],
      libraries: [
        {
          name: 'Pytorch',
          description: 'Pytorch is my deep learning framework of choice in most cases due to it\'s ease in debugging, speed, and pythonic structure. I have used it at AT&T for time series analysis and LSTMs, in my work with deep text-to-speech algorithms, and extensively at the UCSD Machine Learning bootcamp.'
        },
        { name: 'Tensorflow',
          description: 'I have used Tensorflow to write and modify DQNs and DDPGs (reinforcement learning algorithms) in my work as a machine learning consultant, for use in predicting stock trends and conducting arbitrage. The library was also taught at my Machine Learning bootcamp, and I use it for its variety of datasets, algorithms, and helpers.'
        },
        {
          name: 'Airflow',
          description: 'I have used Apache Airflow for numerous ETL tasks, in my work at Quantum Metric and AT&T. I used it at AT&T to create an alerting system that is 15x faster than any of our vendor tools. I used it at Quantum Metric to provide custom aggregated reports to clients, after querying the data warehouse, deployed on Kubernetes'
        },
        {
          name: 'Spark',
          description: 'I have used spark extensively for projects and curriculum at my machine learning bootcamp. I cannot claim to have used it in large-scale production applications yet, but my intimate familiarity with pandas, numpy, SQL, and devops make the transition very easy.'
        },
        {
          name: 'Neo4j',
          description: 'I love Neo4j and graph databases, and have used Cypher to improve query performance by 15-20x in production applications. I have found that mapping relations as nodes and edges, as opposed to the sets of SQL, can be incredibly fast, insightful, and far easier to run clustering and graph-based ML on, using libraries like APOC.'
        },
        {
          name: 'Flask',
          description: 'Flask is ideally what I use for microservices, and for any sort of back-end interface. I appreciate its customizability and its lightweight nature. What Flask lacks in middleware out of the box, I have the expertise to include manually. I am very familiar with Flask structure, and how to add the packages necessary to meet the needs of the application.'
        },
        {
          name: 'React.js',
          description: 'React is my go-to front end framework. In fact, I used it to create this site. If you look closely, you\'ll notice that the CSS for the background image of this section is dynamically generated in React as you scroll. The layers of the image move at different rates, creating a true 3D effect. You could probably also notice that it loads lazily to speed up performance, and only sets a single event listener for all the scrolling events site-wide. Besides that, I am very familiar with proper state control, design paradigms, composition, and creating interfaces that are pleasurable to look at and interact with.'
        },
        {
          name: 'React Native',
          description: 'I have used React Native for a number of personal projects, and brief contracts early on in my career. I would use it if I ever wanted to get a mobile app of the ground quickly, and I appreciate the extensibility of its cross-platform nature. I could easily contribute to a React Native app if given the opportunity.'
        },
        {
          name: 'Ruby on Rails',
          description: 'My back-end web development bootcamp in 2017 was focused primarily on Ruby on Rails, and Turing School of Software and Design is notoriously rigorous. Suffice it to say, the design paradigms and best practices were drilled into my brain. I have not used Rails much lately, even though this website is built on Rails, due to its slow performance in most tasks. Regardless, I would find it easy to pick up a Rails project if the need were to arise, however I would personally more likely opt for Django.'
        },
        {
          name: 'Redis',
          description: 'I use Redis as a cache naturally whenever I need to put data in a low-latency intermediary state, before pushing to a larger database. I am also a big fan of RedisGraph, which I have used numerous times for projects and production applications. Of course, I use the cache sparingly, but I know when to use it.'
        },
        {
          name: 'Selenium',
          description: 'I use Selenium for many different tasks. When building production applications, I use it frequently for integration testing. If there is a process I want to automate, I use it for that purpose. Sometimes it is used in CX for production testing. I also use it to scrape data for machine learning models if necessary.'
        }
      ],
      devops: [
        {
          name: 'Linux',
          description: 'I use Arch Linux for the sole purpose of telling everyone I know about it. Just kidding, but yes I do use Arch. In all seriousness, the Linux/Unix terminal and bash scripts are my console of choice and I have been using them for quite a long time.'
        },
        {
          name: 'Docker',
          description: 'Docker is second nature to me at this point, when building any app that needs to be containerized, packages, and/or orchestrated. I typically write a Dockerfile when I start a project, and deploy early and often.'
        },
        {
          name: 'MLFlow',
          description: 'I use MLFlow for machine learning services where the main purpose is to experiment with and deploy an optimal model, especially when the end result does not need to consume a data stream (when it does, I would use Kubeflow). It offers experiment tracking and deployment options that are incredibly helpful and extensible, as well as easily integratable into other systems.'
        },
        {
          name: 'Kubernetes',
          description: 'I have used Kubernetes to deploy any apps that need to be orchestrated and work reliably in real-time. At Quantum Metric, I deployed an Airflow pipeline in Kubernetes, and my codebase is running on a cluster at AT&T. For machine learning, I use Kubeflow to deploy models as services.'
        },
        {
          name: 'Kubeflow',
          description: 'My latest projects use Kubeflow as an extension to Kubernetes to orchestrate machine learning pipelines in the same way that Kubernetes can orchestrate web applications and data pipelines. I will be using Kubeflow more and more over time, especially when projects require real-time ingestion from data streams.'
        },
        {
          name: 'Helm',
          description: 'I\'ve used Helm to deploy Airflow pipelines, and typically rely on it as the scaffolding for any Kubernetes cluser. I start with a Helm chart in the same way that I would start an application with a Dockerfile.'
        },
        {
          name: 'AWS',
          description: 'I have used numerous AWS services and apps, including EC2 for dedicated servers, Lambda for one-off tasks and occasionally for ETL, CloudFormation to run large scale tasks, and Sagemaker for machine learning algorithms that need to exist on the cloud. I used AWS to deploy the MVP for when I worked for Zober, as well as for my DDPG at Align Tech and Finance.'
        },
        {
          name: 'GCP',
          description: 'I have used Google BigQuery to a frightening degree, but besides that, this website is actually deployed to cloud run, using Google domains. I have also used a variety of GCP Python APIs and storage, and I appreciate how easy it is to integrate with other services using the cloud console and cli.'
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
      ]
    }
  end

end
