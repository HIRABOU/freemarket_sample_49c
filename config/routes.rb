Rails.application.routes.draw do
  devise_for :users
  get 'items/index' => 'items#index'
  root 'items#index'
  resources :items do
    collection do
      get 'sell'
    end
  end
end
