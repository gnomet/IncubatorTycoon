var GameController = (function(){
    var self = {};
    var $boxes = [];

    clear_screen = function(){
        for(var i = 0; i < boxes.length; i++){
            $boxes[i].destroy();
        }
    };

    self.start_game = function(){
        self.start_screen = $start_screen();
        self.manage_incubator = $manage_incubator();
        self.run_simulation = $run_simulation();
        self.results = $results();
        self.startup_details = $startup_details();
        self.agent_details = $agent_details();
        self.event = $event();
        $("#box_placement_area").append(self.start_screen);
    };



    return self;
})();