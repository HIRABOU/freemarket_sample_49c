class ItemsController < ApplicationController
  def index
  end

  def new
    @item = Item.new
  end

  def create
    @item = Item.new
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

def pay
  Payjp.api_key = PAYJP_SECRET_KEY
  Payjp::Charge.create(currency: 'jpy', amount: 5000, card: params['payjp-token'])
  redirect_to root_path, notice: "支払いが完了しました"
end

  private

  def item_params
    params.permit(:name, :text, :state, :delivery_fee, :shipping, :price, :category_id).merge(user_id: current_user.id)
  end

end
