class SchoolsController < ApplicationController
  def index
    @schools = School.all 
    render json: @schools
  end

  def show 
  end
end
