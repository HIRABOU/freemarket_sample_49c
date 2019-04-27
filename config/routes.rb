Rails.application.routes.draw do
  devise_for :users
  get 'items/edit_user_info' => 'items#edit_user_info'
  get 'items/profile_edit' => 'items#profile_edit'
  root 'items#index'

  get 'signup' => 'users#signup'


end
