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
| user_id               | integer | foreign_key: true |
| item_id               | integer | foreign_key: true |

# Association
- belongs_to :user
- belongs_to :item


# likes table
| Column                | Type    | Options           |
|-----------------------|---------|-------------------|
| user_id               | integer | foreign_key: true |
| item_id               | integer | foreign_key: true |

# Association
- belongs_to :user
- belongs_to :item


# items table
| Column                | Type    | Options           |
|-----------------------|---------|-------------------|
| name                  | string  | null: false       |
| brand                 | string  | null: false       |
| text                  | text    | null: false       |
| price                 | integer | null: false       |
| user_id               | integer | foreign_key: true |

# Association
- has_many :images
- has_many :likes
- belongs_to :user
- belongs_to :caategory
- add_index :users


# categories table
| Column                | Type    | Options           |
|-----------------------|---------|-------------------|
| type                  | string  | null: false       |
| item_id               | integer | foreign_key: true |

# Association
- has_many :items


# user_info table
| Column                | Type    | Options           |
|-----------------------|---------|-------------------|
| nickname              | string  | null: false       |
| family_name           | string  | null: false       |
| last_name             | string  | null: false       |
| credit                | integer | null: false       |
| birthday              | integer | null: false       |
| adress                | string  | null: false       |

# Association
- belongs_to :user