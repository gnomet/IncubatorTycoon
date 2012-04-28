E = {}

"""
Environment object looks like {
team_fit,
skills {
skill_name
},
cash,
burn_rate,
status,
sectors {
 - Same structure as outside
}

All values are a delta applied equally to all startups

"""

apply_environment_to_startup = (environment, startup) ->
  if environment.team_fit? then startup.team_fit += environment.team_fit
  if environment.cash? then startup.cash += environment.cash
  if environment.burn_rate? then startup.burn_rate += environment.burn_rate
  if environment.status? then startup.status += environment.status
  if environment.skills?
    for skill, delta of environment.skills
      for member in startup.team
        member[skill] += delta

window.E = E