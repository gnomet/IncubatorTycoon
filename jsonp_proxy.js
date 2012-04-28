/**
 * Created with PyCharm.
 * User: alex
 * Date: 4/28/12
 * Time: 3:12 PM
 * To change this template use File | Settings | File Templates.
 */
var http = require("http");
var url = require("url");

http.createServer( function( req, res) {
    res.writeHead(200, {"Content-Type": "text/jsonp"});

    var superrequest_url = req.url;
    var parsed_request = url.parse(superrequest_url, true);

    var parsed_url = parsed_request.query.url;
    var method = "GET";
    if ( parsed_request.query.method ) method = parsed_request.query.method;
    var request = http.request({
        hostname : url.parse(parsed_url).hostname,
        port: 80,
        path: url.parse(parsed_url).path,
        method: method
                               },
                               got_data);

    function got_data( forward_request ) {
        var ret = {}
        ret.status = forward_request.statusCode;
        ret.headers = forward_request.headers;
        forward_request.setEncoding("utf8");
        ret.response = "";
        forward_request.on("data", append);
        function append(chunk) {
            ret.response += chunk;
        }
        forward_request.on("end", close_request)
        function close_request() {
            res.close(JSON.stringify(ret));
        }
    }

}).listen(1000, "127.0.0.1");