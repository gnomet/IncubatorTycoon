I = {}
I.generate_incubator = () ->
  ret = {
  culture_business : L.sector_values(C.all_industries)
  weather : L.random_int(10)
  cost_of_living: Math.max(1, L.random_int(10))* C.living_cost
  university_network: L.sector_values(C.all_industries)
  home_popularity: L.random_int(10)
  world_popularity: L.random_int(10)
  }

  return ret

I.compute_individual_influence = (success_metric, industry, incub_parameters, type) ->
  ret = 0
  if type is 'weather'
    ret = L.weather_impact(industry)*2 #depending on the industry, it's positive impact or negative impact
  if type == 'weather'
    ret *= (incub_parameters['weather']-5) #depending on the value of the weather, we influence more or less
  if type is 'culture_business'
    ret = incub_parameters.culture_business[industry] #take the value of the business in the industry
  if type is 'university_network'
    ret = incub_parameters.university_network[industry] #take the value of the business in the industry
  if type is 'home_popularity'
    ret = L.home_popularity_impact(incub_parameters.home_popularity) #take the value of the business in the industry
  if type is 'world_popularity'
    ret = L.world_popularity_impact(incub_parameters.world_popularity) #take the value of the business in the industry

  ret /= 10 #rescale the value of to interval 0-1
  ret *= C.influences['incubator'] #look at what's the max incubator influence
  ret *= success_metric #finally, compute hard number from success_metric
  return ret


I.compute_incubator_influence = (success_metric, industry, incub_parameters) ->
  #returns the hard value of the influence of the incubator's parameters
  ret = 0
  for key,value of incub_parameters
    #console.log('key is ',key, ' value is ', value)
    temp = I.compute_individual_influence(success_metric, industry, incub_parameters, key)
    ret += temp
    #console.log('current modification ',temp)
  return ret

I.unit_test = () ->
  success_metric = L.random_int(10)
  console.log('success is ',success_metric)
  industry = C.all_industries[L.random_int(C.all_industries.length-1)]
  console.log('industry is ',industry)
  incub = I.generate_incubator()
  console.log('incubator parameters are ', incub)
  infl = I.compute_incubator_influence(success_metric,industry,incub)
  console.log('influence is ', infl)
  console.log('new success is ', success_metric+infl)

window.I = I

