E = {}

"""
Environment object looks like {
team_fit, *
skills {
skill_name *
},
cash, +
burn_rate, +
status, +
project_requirements {
 finance... *
}
sectors {
 - Same structure as outside
}

All values with a + are a delta applied equally to all startups
all values with a * are a multiplier

"""
E.select_natural_disaster = () ->
  selected = L.random_int(C.natural_disasters.length-1)
  happens = L.random_int(1)
  if happens > 0 #selected event happens
    return C.natural_disasters[selected]
  else
    return null

E.disaster_occurs = (disaster, incubator) ->
  if disaster is C.natural_disasters[0]
  #earthquake = -20% on all values in C.industries_parameters. i.e. market shrinks
    for industry,params of C.industries_parameters
      for key,value of params
        params[key] *= 0.8
  if disaster is C.natural_disasters[1]
  #weather = can change by +2 or -2
    change = L.random_int(1)
    if change > 0 #change to +2
      incubator.weather +=2
      incubator.weather = Math.min(incubator.weather,10)#limit the weather to 10
    else
      incubator.weather -=2
      incubator.weather = Math.max(incubator.weather,0)#limit the weather to 10
  if disaster is C.natural_disasters[2]
  #audit = influences:agriculture +0.1*value, health +0.1*value, web social -0.5*value
    industry = C.industries_parameters[C.all_industries[0]]
    for skill,value of industry
      industry[skill] *= 1.1
    industry = C.industries_parameters[C.all_industries[2]]
    for skill,value of industry
      industry[skill] *= 1.1
    industry = C.industries_parameters[C.all_industries[3]]
    for skill,value of industry
      industry[skill] *= 0.5
  if disaster is C.natural_disasters[3]
    #reimbursement delay = influences: web social -0.5*, hardware -0.5*
    industry = C.industries_parameters[C.all_industries[1]]
    for skill,value of industry
      industry[skill] *= 0.5
    industry = C.industries_parameters[C.all_industries[3]]
    for skill,value of industry
      industry[skill] *= 0.5
  if disaster is C.natural_disasters[4]
    #imports policy = influences: agriculture -0.5*, hardware badly -0.25*
    industry = C.industries_parameters[C.all_industries[0]]
    for skill,value of industry
      industry[skill] *= 0.5
    industry = C.industries_parameters[C.all_industries[1]]
    for skill,value of industry
      industry[skill] *= 0.75
  if disaster is C.natural_disasters[5]
    #successful exit of startup from this city = influences: all +20%
    for industry,params of C.industries_parameters
      for key,value of params
        params[key] *= 1.2

E.buy_event = (event, incubator, teams_list) ->
  #first, let's see if we have the money:
  if incubator.available_cash >= C.events_costs[event]
    incubator.available_cash -= C.events_costs[event]
    #oki, we paid for it, now let's see what it does
    if event is C.events[0]
      #demo day: influences all industries + 10%
      for industry in C.industries_parameters
        for key, value of industry
          value = 1.1*value
    if event is C.events[1]
      #richard branson visits & talks about marketing: influences all marketing skills + 20%
      for startup in teams_list
        for members in startup.team
          member[C.all_skills[0]] *= 1.2
          member[C.all_skills[0]] = Math.min(10,member[C.all_skills[0]]) #let's keep it within limits
    if event is C.events[2]
      #paul graham visits & talks about finance: influences all finance skills + 20%
      for startup in teams_list
        for members in startup.team
          member[C.all_skills[2]] *= 1.2
          member[C.all_skills[2]] = Math.min(10,member[C.all_skills[2]]) #let's keep it within limits
    if event is C.events[3]
      #international promoting: influences worldwide popularity of the incubator (+2)
      incubator.world_popularity += 2
      incubator.world_popularity = Math.min(10,incubator.world_popularity)
    if event is C.events[4]
      #national promoting: influences national popularity of the incubator (+2)
      incubator.national_popularity += 2
      incubator.national_popularity = Math.min(10,incubator.national_popularity)
    if event is C.events[5]
      #simplify reimbursement process: influences business costs -10%
      for startup in teams_list
        startup["burn_rate"] *= 0.9
    if event is C.events[6]
      #lecture on marketing: +1 to all marketing skills
      for startup in teams_list
        for members in startup.team
          member[C.all_skills[0]] += 1
          member[C.all_skills[0]] = Math.min(10,member[C.all_skills[0]]) #let's keep it within limits
    if event is C.events[7]
      #lecture on marketing: +1 to all marketing skills
      for startup in teams_list
        for members in startup.team
          member[C.all_skills[1]] += 1
          member[C.all_skills[1]] = Math.min(10,member[C.all_skills[1]]) #let's keep it within limits
    if event is C.events[8]
      #lecture on marketing: +1 to all marketing skills
      for startup in teams_list
        for members in startup.team
          member[C.all_skills[2]] += 1
          member[C.all_skills[2]] = Math.min(10,member[C.all_skills[2]]) #let's keep it within limits

