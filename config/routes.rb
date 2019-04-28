Rails.application.routes.draw do
  devise_for :users
  get 'items/edit_user_info' => 'items#edit_user_info'
  get 'items/profile_edit' => 'items#profile_edit'
  root 'items#index'
  get 'items/product_detail_page' => 'items#product_detail_page'
  get 'signup' => 'users#signup'


end
