var GameController = (function(){
    var self = {};
    var $boxes = [];

    clear_screen = function(){
        for(var i = 0; i < boxes.length; i++){
            $boxes[i].destroy();
        }
    };


})();