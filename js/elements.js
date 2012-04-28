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
            console.log(city);
            var $city = ich.city(city);
            $city.bind("click", function(){
                var $description = ich.city_description(city);
                $description.find("#select_city").bind("click", function(){
                    $elem.hide();
                    $manage_incubator.trigger("new_season");
                });
                console.log($elem);
                $elem.find(".city_details").html($description.html());
            });
            $elem.find(".cities").append($city);

        });
    }
}

