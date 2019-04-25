Rails.application.routes.draw do
  devise_for :users
  get 'items/index' => 'items#index'
  root 'items#index'
end
