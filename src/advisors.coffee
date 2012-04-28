generate_advisor = () ->
  ret = {
  sector_knowledge:
    technical: random_int(10)
    marketing: random_int(10)
    finance: random_int(10)
  free_time: random_int(10)
  years_of_experience: random_int(10)
  }
  ret.salary = ((ret.sector_knowledge.technical + ret.sector_knowledge.marketing + ret.sector_knowledge.finance ) * 0.25) + ( ret.free_time * 0.35 ) + (ret.years_of_experience * 0.4 )
  ret.salary *= 20000
  return ret


apply_advisor_to_startup = (advisor,startup) ->
  for team_member in startup.team
    for sector, knowledege of advisor.sector_knowledge
      team_member[sector] *= C.teach_factor * advisor.free_time * advisor.years_of_experience * knowledge

  return startup


