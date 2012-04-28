G = {}

G.incubator = {}
G.advisors = []
G.startups = []
G.startup_applications = []
G.advisors_for_hire = []
G.events_for_hire = []
G.events_that_happened = []
G.accepting_applications = true
G.init = (incubator) ->
  G.incubator = incubator
  G.accepting_applications = true
  G.next_month()

get_applications = (count) ->
  G.startup_applications = [S.generate_startup() for i in [0..count]]

get_advisors = () ->
  G.advisors_for_hire = [A.generate_advisor() for i in [0..L.random_int(5)]]


G.add_startup = ( startup, cash) ->
  G.incubator.cash -= cash
  startup.cash += cash
  G.startups.append( startup )

G.next_month = () ->
  if G.accepting_applications
    G.accepting_applications = false
    get_applications(10)
  get_advisors()

  # Startups learn

  # Startups love
  # Startups grow
  # events happen
  disaster = E.select_natural_disaster()
  if disaster?
    G.incubator = E.disaster_occurs(disaster)

G.trigger_event = ( event ) ->
  E.buy_event(event, G.incubator, G.startups)

window.G = G

coffeescript_ready() # because this is the last js file