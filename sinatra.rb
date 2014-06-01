require 'sinatra'
require 'erb'
require 'data_mapper'
require_relative 'submission.rb'

DataMapper::setup(:default, "sqlite3://#{Dir.pwd}/communityMap.db")
DataMapper.finalize.auto_upgrade!
get '/' do
	if not params["applyfilterbutton"].nil?
		@filter = params["applyfilterbutton"]
	else
		@filter = "Bears!"
	end
	if not @filter.nil?
		@submissions = Submission.all(:type => @filter)
	end
	erb :main
end


post '/' do
	rating = params["ratingdropdown"]
  neighborhood = params["neighborhooddropdown"]
  submitter = params["submitter"]
	type = params["type"]

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
