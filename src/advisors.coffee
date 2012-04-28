A = {}
A.generate_advisor = () ->
  ret = {
    skill_knowledge : L.sector_values(C.all_skills)
    free_time: Math.max(1,L.random_int(10))
    years_of_experience: Math.max(1,L.random_int(10))
  }
  total_knowledge = 0
  total_knowledge += val for industry,val of ret.skill_knowledge
  ret.salary = (total_knowledge * C.advisor['total_knowledge']) + ( ret.free_time * C.advisor['free_time'] ) + (ret.years_of_experience * C.advisor['years_of_experience'] )
  ret.salary *= C.advisor_basis_salary
  return ret


#A.apply_advisor_to_startup = (advisor,startup) ->
#  for team_member in startup.team
#    for sector, knowledege of advisor.skill_knowledge
#      team_member[sector] *= C.influences['advisor'] * advisor.free_time/10 * advisor.years_of_experience/10 * knowledge
#  return startup

A.compute_advisor_influence = (advisor, startup) ->
  #returns the hard number of the value the advisor adds to the success_value of the startup
  ref = 0
  advised_startup = startup
  stats = {}
  for skill in C.all_skills
    stats[skill] = 0
    for member in advised_startup.team
      temp = 1
      temp *= advisor.skill_knowledge[skill] #factor in the skill knowledge
      temp /= 10 #rescale the skill knowledge to 0-1 interval
      temp *= advisor.free_time/10 * advisor.years_of_experience/10 #factor in the free_time and experience parameters
      temp *= C.influences['advisor'] #factor in the global influence of the advisor
      temp *= member[skill]  #finally factor in the member skill
      member[skill] = temp
  influence = S.startup_matchup(advised_startup)
  return influence

A.unit_test = () ->
  startup = S.generate_startup()
  console.log('startup is ',startup)
  advisor = A.generate_advisor()
  console.log('advisor is ', advisor)
  influence = A.compute_advisor_influence(advisor, startup)
  console.log('advisor influence is ',influence)
  console.log('new success is ',startup.status+influence)

window.A = A