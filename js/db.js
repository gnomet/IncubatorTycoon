var db = {	
	"cities": [
        {
        	"name": "Santiago",
			"image": "santiago.jpg",
            "data": {
    			"weather": 8,
	    		"cost_of_living": 4,
		    	"business": {
			    	"agriculture": 4,
				    "health": 3,
    				"hardware": 6,
	    			"web": 7
		    	},
    			"universities": {
	    			"tech": 8,
		    		"marketing": 7,
			    	"finance": 6
			    }
		    }},{
		    "name": "San Fran",
				"image": "sanfrancisco.jpg",
            "data": {
    			"weather": 6,
	    		"cost_of_living": 8,
		    	"business": {
			    	"agriculture": 5,
				    "health": 6,
    				"hardware": 8,
	    			"web": 10
		    	},
			    "universities": {
				    "tech": 9,
    				"marketing": 8,
	    			"finance": 8
		    	}
		    }},{
            "name": "New York",
						"image": "newyork.jpg",
            "data": {
                "weather": 4,
                "cost_of_living": 9,
                "business": {
                    "agriculture": 2,
                    "health": 4,
                    "hardware": 7,
                    "web": 8
                },
                "universities": {
                    "tech": 7,
                    "marketing": 8,
                    "finance": 9
                }
            }},{
            "name": "Singapore",
			"image": "singapore.jpg",
            "data": {
                "weather": 9,
                "cost_of_living": 3,
                "business": {
                    "agriculture": 4,
                    "health": 7,
                    "hardware": 8,
                    "web": 7
                },
                "universities": {
                    "tech": 8,
                    "marketing": 9,
                    "finance": 7
                }
            }},{
            "name": "London",
						"image": "london.jpg",
            "data": {
                "weather": 1,
                "cost_of_living": 7,
                "business": {
                    "agriculture": 3,
                    "health": 8,
                    "hardware": 5,
                    "web": 7
                },
                "universities": {
                    "tech": 6,
                    "marketing": 8,
                    "finance": 8
                }
            }},{
            "name": "Sao Paulo",
						"image": "saopaulo.jpg",
            "data": {
                "weather": 9,
                "cost_of_living": 4,
                "business": {
                    "agriculture": 10,
                    "health": 4,
                    "hardware": 7,
                    "web": 6
                },
                "universities": {
                    "tech": 5,
                    "marketing": 8,
                    "finance": 6
                }
            }
	}],
	"event": {
	  "earthquake": {
	      "title": "Earthquake",
	      "description": "A strong earthquake is shaking your city! The damage caused to infrastructure is causing people to focus on rebuilding and there will be a probably decline in sales on all sectors.",
	      "choice": false
	  },
	  "weather": {
	      "title": "Weather has changed suddenly",
	      "description": "See positive_description and negative_description to pick the right one based on the direction of the weather change",
	      "positive_description": "Sun is shinign! The weather in your city has changed to significantly better direction. This will have a positive effect on agriculuture and health sector, but might lead to smaller sales in web and hardware sectors.",
	      "negative_description": "Bad news from the weather forecast. The weather in your city is going to change to worse direction and agriculture and healthcare will suffer from that. The rainy days might however increase the demand for web services, home electronics and other hardware.",
	      "choice": false
	  },
	  "audit": {
	      "title": "Government auditing your incubator",
	      "description": "No time to panic! (If your papers are in order.) The governemnt officials are doing a check to your company and seeing that their money is used correctly. Usually they are favouring bit more the traditional industries and buzzword reliant startups may be under stricter surveilance.",
	      "choice": false
	  },
	  "reimbursement": {
	      "title": "Delays in the reimbursement process",
	      "description": "The reimbursement process for startups has been delayd due the high peak in paper work. This can cause some trouble on startups running lean on thight budget, but things should return to normal pretty soon.",
	      "choice": false
	  },
	  "imports": {
	      "title": "Changes in import law",
	      "description": "Government is changing the policies regarding imported goods. Industries relying on imported goods will see an increase in their costs, but service sector should not be affected.",
	      "choice": false
	  },
	  "exit": {
	      "title": "1 billion exit done from your country",
	      "description": "A starup from your country just confirmed a billion dollar exit. Unfortunately not yet from your incubator, but this event got a lot of media attention worldwide and also will increase the interest towards your incubator and assist the marketing efforts of your incubated companies.",
	      "choice": false
	  },
	  "demo_day": {
  	      "title": "Demo Day",
  	      "description": "You organize a Demo Day to showcase your most prominent startups. This improves the reputation of your incubator and helps your startups to get feedback, learn and market their products.",
  	      "choice": true,
  	      "allow_string": "Yea let's do it and invite everyone! And spank our startups to do their best on stage.",
  	      "deny_string": "Uhh, sounds like a hassle to organize"
  	  },
  	  "richard_branson": {
  	      "title": "Invite Richard Branson to visit your incubator",
  	      "description": "Invite Sir Richard Branson to visity your incubator. Pay his expenses and mobilize your startup folks to do some guerilla marketing. This will surely have a positive effect on everything your incubator touches.",
  	      "choice": true,
  	      "allow_string": "Yeay, Branson's glory will save the day!",
  	      "deny_string": "Nah, he'll pay to visit us soon..."
  	  },
  	  "paul_graham": {
  	      "title": "Invite Paul Graham to give a talk in your incubator",
  	      "description": "Paul Graham could be interested to give a talk that would surely contribute to the technical skills and enthusiasm of your startups.",
  	      "choice": true,
  	      "allow_string": "Gimme Paul!",
  	      "deny_string": "I'll think I'll just tell the juniors a trick of two myself."
  	  },
  	  "promote_international": {
  	      "title": "Send one of your team to promote your incubator internationally",
  	      "description": "There's a big startup event coming overseas and sending someone to promote your incubator could increase your reputation a lot and possibly result in more and better applications in the future.",
  	      "choice": true,
  	      "allow_string": "Sure! Let our message be heard.",
  	      "deny_string": "The next billion dollar startup we're incubating will bring us all the reputation we need."
  	  },
  	  "promote_national": {
  	      "title": "Participate in a local event to promote your incubator",
  	      "description": "To get more applications from your country, you can send a promoter to upcoming event to increase your reputation in your home country.",
  	      "choice": true,
  	      "allow_string": "Yep, all publicity is good publicity.",
  	      "deny_string": "Not this time."
  	  },
  	  "simplify_reimbursement": {
  	      "title": "Simplify reimbursement process",
  	      "description": "The reimbursement process is currently quite bureaucratic, and simplifying it could save startups time to do more productive work.",
  	      "choice": true,
  	      "allow_string": "Hu, my process? Well, maybe there's slightly room for improvement.. ",
  	      "deny_string": "Nope, it will grow them up to fill a few papers."
  	  },
  	  "lecture_marketing": {
  	      "title": "Lecture in marketing",
  	      "description": "Organize a lecture with a marketing professional to teach some new stuff to your startups",
  	      "choice": true,
  	      "allow_string": "Sure",
  	      "deny_string": "No"
  	  },
  	  "lecture_technical": {
  	      "title": "Lecture about technology",
  	      "description": "This lecture has tips and trick especially for web startups, but helpful stuff for everyone's technical skills.",
  	      "choice": true,
  	      "allow_string": "Tech, yes",
  	      "deny_string": "Techno"
  	  },
  	  "lecture_finance": {
  	      "title": "Finances lecture",
  	      "description": "Get a finance professional teach your startups the essentials of keeping the finnances in order.",
  	      "choice": true,
  	      "allow_string": "Organize this",
  	      "deny_string": "No thanks"
  	  }
	},
	"texts": {
		"weather": {
			"10": "Weather is really good",
			"9": "",
			"8": "Weather is good",
			"7": "Weather is somewhat good",
			"6": "",
			"5": "Weather is average",
			"4": "Weather is somewhat bad",
			"3": "",
			"2": "Weather is bad",
			"1": "Weather is really bad",
			"0": ""
		},
		"universities_tech": {			
			"10": "Some of the world's most respected universities of technology are in the area.",
			"9": "",
			"8": "There is one very good university of technology in the area",
			"7": "",
			"6": "",
			"5": "There are some average unis of technology the area",
			"4": "",
			"3": "There are few unis of technology in the area",
			"2": "",
			"1": "",
			"0": "There's no universities of technology in the area."
		},
		"universities_finance": {			
			"10": "Some of the world's most respected universities of finance are in the area.",
			"9": "",
			"8": "There is one very good university of finance in the area",
			"7": "",
			"6": "",
			"5": "There are some average unis of finance the area",
			"4": "",
			"3": "There are few unis of finance in the area",
			"2": "",
			"1": "",
			"0": "There's no universities of finance in the area."
		},
		"universities_marketing": {			
			"10": "Some of the world's most respected universities of marketing are in the area.",
			"9": "",
			"8": "There is one very good university of marketing in the area",
			"7": "",
			"6": "",
			"5": "There are some average unis of marketing the area",
			"4": "",
			"3": "There are few unis of marketing in the area",
			"2": "",
			"1": "",
			"0": "There's no universities of marketing in the area."
		},
		"business_agriculture": {			
			"10": "Really good business in agriculture sector (including VCs & educated buyers)",
			"9": "",
			"8": "Really good business in agriculture",
			"7": "Some medium companies related to agriculture",
			"6": "",
			"5": "Some small companies related to agriculture",
			"4": "",
			"3": "Interest for development in agriculture sector (mostly imports)",
			"2": "",
			"1": "Market in agriculture is not yet existent",
			"0": ""
		},
		"business_health": {			
			"10": "Really good business in health sector (including VCs & educated buyers)",
			"9": "",
			"8": "Really good business in health sector",
			"7": "Some medium companies in health sector",
			"6": "",
			"5": "Some small companies in health sector",
			"4": "",
			"3": "Interest for development in health sector (mostly imports)",
			"2": "",
			"1": "Market in health sector is not yet existent",
			"0": ""
		},
		"business_hardware": {			
			"10": "Really good business in hardware sector (including VCs & educated buyers)",
			"9": "",
			"8": "Really good business in hardware sector",
			"7": "Some medium companies in hardware sector",
			"6": "",
			"5": "Some small companies in hardware sector",
			"4": "",
			"3": "Interest for development in hardware sector (mostly imports)",
			"2": "",
			"1": "Market in hardware sector is not yet existent",
			"0": ""
		},
		"business_web": {			
			"10": "Really good business in web industry (including VCs & educated buyers)",
			"9": "",
			"8": "Really good business in web industry",
			"7": "Some medium companies in web industry",
			"6": "",
			"5": "Some small companies in web industry",
			"4": "",
			"3": "Interest for development in web industry (mostly imports)",
			"2": "",
			"1": "Market in web industry is not yet existent",
			"0": ""
		},
		"popularity_worldwide": {						
			"10": "The incubator is one of best reputed in the world",
			"9": "",
			"8": "The incubator is pretty well known",
			"7": "",
			"6": "The incubator has been getting somewhat popular during past years",
			"5": "",
			"4": "The incubator is not world famous, but known here and there",
			"3": "The incubator is known locally and few neighboring countries",
			"2": "",
			"1": "The incubator has just started and is not yet known",
			"0": ""
		},
		"popularity_local": {		
			"10": "The incubator has become really big hit in the country, almost everybody has heard of it",
			"9": "",
			"8": "The incubator is among the best in the country",
			"7": "",
			"6": "The incubator is well known in the country",
			"5": "",
			"4": "The incubator is known here and there inside the country",
			"3": "",
			"2": "",
			"1": "The incubator has just started and is not yet known",
			"0": ""
		},
		"advisor_agriculture": {		
			"10": "One of the leading professionals in agriculture sector",
			"9": "Well known in agriculture sector",
			"8": "Somewhat known person in agriculture sector",
			"7": "Managing a local company in agriculture",
			"6": "Working in a company in agriculture",
			"5": "",
			"4": "Took some courses in agriculture",
			"3": "",
			"2": "Passionate (hobby) in agriculture",
			"1": "His grandfater was a farmer",
			"0": "No knowledge of agriculture"
		},
		"advisor_health": {		
			"10": "One of the leading professionals in health sector",
			"9": "Well known in health sector",
			"8": "Somewhat known person in health sector",
			"7": "Managing a local company in health",
			"6": "Working in health care",
			"5": "Has a Phd in medicine",
			"4": "Took some courses in medicine",
			"3": "",
			"2": "Passionate about herbal medicines",
			"1": "",
			"0": "No knowledge of health care sector"
		},
		"advisor_hardware": {		
			"10": "One of the leading professionals of hardware industry",
			"9": "Well known in hardware industry",
			"8": "Somewhat known person in hardware industry",
			"7": "Managing a manufacturing company",
			"6": "Working in a company in hardware industry",
			"5": "",
			"4": "Took some courses about hardware manufacturing",
			"3": "",
			"2": "Likes electrical engineering as a hobby",
			"1": "",
			"0": "No knowledge of hardware sector"
		},
		"advisor_web": {		
			"10": "One of the leading professionals in new web and media",
			"9": "Well known in web industry",
			"8": "Somewhat known person in web industry",
			"7": "Managing a local company in web industry ",
			"6": "Working in a company in web industry",
			"5": "Knows how to run a website and manage a server",
			"4": "Took some courses in web development",
			"3": "Writes a blog about his bonsai tree",
			"2": "Occasional web user and commenter in news sites",
			"1": "Knows how to use Google",
			"0": "Has never used internet, and never will."
		},
		"advisor_free_time": {	
			"10": "Completely devoting all his time to this startup",
			"9": "Much free time to devote to this startup, flexible work schedule",
			"8": "",
			"7": "Can support the startup quite often",
			"6": "",
			"5": "Split between his current job and this startup",
			"4": "",
			"3": "Some time to devote to advising",
			"2": "",
			"1": "Little time for advising",
			"0": "The entrepreneurs probably won't see this guy much"
		},
		"advisor_experience": {	
			"10": "Advisor has extensive experience with startups (is investing in many, has led some to IPOs)",
			"9": "Advisor has very good experience with startups (in investing in many)",
			"8": "Advisor has pretty good experience with startups (in investing in some)",
			"7": "Advisor has been in the startup coulture for quite a while (has some fails, and some successes)",
			"6": "",
			"5": "Advisor has some moderate experience with startups  (has some fails, currently leads a startup)",
			"4": "Advisor has small experience with startups (currently leads his startup)",
			"3": "",
			"2": "Advisor has small experience with startups (co-founded 1 startup in the past)",
			"1": "Advisor has really small experience with startups (co-founded 1 startup in the past, unsuccessful)",
			"0": "Advisor has no exp with startups"
		},
		"team_fit": {		
			"10": "The team has already started and exited a succesful company together",
			"9": "The team has worked together for years in same day job, before moving to startup world.",
			"8": "The team members are all long time friends and they have worked with their current project over 6 months together.",
			"7": "",
			"6": "The team met in college and they've known each other for few years and know their working habits based on study projects.",
			"5": "",
			"4": "Team is compiled from friends, colleagues and friends of friends quite recently.",
			"3": "The team has been gathered on a co-founder finding site quite recently.",
			"2": "",
			"1": "The team members have just joined forces to apply for this incubator.",
			"0": "The team members usually remember each other's first names"
		},
		"marketing_skills": {				
			"10": "They have been the marketing director of a big and succesful company",
			"9": "They have years of marketing experience in different companies",
			"8": "",
			"7": "They have good experience on marketing and sales",
			"6": "They have studied marketing as his major and has also work experience in the field",
			"5": "",
			"4": "They have been doing some marketing work among other tasks",
			"3": "",
			"2": "They have done some courses in marketing at college",
			"1": "",
			"0": "They don't have any knowledge in marketing"
		},
		"tech_skills": {				
			"10": "They have been a CTO of a multimillion dollar company",
			"9": "They have very strong work background in technical skills",
			"8": "They have participated in many open source projects in leading architect role",
			"7": "They're pretty experienced in technical field",
			"6": "",
			"5": "They have worked few years in technical field and studied that in college",
			"4": "They were studied software development in college",
			"3": "",
			"2": "They know how to code simple programs",
			"1": "",
			"0": "They don't know anything about technical things"
		},
		"finance_skills": {							
			"10": "They have lead the finances of a big company before switching to a startup.",
			"9": "They studied finances as their major and have worked over 10 years in the field",
			"8": "They studied finances as their major and have worked over 5 years in the field",
			"7": "They have strong financial skills and years of work experience in the field",
			"6": "",
			"5": "They have studied finances at college, and have some work experience in the field",
			"4": "They have studied finances at college, but don't have much work experience in the field.",
			"3": "They have worked as a secretary and also have handled some minor financial decision",
			"2": "",
			"1": "They have some interest in money, but usually ends up losing in any financial decisions",
			"0": "They have no financial skills at all"
		},
		"empty_template_for_copy_paste": {	
			"10": "",
			"9": "",
			"8": "",
			"7": "",
			"6": "",
			"5": "",
			"4": "",
			"3": "",
			"2": "",
			"1": "",
			"0": ""
		},
	},
	"first_names": ["Jeremy", "Suhail", "Abhinav", "Adam", "Alan", "Alejandra", "Alejandro", "Alex", "Alexandru", "Alexy", "Andres", "Andrew", "Anna", "Anne-Sophie", "Antti", "Ari", "Arik", "Ayan", "Ben", "Bernardo", "Bernardo", "Brian", "Camuel", "Carlos", "Carolina", "Charles", "Colin", "Cristian", "Cristina", "Daniel", "Daniel", "Danny", "David", "Dean", "Demian", "Denis", "Diego", "Dorothy", "Elizabeth", "Elsa", "Emily", "Fernando", "Frederico", "Gabriel", "Gabriela", "Gaston", "German", "Gert", "Gosia", "Grant", "Greg", "Gustavo", "Ian", "Jacklyn", "James", "Jared", "Jen", "Jennifer", "Jens", "Jeremy", "Johanna", "Jonny", "Joseph", "Josh", "Juan", "Kathryn", "Kevin", "Krista", "Kyran", "Langdon", "Liis", "Loo", "Luis", "Lydia", "Marijn", "Marisol", "Maria", "Mateusz", "Matthew", "Matias", "Mauro", "Michael", "Miguel", "Mihai", "Mitul", "Nayana", "Nicolas", "Nisar", "Olga", "Olivers", "Oscar", "Ozan", "Pablo", "Patrick", "Pedro", "Perla", "Pete", "Peter-Jan", "Ragnar", "Rebecca", "Robert", "Roberto", "Rosario", "Ryan", "Salvador", "Sam", "Sandaruwan", "Srinivasan", "Stephen", "Steve", "Sudharshan", "Tara", "Taylor", "Thiago", "Thomas", "Tim", "Tom", "Ture", "Tyler", "Vamshi", "Victor", "Wei", "Xuening", "Youssef"],
    "last_names": ["Einhorn", "Shaikh", "Sarangi", "Link", "Kind", "Negrete", "Matamala", "Hughson", "Palade", "Sudachen", "Arellano", "Cross", "Korolyuk", "Dutat", "Virolainen", "Shomair", "Meyer", "Barua", "Kaplan", "Joselevich", "Porto", "Bowers", "Gilyadov", "Contreras", "Rossi", "Van Norman", "Fain", "Wolleter", "Palacios", "Ponce", "Rojas", "Fein", "Cuadrado", "Fischer", "Renzulli", "Todirica", "Wawrzeniak", "Sanders", "Taylor", "Chang", "Toop", "Diaz", "Skwara", "Mazzotti", "Mejia", "Dussaillant", "Rimoldi", "Findel", "Lapsa-Malawska", "Devine", "Gage", "Veloso", "Ozsvald", "Giron", "Freedman", "Broad", "Peck", "Turliuk", "Kasemets", "Melul", "Molina", "Miller", "Darnell", "Stabback", "Francisco Apparcel", "Davies", "Kent", "Canellakis", "Dale", "Page", "Peetermann", "Wan Koe", "Loaiza", "Schueltken", "Berk", "Garcia", "Luz Hortal", "Phiong", "Gutierrez", "Trigo", "Malawska", "Green", "Torres", "Voica", "Jain", "Somaratna", "Palacios", "Shaikh", "Marchevska", "De Abreu", "Rodriguez", "Onay", "Buzio", "Kedziora", "Gray", "Ayora", "Field", "Celis", "Sass", "West", "Dombkowski", "Gluck", "Hernandez", "Lou", "de la Barrera", "O'Keefe", "Gunathilake", "Sep", "Hazeltine", "Hazeltine", "Smith", "Roberts", "Moore", "Cardoso", "Grandperrin", "Marzullo", "Bergstein", "Strange", "Ulrich", "Mokshagundam", "Pereira", "An", "Sun", "Chaker"],
	"slogan_parts": {
	    "first": ["Airbnb", "Google", "Skype", "LinkedIn", "Pandora", "Path", "Instagram", "Facebook", "Twitter", "Flickr", "Dropbox", "Yammer", "Quora", "Stackoverflow", "Twilio", "Klout", "Foursquare"],
	    "last": ["Monkeys", "Cats", "Hammers", "Cars","apples", "arms", "bananas", "bikes", "birds", "books", "clubs", "corns", "crayons", "crows", "crowns", "crowds", "desks", "dresss", "flags", "flowers", "games", "hills", "homes", "horns", "hoses", "jokes", "juices", "kites", "lakes", "maids", "masks", "mice", "mints", "meals", "meats", "moons", "mothers", "mornings", "names", "nests", "noses", "pears", "pens", "pencils", "plants", "rains", "rivers", "roads", "rocks", "rooms", "roses", "shapes", "shoes", "shops", "shows", "sinks", "snails", "snakes", "sodas", "sofas", "stars", "steps", "stews", "stoves", "straws", "strings", "summer", "swings", "tables", "tanks", "teams", "tents", "tests", "toes", "trees", "vests", "water", "wings", "winters", "balls", "bats", "beds", "books", "boys", "buns", "cans", "cakes", "caps", "cars", "cats", "cows", "cubs", "cups", "dads", "days", "dogs", "dolls", "fans", "feet", "girls", "guns", "halls", "hats", "jars", "maps", "moms", "pans", "pets", "pies", "pigs", "pots", "rats", "animals", "aunts", "baits", "balloons", "beans", "bedrooms", "boots", "breads", "bricks", "brothers", "camps", "chickens", "deers", "doctors", "downtowns", "drums", "eyes", "fights", "flesh", "frogs", "gooses", "your mother", "grapes", "hooks", "horses", "jails", "jam", "kisses", "kittens", "lights", "locks", "lunches", "lunchrooms", "meals", "notebooks", "owls", "pails", "parents", "parks", "plots", "rabbits", "Batmans", "seas", "sisters", "soaps", "songs", "sparks", "spaces", "spoons", "summers", "tigers", "toads", "towns", "trails", "tramps", "tricks", "trips", "uncles", "vases", "winters", "weeks", "wheels", "wishes", "yards", "zebras", "vans", "actors", "airplanes", "airports", "armies", "baseballs", "beef", "birthdays", "brushes", "bushes", "casts", "caves", "cherries", "cobwebs", "coils", "crackers", "dinner", "eggnog", "elbows", "faces", "firemen", "flavors", "gates", "gloves", "glues", "goldfishes", "geese", "grain", "hair", "haircuts", "hobbies", "holidays", "jellyfish", "ladybugs", "mailboxes", "numbers", "oatmeal", "pails", "pancakes", "pears", "pests", "popcorn", "quicksand", "quiet", "quilts", "rainstorms", "scarecrows", "scarfs", "streams", "streets", "sugars", "thrones", "toothpaste", "twigs", "volleyballs", "wrenches", "recycled product ideas", "Santiago sandwicherias", "Llamas", "Medialunas", "Reimbursements"],
	    "surroundings": [
	        ["It's", "of"],
	        ["It's", "of"],
	        ["It's", "of"],
	        ["It's", "of"],
	        ["It's", "of"],
	        ["It is", "for"],
	        ["It is", "for"],
	        ["It is", "for"],
	        ["It's like", "with"],
	        ["It's like", "with"],
	        ["It's like", "with"],
	        ["It's like", "without"],
	    ]
	}
	    
}