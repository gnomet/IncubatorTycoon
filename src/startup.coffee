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
  members = Math.max(1,L.random_int(max_members))
  while i < members
    team[i]=L.sector_values(C.all_skills)
    i++
  return team

S.generate_startup = () ->
  ret ={
    team: S.random_team()
    burn_rate: Math.max(1,L.random_int(10)) * C.burn_basis
    cash: L.random_int(10) * C.cash_basis
  }
  ret.team_fit = if ret.team.length > 1 then  L.random_int(10) else  0
  industry = C.all_industries[L.random_int(C.all_industries.length-1)]
  ret.industry = industry
  ret.name = "Richard Branson"
  ret.deficit = 0 - Math.max(1,L.random_int(C.possible_starting_deficit))
  ret.status = S.startup_matchup(ret) * C.starting_match_bias + ret.deficit
  ret.shares_min = L.random_int(10)
  ret.shares_max = 11 + L.random_int(40)
  ret.shares_bought = 0
  ret.shares_price = Math.max(1,L.random_int(5))*C.base_value
  ret.advisor = 0
  return ret

S.valuation = (startup) ->
  profit = startup.cash - startup.shares_price*100
  share_price_change =  profit/100
  startup.shares_price += share_price_change
  investment_value = startup.shares_bought*startup.shares_price
  return investment_value

S.compute_team_skills = (startup) ->
  team_skills = {}
  for skill in C.all_skills
    team_skills[skill] = 0
    for member in startup.team
      team_skills[skill] += member[skill]
    team_skills[skill] /= startup.team.length #normalize to team size
  return team_skills

S.startup_matchup = (startup) ->
  team_skills = S.compute_team_skills(startup)
  match = 0
  for skill, importance of C.industries_parameters[startup.industry]
    match += importance * team_skills[skill]
  return match

S.buy_shares = (incubator, startup, shares_number) ->
  tranzaction = shares_number*startup.shares_price
  incubator.cash -= tranzaction
  startup.cash +=tranzaction
  startup.shares_bought = shares_number

#S.develop_startup = (startup) ->
#  current_match = S.startup_matchup(startup)
#  startup.status += current_match * C.development_factor * startup.team_fit * 0.1
#  return startup

S.develop_startup = (startup) ->
  #members can learn from 1 another based on their team_fit and the global development factor
  #team_skills = S.compute_team_skills(startup)
  maxim_skill = {}
  for skill in C.all_skills
    maxim_skill[skill] = 0
    for member in startup.team
      maxim_skill[skill] = if member[skill]>maxim_skill[skill] then member[skill] else maxim_skill[skill]
  for member in startup.team
    for skill, level of member
      if member[skill] < maxim_skill[skill]
        member[skill] += startup.team_fit/10 * C.development_factor * Math.max(0,(maxim_skill[skill]-member[skill]))
  S.update_success(startup)
  return startup

S.update_success = (startup) ->
  startup.status = S.startup_matchup(startup) + startup.deficit

S.burn_startup = (startup, incubator) ->
  if startup.status > 0
    burn_fraction = startup.burn_rate/5
    profit = startup.status - 5
    profit *= burn_fraction
  else
    profit = -startup.burn_rate
  startup.cash += profit
  living_costs = startup.team.length*incubator.living_cost
  startup.cash -= living_costs
  return startup

S.to_string = (startup) ->
  str = ""
  for member in startup.team
    str+="[ "
    for skill, value of member
      str+=" "
      str+=skill
      str+=" : "
      str+=value
      str+=" "
    str+=" ] "
    str+="\n"
  str+='team_fit : '
  str+=startup.team_fit.toString()
  str+=' cash : '
  str+=startup.cash.toString()
  str+=' operation_cost : '
  str+=startup.burn_rate.toString()
  str+=' industry : '
  str+=startup.industry
  str+=' deficit : '
  str+=startup.deficit.toString()
  str+=' success : '
  str+=startup.status.toString()
  str+=' min_shares : '
  str+=startup.shares_min.toString()
  str+=' max_shares : '
  str+=startup.shares_max.toString()
  str+=' share price : '
  str+=startup.shares_price.toString()
  return str

S.unit_test = () ->
  incubator = I.generate_incubator()
  startup = S.generate_startup()
  console.log('startup is ', S.to_string(startup))
  #console.log('success is ',startup.status)
  startup = S.burn_startup(startup)
  console.log('startup burned ',S.to_string(startup))
  startup = S.develop_startup(startup)
  console.log('startup developed into ', S.to_string(startup))

S.progress_test = () ->
  startup = S.generate_startup()
  console.log('startup is initially', S.to_string(startup))
  for i in [1,2,3,4,5,6]
     startup = S.develop_startup(startup)
     startup = S.burn_startup(startup,incubator)
  console.log('startup is after 6 months', S.to_string(startup))

window.S = S




