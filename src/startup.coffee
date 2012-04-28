S={}

S.random_team = (max_members =3) ->
  i = 0
  max_members = random_int(max_members)
  while i < max_members
    i++
    L.sector_values(C.all_skills)

S.generate_startup = () ->
  ret =
    team_fit: random_int(10)
    team: S.random_team()
    burn_rate: random_int(10) * C.burn_basis
    cash: random_int(10) * C.cash_basis
  industries =
    agriculture:
      technical: 0.4
      marketing: 0.4
      finance: 0.2
    hardware:
      technical: 0.6
      marketing: 0.3
      finance: 0.1
    health:
      technical: 0.1
      marketing: 0.3
      finance: 0.5
    buzzwords:
      technical: 0.1
      marketing: 0.8
      finance: 0.1
  industry = C.all_industries[random_int(C.all_industries.length-1)]
  ret.industry = industry
  ret.project_requirements = industries[ industry ]

  ret.status = S.startup_matchup(ret) * C.starting_match_bias
  ret.status -= L.random_int(C.possible_starting_deficit)

  return ret


S.startup_matchup = (startup) ->
  team_skills = {}
  for member in startup.team
    for skill, level of member
      team_skills[skill] ?= 0
      team_skills[skill] += level

  match = 0
  for skill, importance in startup.project_requirements
    match += importance * team_skills[skill]

  return match

S.develop_startup = (startup) ->
  current_match = S.startup_matchup(startup)
  startup.status += current_match * C.development_factor * startup.team_fit * 0.1
  return startup

S.burn_startup = (startup) ->
  burn_fraction = startup.burn_rate/5
  profit = startup.status - 5
  profit *= burn_fraction
  startup.cash += profit
  return startup

S.startup_unit_test = () ->
  startup = S.generate_startup()
  console.log('startup is ',startup)
  match = S.startup_matchup(startup)
  console.log('success is ',match)
  startup = S.develop_startup(startup)
  console.log('startup developed into ',startup)
  startup = S.burn_startup(startup)
  console.log('startup burned ',startup)

window.S = S




