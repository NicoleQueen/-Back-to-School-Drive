Rails.application.routes.draw do
  resources :donations, only:[:index, :create, :delete]
  resources :supplies, only:[:index, :show, :create, :update]
  resources :schools, only:[:index, :show]
  resources :users, only:[:index]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
