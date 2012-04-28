function $box(dimensions){
    var self = {};
    var $elem = ich.box(dimensions);

    $elem.bind("resize", resize)

    return $elem;

    function resize(e, dimensions){
        $elem.css(dimensions);
    }

    function destroy(){
        $elem.remove();
    };
}

function $start_screen(){
    var self = {};
    var $elem = null;
    make_elem();
    return $elem;

    function make_elem(){
        $elem = ich.city_select(db.cities);

        $(db.cities).each(function(i, elem){
            var city = db.cities[i];
            //Set textual values for numerical data
            city.data.weather = L.textify("weather", city.data.weather)
            city.data.universities.tech = L.textify("universities_tech", city.data.universities.tech)
            city.data.universities.finance = L.textify("universities_finance", city.data.universities.finance)
            city.data.universities.marketing = L.textify("universities_marketing", city.data.universities.marketing)
            city.data.business.agriculture = L.textify("business_agriculture", city.data.business.agriculture)
            city.data.business.health = L.textify("business_health", city.data.business.health)
            city.data.business.hardware = L.textify("business_hardware", city.data.business.hardware)
            city.data.business.web = L.textify("business_web", city.data.business.web)
						
            var $city = ich.city(city);

            $city.bind("click", function(){
                var $description = ich.city_description(city);
                $elem.find(".city_details").html($description);
                $elem.find(".select_city").bind("click", function(){
                    $elem.hide();
                    GameController.manage_incubator.trigger("new_season");
                });

                return false;
            });
            $elem.find(".cities").append($city);

        });

    }
}

function $manage_incubator(){
    var self = {};

    make_elem();
    return $elem;

    function make_elem(){
        $elem = ich.manage_incubator();
        $elem.bind("new_season", new_season);
    }

    function new_season(){
        GameController.replace_elem($elem);
        //Get list of event types
        var events = [
            {
                selected: "selected",
                title: "Sup",
                tagline: "niggaz"
            },
            {
                title: "Sup",
                tagline: "niggaz"
            },
            {
                title: "Sup",
                tagline: "niggaz"
            }
        ];

        $(events).each(function(){
            var $li = ich.list_entry(this);
            $li.bind("click", function(){
                GameController.event.trigger("manual_event", this);
            });
            $elem.find(".event_list").append($li);
        });

        //Get list of startups
        var startups = {};

        //Get list of advisors
        var advisors = {};

    }




    function overlay_in_season(){

    }
}

function $run_simulation(){

    function run_simulation(){

    }

    function pause_simulation(){

    }

    function resume_simulation(){

    }
}

function $results(){
    var self = {};
    
    make_elem();
    return $elem;

    function make_elem(){
        $elem = ich.results();
        $elem.bind("show_results", show_results);
    }

    function show_results(){
        GameController.replace_elem($elem);
    }
}
function $startup_details(){

    function show_startup(){

    }
}
function $agent_details(){

    function show_agent(){

    }
}
function $event(){

    function manual_event(){

    }
}
