G = {}

G.state = {
  incubator: {}
  advisors: []
  startups: []
  startup_applications: []
  advisors_for_hire: []
  events_for_hire: []
  events_that_happened: []
}

G.propose_startups = () ->
  G.state.startup_applications = [S.generate_startup() for i in [0..10]]

G.add_startup = ( startup, cash) ->
  G.state.incubator.cash -= cash
  startup.cash += cash
  G.state.startups.append( startup )


G.trigger_event = ( event ) ->

window.G = G