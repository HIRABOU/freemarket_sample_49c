# READ ME

## users table
| Column                | Type    | Options           |
|-----------------------|---------|-------------------|
| password              | string  | null: false       |
| email                 | string  | null: false       |
| nickname              | string  | null: false       |

## Association
- has_many :images
- has_many :items
- has_many :likes
- has_many :user_infos


## images table
| Column                | Type    | Options           |
|-----------------------|---------|-------------------|
| content               | string    | null: false       |
| user               | references  | foreign_key: true |
| item               | references  | foreign_key: true |

## Association
- belongs_to :user
- belongs_to :item


## likes table
| Column                | Type    | Options           |
|-----------------------|---------|-------------------|
| user               | references  | foreign_key: true |
| item               | references  | foreign_key: true |

## Association
- belongs_to :user
- belongs_to :item


## items table
| Column                | Type    | Options           |
|-----------------------|---------|-------------------|
| name                  | string  | null: false       |
| brand                 | string  |                   |
| text                  | text    | null: false       |
| price                 | integer | null: false       |
| prefectures           | integer  | null: false       |
| user               | references  | foreign_key: true |
| category           | references  | foreign_key: true |
| state                | string  | null: false       |
| shipping             | string  | null: false       |
| delivery_fee         | string  | null: false       |
| trade         | boolean  | default: false, null: false  |

## Association
- has_many :images
- has_many :likes
- belongs_to :user
- belongs_to :category


## categories table
| Column                | Type    | Options           |
|-----------------------|---------|-------------------|
| type                  | string  | null: false       |
| parent_id             | integer | index: true       |

## Association
- has_many :items
- has_ancestry

### etc
- gem act_as_tree


## user_infos table
| Column                | Type    | Options           |
|-----------------------|---------|-------------------|
| family_name           | string  | null: false       |
| last_name             | string  | null: false       |
| family_kana           | string  | null: false       |
| last_kana             | string  | null: false       |
| credit                | integer | null: false       |
| birthday              | integer | null: false       |
| postal_code              | integer | null: false       |
| prefectures               | integer  | null: false       |
| Municipalities               | string  | null: false       |
| address               | string  | null: false       |
| building               | string  |        |
| profile               | text  |        |
| user               | references  | foreign_key: true |

## Association
- belongs_to :user