class DonationsController < ApplicationController
    def index
        # byebug
        supplies = Supply.where("school_id = ?", params[:school_id])
        #we are accessing supplies because that links our donations to our school
        #we pull in the school_id from the fetch as a param
        @donations = supplies.map{|supply| supply.donations}.flatten
        # we have to get the instance of each supply and the donation of those instances
        #returns nested arrays so we flatten it to get 1 array
        render json: @donations
        #now only shows the donations for that specific school rather than all donations
    end
    
    def create
        # byebug
        user = User.find_or_create_by(name: params[:donation][:name])

        supply = Supply.find_or_create_by(supply: params[:donation][:supply], amount: params[:donation][:amount], school_id: params[:donation][:school_id])
        
        @donation = Donation.create(amount: params[:donation][:amount], user_id: user.id, supply_id: supply.id)
        render json: @donation
    end
end

