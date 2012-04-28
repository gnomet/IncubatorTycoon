//$(document).ready(function(){
function coffeescript_ready(){
    run();
}//);

function run(){
    load_mustache_templates();
    GameController.start_game();
}

function load_mustache_templates(){
    $("mustache").each(function(){
        ich.addTemplate($(this).attr("title"), $(this).html());
    });
}