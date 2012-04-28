I = {}
I.generate_incubator = () ->
  ret = {
  culture_business : L.sector_values(C.all_industries)
  weather : random_int(10)
  cost_of_living: Math.max(1, random_int(10))* C.living_cost
  university_network: L.sector_values(C.all_industries)
  home_popularity: random_int(10)
  world_popularity: random_int(10)
  }

  return ret

I.compute_individual_influence = (success_metric, industry, incub_parameters, type) ->
  ret = 0
  if type is 'weather' then
    ret = L.weather_impact(industry)*2 #depending on the industry, it's positive impact or negative impact
  if type == 'weather' then
    ret *= (incub_parameters['weather']-5) #depending on the value of the weather, we influence more or less
  if type is 'culture_business' then
    ret = incub_parameters.culture_business[industry] #take the value of the business in the industry
  if type is 'university_network' then
    ret = incub_parameters.university_network[industry] #take the value of the business in the industry
  if type is 'home_popularity' then
    ret = L.home_popularity_impact(incub_parameters.home_popularity) #take the value of the business in the industry
  if type is 'world_popularity' then
    ret = L.world_popularity_impact(incub_parameters.world_popularity) #take the value of the business in the industry

  ret /= 10 #rescale the value of to interval 0-1
  ret *= C.influences['incubator'] #look at what's the max incubator influence
  ret *= success_metric #finally, compute hard number from success_metric
  return ret


I.compute_incubator_influence = (success_metric, industry, incub_parameters) ->
  ret = 0
  ret += compute_individual_influence(success_metric, industry, incub_parameters, key) for key,value in incub_parameters
  return ret

window.I = I
"""test = () ->
  culture_business = sector_culture_business()
  total_culture = 0



test()"""