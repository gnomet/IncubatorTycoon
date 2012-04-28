G = {}

G.incubator = {}
G.advisors = []
G.startups = []
G.startup_applications = []
G.advisors_for_hire = []
G.events_for_hire = []
G.events_that_happened = []
G.accepting_applications = true

G.init_round = (incubator) ->
  if not G.incubator
    G.incubator = incubator
  G.accepting_applications = true
  G.get_applications(7)
  G.accepting_applications = false
  G.get_advisors()

G.get_applications = (count) ->
  G.startup_applications = [S.generate_startup() for i in [0..count]]

G.get_advisors = () ->
  G.advisors_for_hire = [A.generate_advisor() for i in [0..L.random_int(5)]]

G.get_possible_events = () ->
  G.events_for_hire = []
  for event in C.events
    if C.events_costs[event]<= G.incubator.cash
      G.events_for_hire.push(event)

G.add_startup = (startup, cash) ->
  amount_shares = Math.floor(cash/startup.shares_price)
  S.buy_shares(startup, G.incubator, amount_shares)
  G.startups.push( startup )

G.hire_advisor = (advisor) ->
  G.advisors.push(advisor)

G.fire_advisor = (index) ->
  startup_no = G.advisors[index].startup
  if startup_no != -1 #unlink from startup
    G.startups[startup_no].advisor = -1
  G.advisors.pop(index)

G.assign_advisor = (advisor_index, startup_index) ->
  startup = G.startup[startup_index]
  if startup.advisor != -1 #replace advisor
    current_advisor_no = startup.advisor
    G.advisors[current_advisor_no].startup = -1
  startup.advisor = advisor_index
  advisor = G.advisor[advisor_index]
  if advisor.startup != -1 #replace startup
    current_startup_no = advisor.startup
    G.startups[current_startup_no].advisor = -1
  advisor.startup = startup_index

G.pay_advisors = () ->
  i = 0
  while i < G.advisors.length
    if G.incubator.cash >= G.advisors[i].salary
      G.incubator.cash -= G.advisors[i].salary
      i +=1
    else
      G.fire_advisor(i)


G.next_month = () ->

  natural_disaster = E.select_natural_disaster()
  E.disaster_occurs(natural_disaster, G.incubator)
  G.pay_advisors() #see which advisers you could pay for the month that passed
  for startup in G.startups
    S.update_success(startup)
    if startup.advisor != -1
      #let's see if we have advisor
      startup.success += A.compute_advisor_influence(G.advisors[startup.advisor], startup)
    #add the influence of the incubator
    startup.success += I.compute_incubator_influence(G.incubator, startup)
    S.burn_startup(startup) #compute profits
    S.develop_startup(startup) #update skills
  G.get_advisors()


  # Startups learn

  # Startups love
  # Startups grow
  # events happen
  disaster = E.select_natural_disaster()
  if disaster?
    G.incubator = E.disaster_occurs(disaster)

G.trigger_event = (event) ->
  E.buy_event(event, G.incubator, G.startups)
  G.events_that_happened.push(event)

window.G = G

coffeescript_ready() # because this is the last js file