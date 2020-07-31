class SuppliesController < ApplicationController
  def index
    @supplies = Supply.all 
    render json: @supplies
  end

  def show 
    @supply = School.find_by_id(params[:id])
    render json: @supply
  end
end
