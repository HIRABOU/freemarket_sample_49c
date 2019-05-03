Rails.application.routes.draw do
  devise_for :users

  root 'items#index'
  resources :users do
    collection do
      get 'signup'
      get 'mypage_card_create'
      get 'mypage_card'
      get 'mypage'
      get 'log_out'
    end
  end
  resources :items do
    collection do
      get 'sell'
      get 'edit_user_info'
      get 'profile_edit'
      get 'profile_edit'
      get 'edit_user_info'
      get 'purchase'

    end
  end

end

