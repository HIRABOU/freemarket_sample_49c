class Users::RegistrationsController < Devise::RegistrationsController
   def create
     if params[:user][:password] == "" 
       params[:user][:password] = "Devise.friendly_token.first(6)"
       params[:user][:password_confirmation] = "Devise.friendly_token.first(6)"
       super
       sns = SnsCredential.update(user_id:  @user.id)
     else 
       super
     end
   end
end
