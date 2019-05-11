class ItemsController < ApplicationController
  before_action :set_item, only: [:show]
  def index
    @items = Item.order(id: "DESC").first(4)
  end

  def new
    @item = Item.new
  end

  def create
    @item = Item.new
    @items = Item.create(item_params)
    redirect_to root_path
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
    @user = @item.user
    @other_items = Item.where.not(id: params[:id])
    @image = @item.images.first
  end

  private

  def item_params
    params.require(:item).permit(:name, :text, :state, :delivery_fee, :shipping, :price, :category_id, images: []).merge(user_id: current_user.id)
  end

  def set_item
    @item = Item.find(params[:id])
  end
end
