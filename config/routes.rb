Rails.application.routes.draw do
  resources :donations, only:[:index, :create, :delete]
  resources :supplies, only:[:index, :create, :update]
  resources :schools, only:[:index, :show]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
