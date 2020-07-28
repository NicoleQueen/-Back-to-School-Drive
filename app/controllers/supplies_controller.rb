class SuppliesController < ApplicationController
  def index
    @supplies = Supply.all 
    render json: @supplies
  end
end
