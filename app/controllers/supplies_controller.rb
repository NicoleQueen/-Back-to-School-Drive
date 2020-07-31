class SuppliesController < ApplicationController
  def index
    @supplies = Supply.all 
    render json: @supplies
  end

  def create
    @supply = Supply.create(supply: params[:supply][:supply], amount: params[:supply][:amount], school_id: params[:supply][:school_id])
    user = User.find_or_create_by(name: params[:supply][:name])
    d = Donation.create(amount: params[:supply][:amount], user_id: user.id, supply_id: @supply.id)
    render json: @supply
  end


def delete
@supply.destroy
end