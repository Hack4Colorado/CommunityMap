require 'sinatra'
require 'erb'
require 'data_mapper'
require_relative 'submission.rb'

DataMapper::setup(:default, "sqlite3://#{Dir.pwd}/communityMap.db")
DataMapper.finalize.auto_upgrade!
get '/' do
	if not params["applyfilterbutton"].nil?
		@filter = params["applyfilterbutton"]
	end
	if not @filter.nil?
		@submissions = Submission.all(:type => @filter)
		@regionResults = averagedValues(@submissions)
		@averagedResults = []
		counter = 0
		while counter < 64
			if @regionResults[counter][1] == 0
				@averagedResults[counter] = [0]
				counter += 1
				next
			end
			@averagedResults[counter] = @regionResults[counter][0]/@regionResults[counter][1]
			counter += 1
		end
		if @averagedResults.empty?
			@averagedResults = 0
		end
	end

	erb :main
end


post '/' do
	rating = params["ratingdropdown"]
  neighborhood = params["neighborhooddropdown"]
  submitter = params["submitter"]
	type = params["submitwithfilter"]

  if rating.nil? or neighborhood.nil? or type.nil?
	  return
	end	

	if submitter.nil? 
		submitter = "Anonymous"
	end


	Submission.create(:area => neighborhood,
										:submitter => submitter,
										:rating => rating,
										:comment => "none",
										:type => type
									 )
end

def averagedValues(arrayOfFilteredResults)
	if arrayOfFilteredResults.nil?
		return nil
	end
	countyAmount = 64
	regionsArray = []
	indexCounter = 0

	while indexCounter < 64
		regionsArray[indexCounter] = [0,0]
		indexCounter += 1
	end
	for filteredResult in arrayOfFilteredResults
		regionsArray[filteredResult.area.to_i][0] += filteredResult.rating.to_i
		regionsArray[filteredResult.area.to_i][1] += 1
	end
	regionsArray


end
