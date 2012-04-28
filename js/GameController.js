var GameController = (function(){
    var self = {};


    self.start_game = function(){
        G.init_round();
        self.start_screen = $start_screen();
        self.manage_incubator = $manage_incubator();
        self.run_simulation = $run_simulation();
        self.results = $results();
        self.startup_details = $startup_details();
        self.agent_details = $agent_details();
        self.event = $event();
        $("#box_placement_area").append(self.start_screen);
    };

    self.replace_elem = function($elem){
        $("#box_placement_area").empty().append($elem);
    }

    self.pop_over = function($elem){
        $("#box_placement_area").append($elem);
        $elem.show();
        $("#greyout").fadeIn(100);
    }

    return self;
})();