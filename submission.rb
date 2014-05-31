class Submission
	include DataMapper::Resource
	property :id, Serial
	property :area, String
	property :submitter, String
	property :rating, Integer
	property :comment, String
	property :type, String
end

