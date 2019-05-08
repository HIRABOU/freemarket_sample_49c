class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :omniauthable, omniauth_providers: %i[facebook google_oauth2]

  has_many :items
  has_many :images
  has_many :sns_credentials, dependent: :destroy
  validates :nickname, presence: true, length: { maximum: 6 }

  def self.find_oauth(auth)
    uid = auth.uid
    provider = auth.provider
    snscredential = SnsCredential.where(uid: uid, provider: provider).first
    if snscredential.present? 
      user = User.where(id: snscredential.user_id).first
      unless user.present? 
        user = User.new(
          nickname: auth.info.name,
          email: auth.info.email
        )
      end
      sns = snscredential
    else 
      user = User.where(email: auth.info.email).first
      if user.present? 
        sns = SnsCredential.new(
          uid: uid,
          provider: provider,
          user_id: user.id
        )
      else 
        user = User.new(
          nickname: auth.info.name,
          email: auth.info.email
        )
        sns = SnsCredential.create(
          uid: uid,
          provider: provider
        )
      end
    end
    return { user: user , sns_id: sns.id }
  end
end

