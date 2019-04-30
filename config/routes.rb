Rails.application.routes.draw do
  devise_for :users
<<<<<<< HEAD
  get 'items/edit_user_info' => 'items#edit_user_info'
  get 'items/profile_edit' => 'items#profile_edit'
  get 'items/purchase' => 'items#purchase'
=======
>>>>>>> master
  root 'items#index'
  resources :users do
    collection do
      get 'signup'
      get 'mypage_card_create'
    end
  end
  resources :items do
    collection do
      get 'sell'
      get 'edit_user_info'
      get 'profile_edit'
    end
  end
end
