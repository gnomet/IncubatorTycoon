generate_advisor = () ->
  ret = {
  skill_knowledge = L.sector_values(C.all_skills)

  free_time: random_int(10)
  years_of_experience: random_int(10)
  }
  total_knowledge = 0
  total_knowledge += val for industry,val of ret.culture_business
  ret.salary = (total_knowledge * 0.25) + ( ret.free_time * 0.35 ) + (ret.years_of_experience * 0.4 )
  ret.salary *= 20000
  return ret


