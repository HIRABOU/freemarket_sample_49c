Rails.application.routes.draw do
  devise_for :users
  root 'items#index'

  get 'signup' => 'users#signup'


end
