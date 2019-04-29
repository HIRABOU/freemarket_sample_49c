class CreateUserInfos < ActiveRecord::Migration[5.2]
  def change
    create_table :user_infos do |t|
      t.string :nickname, null: false
      t.string :family_name, null: false
      t.string :last_name, null: false
      t.string :family_kana, null: false
      t.integer :credit, null: false
      t.integer :birthday, null: false
      t.integer :postal_code, null: false
      t.integer :prefecture, null: false
      t.string :municipality, null: false
      t.string :address ,null: false
      t.string :building 
      t.text :profile
      t.references :user, foreign_key: true
      t.timestamps
    end
  end
end
