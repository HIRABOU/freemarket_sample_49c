class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string :name, null: false
      t.string :brand
      t.text :text, null: false
      t.integer :price, null: false
      t.references :user
      t.references :category
      t.timestamps
    end
  end
end
