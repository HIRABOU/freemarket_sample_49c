class UsersController < ApplicationController

  def signup
  end

  def mypage_card
  end


  def mypage_card_create
  end

  def show
  end

  def log_out
  end

  def listing_confirmation
    @user = User.find(current_user.id)
    @items = @user.items.order(id: "DESC")
  end

end
