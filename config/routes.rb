Rails.application.routes.draw do
  devise_for :users
  get 'items/edit_user_info' => 'items#edit_user_info'
  get 'items/profile_edit' => 'items#profile_edit'
  root 'items#index'
<<<<<<< HEAD
  get 'items/product_detail_page' => 'items#product_detail_page'
=======
  resources :items do
    collection do
      get 'sell'
    end
  end
>>>>>>> master
  get 'signup' => 'users#signup'
end
