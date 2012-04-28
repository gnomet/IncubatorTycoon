random_team = (max_members =3) ->
  i = 0
  max_members = random_int(max_members)
  while i < max_members
    i++
    L.sector_values(C.all_skills)

generate_startup = () ->
  ret =
    team_fit: random_int(10)
    team: random_team()
    business_cost: random_int(10)
    burn_rate: random_int(10) * C.burn_basis
    cash: random_int(5) * C.cash_basis
  industries =
    agriculture:
      technical: 4
      marketing: 4
      finance: 2
    hardware:
      technical: 6
      marketing: 3
      finance: 1
    health:
      technical: 1
      marketing: 3
      finance: 5
    buzzwords:
      technical: 1
      marketing: 8
      finance: 1
  industry = C.all_industries[random_int(C.all_industries.length-1)]
  ret.project_requirements = industries[ industry ]

  ret.status = startup_matchup(ret) * C.starting_match_bias
  ret.status -= L.random_int(C.possible_starting_deficit)

  return ret


startup_matchup = (startup) ->
  team_skills = {}
  for member in startup.team
    for skill, level of member
      team_skills[skill] ?= 0
      team_skills[skill] += level

  match = 0
  for skill, importance in startup.project_requirements
    match += importance * 0.1 * team_skills[skill]

  return match

develop_startup = (startup) ->
  current_match = startup_matchup(startup)
  startup.status += current_match * C.development_factor * startup.team_fit * 0.1
  return startup

burn_startup = (startup) ->
  burn_fraction = startup.burn_rate/5
  profit = startup.status - 5
  profit *= burn_fraction
  startup.cash += profit
  return startup







