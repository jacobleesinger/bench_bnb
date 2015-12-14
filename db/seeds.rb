# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

bench1 = Bench.create!({description: "A bench", lat: 37.771235, lng: -122.4346124})
bench2 = Bench.create!({description: "An awesome bench", lat:37.774563, lng: -122.4356 })
bench3 = Bench.create!({description: "An old bench", lat: 37.77624, lng: -122.43962})
