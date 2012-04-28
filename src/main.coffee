G = {}

G.incubator = {}
G.advisors = []
G.startups = []
G.startup_applications = []
G.advisors_for_hire = []
G.events_for_hire = []
G.events_that_happened = []

G.init = () ->
  i = 0
  for event in C.events
    G.events_for_hire.append(
      {
        event: event
        cost: C.events_costs[i]
      }
    )
    i++

  G.incubator = I.generate_incubator()
G.i = G.init
G.get_applications = (count) ->
  G.startup_applications = [S.generate_startup() for i in [0..count]]

G.add_startup = ( startup, cash) ->
  G.incubator.cash -= cash
  startup.cash += cash
  G.startups.append( startup )

G.next_month = () ->

G.trigger_event = ( event ) ->

window.G = G