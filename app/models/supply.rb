class Supply < ApplicationRecord
  belongs_to :school
  has_many :donations
  has_many :users, through: :donations

  def school_name
    self.school.name
  end
end
