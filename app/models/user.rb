class User < ApplicationRecord
  has_many :donations
  has_many :supplies, through: :donations
end
