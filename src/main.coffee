






propose_advisors = (how_many=10) ->
  i = 0
  while i < how_many
    i++
    generate_advisor()

propose_startups = (how_many=10) ->
  i = 0
  while i < how_many
    i += 1
    generate_startup()
