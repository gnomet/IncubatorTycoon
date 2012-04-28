C={}
C.base_value = 10000
C.all_industries = ["agriculture", "hardware", "health", "buzzwords"]
C.living_cost = 5* C.base_value
C.all_skills = ["marketing","technical","finance"]
C.influences = {
  incubator: 0.4
  advisor: 0.4
  events: 0.2
             }
C.starting_match_bias = 1
C.possible_starting_deficit = 7
C.development_factor = 0.2
C.burn_basis = 2* C.base_value
C.cash_basis = 10* C.base_value
C.advisor_basis_salary = 2* C.base_value
C.advisor = {
  total_knowledge: 0.25
  free_time:0.35
  years_of_experience: 0.4
}
window.C = C