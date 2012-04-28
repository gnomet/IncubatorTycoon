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
