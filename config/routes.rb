Rails.application.routes.draw do
  resources :donations
  resources :supplies
  resources :schools
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
