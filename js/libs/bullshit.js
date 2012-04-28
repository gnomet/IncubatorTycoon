
// Code copied from emptybottle.org/bullshit/index.php

var array1 = new Array("aggregate", "beta-test", "integrate", "capture", "create", "design", "disintermediate", "enable", "integrate", "post", "remix", "reinvent", "share", "syndicate", "tag", "incentivize", "engage", "reinvent", "harness", "integrate");
var array2 = new Array("AJAX-enabled","A-list","authentic","citizen-media","Cluetrain","data-driven","dynamic","embedded","long-tail","peer-to-peer","podcasting","rss-capable","semantic","social","standards-compliant","user-centred","user-contributed","viral","blogging","rich-client");
var array3 = new Array("APIs","blogospheres","communities","ecologies","feeds","folksonomies","life-hacks","mashups","network effects","networking","platforms","podcasts","value","web services","weblogs","widgets","wikis","synergies","ad delivery","tagclouds");
function getBullshit(){

    var index1 = Math.round(Math.random() * array1.length);
    var index2 = Math.round(Math.random() * array2.length);
    var index3 = Math.round(Math.random() * array3.length);
    return array1[index1] + " " + array2[index2] + " " + array3[index3];

}

// Code copied from http://www.dotomator.com/web20.html

function getName() {
    var partA = new Array( "Babble", "Buzz", "Blog", "Blue", "Brain", "Bright", "Browse", "Bubble", "Chat", "Chatter", "Dab", "Dazzle", "Dev", "Digi", "Edge", "Feed", "Five", "Flash", "Flip", "Gab", "Giga", "Inno", "Jabber", "Jax", "Jet", "Jump", "Link", "Live", "My", "N", "Photo", "Pod", "Real", "Riff", "Shuffle", "Snap", "Skip", "Tag", "Tek", "Thought", "Top", "Topic", "Twitter", "Word", "You", "Zoom");
    var partB = new Array( "bean", "beat", "bird", "blab", "box", "bridge", "bug", "buzz", "cast", "cat", "chat", "club", "cube", "dog", "drive", "feed", "fire", "fish", "fly", "ify", "jam", "links", "list", "lounge", "mix", "nation", "opia", "pad", "path", "pedia", "point", "pulse", "set", "space", "span", "share", "shots", "sphere", "spot", "storm", "ster", "tag", "tags", "tube", "tune", "type", "verse", "vine", "ware", "wire", "works", "XS", "Z", "zone", "zoom" );
// these are not complete words:
    var partC = new Array( "Ai", "Aba", "Agi", "Ava", "Cami", "Centi", "Cogi", "Demi", "Diva", "Dyna", "Ea", "Ei", "Fa", "Ge", "Ja", "I", "Ka", "Kay", "Ki", "Kwi", "La", "Lee", "Mee", "Mi", "Mu", "My", "Oo", "O", "Oyo", "Pixo", "Pla", "Qua", "Qui", "Roo", "Rhy", "Ska", "Sky", "Ski", "Ta", "Tri", "Twi", "Tru", "Vi", "Voo", "Wiki", "Ya", "Yaki", "Yo", "Za", "Zoo" );
    var partD = new Array( "ba", "ble", "boo", "box", "cero", "deo", "del", "do", "doo", "gen", "jo", "lane", "lia", "lith", "loo", "lium", "mba", "mbee", "mbo", "mbu", "mia", "mm", "nder", "ndo", "ndu", "noodle", "nix", "nte", "nti", "nu", "nyx", "pe", "re", "ta", "tri", "tz", "va", "vee", "veo", "vu", "xo", "yo", "zz", "zzy", "zio", "zu");
    var rand = roll(2);
    var A = new String();
    var B = new String();
    if (rand == 0) {
        A = partA[ roll(partA.length) ];
        B = partB[ roll(partB.length) ];
    } else {
        A = partC[ roll(partC.length) ];
        B = partD[ roll(partD.length) ];
    }
    var name = A + B;
    function roll(num) {
        return Math.floor(Math.random() * num );
    }

}

function getSlogan( keyword, cb ) {
    var api = L.random_int(1);
    if (true ) {
        var req_string = "http://jsonpify.com/api?url=";
        req_string += encodeURIComponent("http://www.sloganizer.net/en/ajax.php?id=1335636161-73a77b9b99fd448f6c21303ecd490860&slogan="+keyword)
        var parseOutput = function( stuff ) {
            console.log(stuff)
            var parse = $(stuff)
            cb(parse.find("b").html())

        };
        console.log(req_string);
        $.ajax(req_string,{
            dataType:"jsonp",
            jsonpCallback:parseOutput
        });


    }

}