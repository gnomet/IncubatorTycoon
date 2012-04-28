$(document).ready(function(){
    run();
});

function run(){
    load_mustache_templates();
}

function load_mustache_templates(){
    $("mustache").each(function(){
        ich.addTemplate($(this).attr("title"), $(this).html());
    });
}