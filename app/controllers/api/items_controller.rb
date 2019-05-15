class Api::ItemsController < ApplicationController
  def new
    @secondCategories = Category.where(ancestry: params[:firstCat])
    @thirdCategories = Category.where(ancestry: "#{params[:firstCat]}/#{params[:secondCat]}")
  end
end