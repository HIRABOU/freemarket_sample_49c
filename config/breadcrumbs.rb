crumb :root do
  link " メルカリ", root_path
end

crumb :users do
  link "マイページ", user_path(current_user.id)
  parent :root
end

crumb :profile_edit do
  link "#{current_user.nickname}",  profile_edit_items_path
  parent :users
end

crumb :edit_user_info do
  link "本人情報の登録", edit_user_info_items_path
  parent :users
end

crumb :log_out do
  link "ログアウト",log_out_users_path(current_user.id)
  parent :users
end

crumb :mypage_card do
  link "お支払い方法", mypage_card_users_path(current_user.id)
  parent :users
end

crumb :show do |item|
  link "商品詳細",items_path
  parent :root
end
