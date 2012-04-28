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
			"10": "He has been the marketing director of a big and succesful company",
			"9": "He has years of marketing experience in different companies",
			"8": "",
			"7": "He has good experience on marketing and sales",
			"6": "He has studied marketing as his major and has also work experience in the field",
			"5": "",
			"4": "He has been doing some marketing work among other tasks",
			"3": "",
			"2": "He has done some courses in marketing at college",
			"1": "",
			"0": "He doesn't have any knowledge in marketing"
		},
		"tech_skills": {				
			"10": "He has been earlier a CTO of a multimillion dollar company",
			"9": "He has very strong work background in technical skills",
			"8": "He has participated in many open source projects in leading architect role",
			"7": "He's pretty experienced in technical field",
			"6": "",
			"5": "He has worked few years in technical field and studied that in college",
			"4": "He was studied software development in college",
			"3": "",
			"2": "He knows how to code simple programs",
			"1": "",
			"0": "He doesn't know anything about technical things"
		},
		"finance_skills": {							
			"10": "He has lead the finances of a big company before switching to a startup.",
			"9": "He studied finances as his major and has worked over 10 years in the field",
			"8": "He studied finances as his major and has worked over 5 years in the field",
			"7": "He has strong financial skills and years of work experience on the field",
			"6": "",
			"5": "He has studied finances at college, and has some work experience on the field",
			"4": "He has studied finances at college, but doesn't have much work experience in that.",
			"3": "He has worked as a secretary also handling some minor financial decision",
			"2": "",
			"1": "He has some interest to money, but usually ends up losing in any financial decisions",
			"0": "He has no financial skills at all"
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
	}
	
}