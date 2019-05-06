class AddStateToItems < ActiveRecord::Migration[5.2]
  def change
    add_column :items, :state, :string, null: false
    add_column :items, :shipping, :string, null: false
    add_column :items, :delivery_fee, :string, null: false
  end
end
