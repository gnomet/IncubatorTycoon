A = {}
A.generate_advisor = () ->
  ret = {
    skill_knowledge : L.sector_values(C.all_skills)
    free_time: random_int(10)
    years_of_experience: random_int(10)
  }
  total_knowledge = 0
  total_knowledge += val for industry,val of ret.skill_knowledge
  ret.salary = (total_knowledge * C.advisor['total_knowledge']) + ( ret.free_time * C.advisor['free_time'] ) + (ret.years_of_experience * C.advisor['years_of_experience'] )
  ret.salary *= C.advisor_basis_salary
  return ret


A.apply_advisor_to_startup = (advisor,startup) ->
  for team_member in startup.team
    for sector, knowledege of advisor.skil_knowledge
      team_member[sector] *= C.influences['advisor'] * advisor.free_time/10 * advisor.years_of_experience/10 * knowledge
  return startup


A.advisor_unit_test = () ->
  startup = S.generate_startup()
  console.log('startup is ',startup)
  success = S.startup_matchup(startup)
  console.log('success is ',success)
  advisor = A.generate_advisor()
  console.log('advisor is ', advisor)
  startup = A.apply_advisor_to_startup(advisor, startup)
  console.log('new startup is ',startup)
  success = S.startup_matchup(startup)
  console.log('new success is ',success)

  window.A = A