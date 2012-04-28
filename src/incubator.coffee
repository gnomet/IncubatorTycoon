generate_incubator = () ->
  ret = {

  culture_business : L.sector_values(C.all_industries)
  weather : random_int(10)
  cost_of_living: Math.max(1, random_int(10))* C.living_cost
  university_network: sector_university_network()

  }
  total_culture = 0
  total_culture += val for industry,val of ret.culture_business
  ret.salary = (total_culture * 0.25) + ( ret.free_time * 0.35 ) + (ret.years_of_experience * 0.4 )
  ret.salary *= 20000
  return ret


test = () ->
  culture_business = sector_culture_business()
  total_culture = 0



test()