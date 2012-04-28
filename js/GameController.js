var GameController = (function(){
    var self = {};
    var $boxes = [];

    clear_screen = function(){
        for(var i = 0; i < boxes.length; i++){
            $boxes[i].destroy();
        }
    };

    self.start_game = function(){
        $("#box_placement_area").append($start_screen())
    };

    return self;
})();