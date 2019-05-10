Rails.application.routes.draw do
  get 'card/new'
  get 'card/show'
  devise_for :users
  root 'items#index'
  resources :users do
    collection do
      get 'signup'
      # get 'mypage_card_create'
      get 'mypage_card'
      get 'mypage'
      get 'log_out'
      post 'pay'
    end
  end
  resources :items do
    collection do
      get 'edit_user_info'
      get 'profile_edit'
      get 'purchase'

    end
  end

  resources :card, only: [:new, :show] do
    collection do
      post 'show', to: 'card#show'
      post 'pay', to: 'card#pay'
      post 'delete', to: 'card#delete'
    end
  end


end


