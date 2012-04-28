"""
Startup = {
  team_fit : 1-10
  team : [
    {
      technical: 1-10,
      marketing: 1-10,
      finance: 1-10
    },
    {  ... }
  ],
  burn_rate: $Some amount
  cash: $some amount
  industry: "at the moment, agriculture health tech or buzzwords"
  project_requirements: { // These sum to 10
     technical: 1-10
    marketing: 1-10
    finance: 1-10
  },
  status: a number.  Currently represents cashflow as related to expenses, each 1 point equals 20% of burn_rate in income,
          can be negative, meaning they are burning more than burn_rate
}

"""

S={}

S.random_team = (max_members =3) ->
  i = 0
  team = []
  max_members = L.random_int(max_members)
  while i < max_members
    team[i]=L.sector_values(C.all_skills)
    i++
  return team

S.generate_startup = () ->
  ret =
    team_fit: L.random_int(10)
    team: S.random_team()
    burn_rate: L.random_int(10) * C.burn_basis
    cash: L.random_int(10) * C.cash_basis
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

S.compute_team_skills = (startup) ->
  team_skills = {}
  for member in startup.team
    for skill, level of member
      team_skills[skill] ?= 0
      team_skills[skill] += level
  for skill, level of team_skills
    team_skills[level] /= startup.team.length #normalize to team size
  return team_skills

S.startup_matchup = (startup) ->
  team_skills = S.compute_team_skills(startup)
  match = 0
  for skill, importance in startup.project_requirements
    match += importance * team_skills[skill]
  return match

#S.develop_startup = (startup) ->
#  current_match = S.startup_matchup(startup)
#  startup.status += current_match * C.development_factor * startup.team_fit * 0.1
#  return startup

S.develop_startup = (startup) ->
  #members can learn from 1 another based on their team_fit and the global development factor
  team_skills = S.compute_team_skills(startup)
  for member in startup.team
    for skill, level of member
      if member[skill] < team_skills[skill] then
        member[skill] += startup.team_fit/10 * C.development_factor * Math.max(0,(team_skills[skill]-member[skill]))
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




