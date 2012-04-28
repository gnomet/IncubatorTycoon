L = {}
L.random_int = (range) -> Math.floor(Math.random() * (range + 1))
L.sector_values = (list) ->
  ret = {}
  for industry in list
    ret[industry]=random_int(10)
  return ret
L.weather_impact = (industry) ->
  return -1 if industry is C.all_industries[0] or industry is C.all_industries[2]
  return 1 if industry is C.all_industries[1] or industry is C.all_industries[3]
L.home_popularity_impact = (industry,popularity_value) ->
  return popularity_value if industry is C.all_industries[0]
  return 0
L.world_popularity_impact = (industry,popularity_value) ->
  return popularity_value if industry is C.all_industries[3] or industry is C.all_industries[2]
  return 0
window.L = L