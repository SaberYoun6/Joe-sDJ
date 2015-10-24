var http = require("http");

http.createServer(function (request, res) {
    var options = {
     host: 'https://api.soundcloud.com/tracks/228511715/related?client_id=ac514c95235cbaeb10a4d484d8e8734f',
     path: '/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
    };

    callback = function(response) {
            var str = '';

            //another chunk of data has been recieved, so append it to `str`
            response.on('data', function (chunk) {
            str += chunk;
        });

        //the whole response has been recieved, so we just print it out here
        response.on('end', function () {
            console.log(str);
        });
    }

    http.request(options, callback).end(); 
    
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(8081);

console.log("Running at 127.0.0.1:8081");
