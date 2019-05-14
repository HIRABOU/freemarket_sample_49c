class ExchangesController < ApplicationController

  def listing_confirmation
    @user = User.find(current_user.id)
    @items = @user.items.page(params[:page]).per(10).order(id: "DESC")
  end

  def trading

  end

  def sold
    @user = User.find(current_user.id)
    @items = @user.items.page(params[:page]).per(10).order(id: "DESC")
  end

end
