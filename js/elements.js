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

    var $elem = ich.box();
    bind_elem();
    return $elem;

    function bind_elem(){
        $elem.find(".box_content").append(
            ich.city_select(db.cities)
        );

        $(db.cities).each(function(i, elem){
            var city = db.cities[i];
						city.data.weather = L.textify("weather", city.data.weather)
            console.log(city);
            var $city = ich.city(city);

            $city.bind("click", function(){
                var $description = ich.city_description(city);
                $elem.find(".city_details").html($description);
                $description.find(".select_city").bind("click", function(){
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

    var $elem = ich.box();
    bind_elem();
    return $elem;

    function bind_elem(){
        $elem.bind("new_season", new_season)
    }

    function new_season(){

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

    function show_results(){

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

    function show_event(){

    }
}
