class UsersController < ApplicationController

  def signup
  end

  def mypage_card_create
  end

  def show
  end

  def log_out
  end

  def pay
    binding.pry
      Payjp.api_key = 'sk_test_339f6fe8466e202736fdbf30'
      charge = Payjp::Charge.create(
      :amount => @product.price,
      :card => params['payjp-token'],
      :currency => 'jpy',
    )
  end
end
