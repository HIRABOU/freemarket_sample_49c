class AddPrefectureToItems < ActiveRecord::Migration[5.2]
  def change
    add_column :items, :prefecture, :integer, null: false
  end
end
