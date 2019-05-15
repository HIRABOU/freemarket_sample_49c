class ExchangesController < ApplicationController

  before_action :set_user, except: [:trade]
  before_action :set_items, except: [:trade]
  before_action :set_parent, except: [:trade]

  def listing_confirmation
    
  end

  def trading

  end

  def sold
    
  end

  private

  def set_items
    @items = @user.items.page(params[:page]).per(10).order(id: "DESC")
  end

  def set_user
    @user = User.find(current_user.id)
  end

  def set_parent
    @parents = Category.where(ancestry: nil)
  end
end
