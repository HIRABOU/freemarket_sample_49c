class Image < ApplicationRecord
  belongs_to :user
  belongs_to :item

  mount_uploader :content, ImageUploader
end
