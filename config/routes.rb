Rails.application.routes.draw do
  root 'home#index'

  scope :api do
    scope :v1 do
      get '/images/:name', to: 'images#show'
      get '/information/:name', to: 'information#show'
      resources :skills, only: :index
    end
  end

  resources :mail, only: :create  
end
