

game = {}

random_int = (range) -> Math.floor(Math.random() * (range + 1))

random_team = (max_members =3) ->
  i = 0
  max_members = random_int(max_members)
  while i < max_members
    i++
    {
      marketing: random_int(10)
      technical: random_int(10)
      finance: random_int(10)
    }

generate_startup = () ->
  ret =
    team_fit: random_int(10)
    team: random_team()
    business_cost: random_int(10)
  industries =
    agriculture:
      technical: 40
      marketing: 40
      finance: 20
    hardware:
      technical: 60
      marketing: 30
      finance: 10
    health:
      technical: 10
      marketing: 30
      finance: 50
    buzzwords:
      technical: 10
      marketing: 80
      finance: 10
  industry = ["agriculture", "hardware", "health", "buzzwords"][random_int(3)]
  ret.project_requirements = industries[ industry ]
  return ret

generate_advisor = () ->
  ret = {
    sector_knowledge:
      technical: random_int(10)
      marketing: random_int(10)
      finance: random_int(10)
    free_time: random_int(10)
    years_of_experience: random_int(10)
  }
  ret.salary = ((ret.sector_knowledge.technical + ret.sector_knowledge.marketing + ret.sector_knowledge.finance ) * 0.25) + ( ret.free_time * 0.35 ) + (ret.years_of_experience * 0.4 )
  ret.salary *= 20000
  return ret

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


console.log(propose_advisors())