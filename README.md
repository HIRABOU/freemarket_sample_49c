## READ ME

# users table
| Column                | Type    | Options           |
|-----------------------|---------|-------------------|
| password              | string  | null: false       |
| email                 | string  | null: false       |

# Association
- has_many :images
- has_many :items
- has_many :likes
- has_many :infos


# image table
| Column                | Type    | Options           |
|-----------------------|---------|-------------------|
| content               | text    | null: false       |
| user               | references  | foreign_key: true |
| item               | references  | foreign_key: true |

# Association
- belongs_to :user
- belongs_to :item


# likes table
| Column                | Type    | Options           |
|-----------------------|---------|-------------------|
| user               | references  | foreign_key: true |
| item               | references  | foreign_key: true |

# Association
- belongs_to :user
- belongs_to :item


# items table
| Column                | Type    | Options           |
|-----------------------|---------|-------------------|
| name                  | string  | null: false       |
| brand                 | string  |                   |
| text                  | text    | null: false       |
| price                 | integer | null: false       |
| user               | references  | foreign_key: true |
| category           | references  | foreign_key: true |

# Association
- has_many :images
- has_many :likes
- belongs_to :user
- belongs_to :category


# categories table
| Column                | Type    | Options           |
|-----------------------|---------|-------------------|
| type                  | string  | null: false       |

# Association
- has_many :items


# user_info table
| Column                | Type    | Options           |
|-----------------------|---------|-------------------|
| nickname              | string  | null: false       |
| family_name           | string  | null: false       |
| last_name             | string  | null: false       |
| family_kana           | string  | null: false       |
| last_kana             | string  | null: false       |
| credit                | integer | null: false       |
| birthday              | integer | null: false       |
| postal_code              | integer | null: false       |
| prefectures               | string  | null: false       |
| Municipalities               | string  | null: false       |
| address               | string  | null: false       |
| building               | string  |        |
| user               | references  | foreign_key: true |

# Association
- belongs_to :user