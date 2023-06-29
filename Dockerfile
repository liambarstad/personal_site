FROM ruby:3.0.2

WORKDIR /app

ENV RAILS_ENV=production
ENV NODE_ENV=production

EXPOSE 3000

RUN apt-get update && apt-get install -y curl apt-utils webpack
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get install -y nodejs
RUN npm install -g yarn
RUN yarn install

COPY Gemfile ./

RUN bundle install --jobs 4

COPY . .

RUN bundle exec rake assets:precompile

CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0"]