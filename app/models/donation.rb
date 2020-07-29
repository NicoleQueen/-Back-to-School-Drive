class Donation < ApplicationRecord
  belongs_to :user
  belongs_to :supply

  def user_name
    self.user.name
  end 

  def supply_name
    self.supply.supply
  end 
end
