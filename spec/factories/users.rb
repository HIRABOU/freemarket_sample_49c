FactoryBot.define do
  factory :user, class: User  do
    password = Faker::Internet.password(6)
    nickname { Faker::Name.initials(2) }
    email { Faker::Internet.email }
    password { password }
    password_confirmation   { password }
  end
end