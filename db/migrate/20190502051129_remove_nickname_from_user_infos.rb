class RemoveNicknameFromUserInfos < ActiveRecord::Migration[5.2]
  def change
    remove_column :user_infos, :nickname, :string
  end
end
