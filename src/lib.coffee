L = {}
L.random_int = (range) -> Math.floor(Math.random() * (range + 1))
L.sector_values = (list) ->
  ret = {}
  for industry in list
    ret[industry]= L.random_int(10)
  return ret
L.weather_impact = (industry) ->
  return 1 if industry is C.all_industries[0] or industry is C.all_industries[2]
  return -1 if industry is C.all_industries[1] or industry is C.all_industries[3]
L.home_popularity_impact = (industry,popularity_value) ->
  return popularity_value if industry is C.all_industries[0]
  return 0
L.world_popularity_impact = (industry,popularity_value) ->
  return popularity_value if industry is C.all_industries[3] or industry is C.all_industries[2]
  return 0
L.textify = (key, value) ->
	while db.texts[key][value] == ""
		value++
	return db.texts[key][value]

L.industries_parameters_to_string = () ->
  str = ""
  for industry, values of C.industries_parameters
    str+=industry
    str+=" [ "
    for skill, value of values
      str+=" "
      str+=skill
      str+=" : "
      str+=value
      str+=" "
    str+=" ] "
    str+="\n"
  return str

L.generate_random_team_member_name = () ->
  first_i = L.random_int(123)
  last_i = L.random_int(123)
  while (last_i == first_i)
    last_i = L.random_int(123)
  return db.first_names[first_i] + " " + db.last_names[last_i]
  
L.generate_random_slogan = () ->
  first_i = L.random_int(16)
  last_i = L.random_int(237)
  surroundings_i = L.random_int(11)
  return  db.slogan_parts.surroundings[surroundings_i][0] + " " + db.slogan_parts.first[first_i] +  " " + db.slogan_parts.surroundings[surroundings_i][1] + " " + db.slogan_parts.last[last_i]

window.L = L
