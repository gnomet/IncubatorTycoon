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
sectors {
 - Same structure as outside
}

All values with a + are a delta applied equally to all startups
all values with a * are a multiplier

"""

E.apply_environment_to_startup = (environment, startup) ->
  if environment.team_fit? then startup.team_fit *= environment.team_fit
  if environment.cash? then startup.cash += environment.cash
  if environment.burn_rate? then startup.burn_rate += environment.burn_rate
  if environment.status? then startup.status += environment.status
  if environment.skills?
    for skill, delta of environment.skills
      for member in startup.team
        if member[skill]? then member[skill] C= delta
  if environment[startup.sector]?
    startup = E.apply_environment_to_startup(environment[startup.sector], startup)
  return startup

# One such disaster
E.reimbursement_riot =
  team_fit: 1.1
  cash: -40000
  burn_rate: -1000
  status: -1.5
  skills:
    finance: 0.8



window.E = E