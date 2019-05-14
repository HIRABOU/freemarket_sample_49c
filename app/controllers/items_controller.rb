class ItemsController < ApplicationController
  before_action :set_item, only: [:show]
  def index
    @items = Item.order("RAND()").limit(4)
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

  def show
    @user = @item.user
    @other_items = Item.where.not(id: params[:id]).order('id DESC').first(6)
    @image = @item.images.first

  end

  def search
    unless params[:keyword] == ""
      @items = Item.where("name LIKE(?)", "%#{params[:keyword]}%")
    end
    @word = params[:keyword]
    @new_items = Item.all.order('id DESC').limit(48)
  end



  private

  def item_params
    params.require(:item).permit(:name, :text, :state, :delivery_fee, :shipping, :price, :category_id, :prefecture, images: []).merge(user_id: current_user.id)
  end

  def set_item
    @item = Item.find(params[:id])
  end
end
