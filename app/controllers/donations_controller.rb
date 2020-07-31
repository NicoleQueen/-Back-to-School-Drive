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
        user = User.find_or_create_by(name: params[:donation][:name])
        
        supply = Supply.where('supply = ? and school_id =?', params[:donation][:supply], params[:donation][:school_id]).first_or_create do |supply|
            supply.supply = params[:donation][:supply]
            supply.school_id = params[:donation][:school_id]
            supply.amount = params[:donation][:amount]
        end
# byebug
        @donation = Donation.create(amount: params[:donation][:amount], user_id: user.id, supply_id: supply.id)
        render json: @donation
    end
end