E.unit_test_natural_disasters = () ->
  incubator = I.generate_incubator()
  teams_list = []
  for i in [1]
    sta = S.generate_startup()
    teams_list.push(sta)
  disaster = E.select_natural_disaster()
  #disaster = C.natural_disasters[1]
  if disaster is C.natural_disasters[1]
    console.log('incubator parameters before: ', incubator)
  else
    console.log('industries parameters before: ', C.industries_parameters)
  console.log('teams stats before')
  for startup in teams_list
    console.log(S.to_string(startup))
    infl = I.compute_incubator_influence(S.startup_matchup(startup),startup.industry,incubator)
    console.log('final status', startup.status+infl)
  console.log('disaster occuring: ', disaster)
  E.disaster_occurs(disaster, incubator)
  if disaster is C.natural_disasters[1]
    console.log('incubator parameters after: ', incubator)
  else
    console.log('industries parameters after: ', C.industries_parameters)
    for startup in teams_list
      S.update_success(startup)
  console.log('teams stats after')
  for startup in teams_list
    console.log(S.to_string(startup))
    infl = I.compute_incubator_influence(S.startup_matchup(startup),startup.industry,incubator)
    console.log('final status', startup.status+infl)

E.test = () ->
  incubator = I.generate_incubator()
  teams_list = []
  for i in [1]
    sta = S.generate_startup()
    teams_list.push(sta)
  event = C.events[0]
  #disaster = C.natural_disasters[1]
  console.log('incubator before: ', incubator)
  console.log('industries parameters before: ', C.industries_parameters)
  console.log('teams stats before')
  for startup in teams_list
    console.log(S.to_string(startup))
    infl = I.compute_incubator_influence(S.startup_matchup(startup),startup.industry,incubator)
    console.log('final status', startup.status+infl)
  console.log('event bought: ', event)
  E.buy_event(event, incubator, teams_list)
  console.log('incubator parameters after: ', incubator)
  console.log('industries parameters after: ', C.industries_parameters)
  for startup in teams_list
    S.update_success(startup)
  console.log('teams stats after')
  for startup in teams_list
    console.log(S.to_string(startup))
    infl = I.compute_incubator_influence(S.startup_matchup(startup),startup.industry,incubator)
    console.log('final status', startup.status+infl)


#E.apply_environment_to_startup = (environment, startup) ->
#  if environment.team_fit? then startup.team_fit *= environment.team_fit
#  if environment.cash? then startup.cash += environment.cash
#  if environment.burn_rate? then startup.burn_rate += environment.burn_rate
#  if environment.status? then startup.status += environment.status

#  if environment.skills?
#    for skill, delta of environment.skills
#      for member in startup.team
#        if member[skill]? then member[skill] C= delta
#  if environment[startup.sector]?
#    startup = E.apply_environment_to_startup(environment[startup.sector], startup)
#  return startup

# One such disaster
#E.reimbursement_riot =
#  team_fit: 1.1

#E.paul_graham =
#  technology:
#    project_requirements:
#      finance: 0.8



window.E = E