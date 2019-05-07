class Item < ApplicationRecord
  belongs_to :user
  has_many :images
  has_many_attached :images

  validates_presence_of :name, :text, :images, :price
end
