Rails.application.routes.draw do
  root to: 'home#index'

  get "get_twits", to: 'home#get_twits', as: "get_twits"
  post "create_twit", to: 'home#create_twit', as: "create_twit"
  delete "delete_twit/:id", to: 'home#delete_twits'
end