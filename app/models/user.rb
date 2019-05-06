class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
has_many :items
has_many :images

  require 'payjp'
  api_key = 'pk_test_df901acb500678462a655d14'
  Payjp.api_key = api_key


end
