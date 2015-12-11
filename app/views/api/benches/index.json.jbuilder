json.array! @benches do |bench|
  json.extend! bench, :description, :lat, :lng
end
