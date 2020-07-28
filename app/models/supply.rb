class Supply < ApplicationRecord
  belongs_to :school
  has_many :donations
  has_many :users, through: :donations
end
