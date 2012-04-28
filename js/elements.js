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

        $(db.cities).each(function(){
            var city = this;
            var $city = ich.city(city);
            $city.bind("click", function(){
                var $description = ich.city_description(city);
                $description.find("#select_city").bind("click", function(){
                    $elem.hide();
                    $manage_incubator.trigger("new_season");
                });
                $elem.find(".city_description").html($description);
            });
            $elem.find(".cities").append($city);

        });
    }
}

