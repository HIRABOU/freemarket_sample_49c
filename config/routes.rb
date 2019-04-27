Rails.application.routes.draw do
  devise_for :users
  get 'items/edit' => 'items#edit'
  root 'items#index'
end
