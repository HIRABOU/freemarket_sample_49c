Rails.application.routes.draw do
  devise_for :users,
  controllers: { omniauth_callbacks: 'users/omniauth_callbacks',
                 registrations: 'users/registrations' }

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
      get 'edit_user_info'
      get 'profile_edit'
      get 'purchase'

    end
  end

end

