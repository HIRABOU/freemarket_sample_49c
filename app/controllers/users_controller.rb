class UsersController < ApplicationController

  before_action :set_parent

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

  def set_parent
    @parents = Category.where(ancestry: nil)
  end

end
