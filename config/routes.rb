Rails.application.routes.draw do
  devise_for :users
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
<<<<<<< HEAD
<<<<<<< HEAD
  get 'signup' => 'users#signup'
  get 'log_out' => 'users#log_out'
  resources :users, only: [:show]
=======
>>>>>>> master
end
