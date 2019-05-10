class ItemsController < ApplicationController
  def index
    @items = Item.all.first(4)
  end

  def new
    @item = Item.new
  end

  def create
    @items = Item.create(item_params)
    render :index
  end

  def edit_user_info

  end

  def profile_edit

  end

  def purchase

  end

  def profile_edit
  end

  def show
    @item = Item.find(params[:id])
    @user = @item.user
    @other_items = Item.where.not(id: params[:id])
    @image = @item.images.first
  end

  private

  def item_params
    params.require(:item).permit(:name, :text, :state, :delivery_fee, :shipping, :price, :category_id, images: []).merge(user_id: current_user.id)
  end


end
