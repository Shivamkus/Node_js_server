const http = require('http');
const port = 5500;
const fs = require('fs');



function requestHendler(req, res){
    console.log(req.url);
    res.writeHead(200 ,{'contant-type':'text/html'});

    // fs.readFile('./index.html' ,function(err , data){
    //     if(err){
    //         console.log('error' , err);
    //         return res.end('<h1>Error</h1>');
    //     }
    //     return res.end(data);
    // });
    // res.end('<h1>Gotcha !</h1>');


    switch(req.url){
        case '/home':
        filePath = './index.html'
        break;
        case '/':
        filePath = './index.html'
        break;
        case '/profile':
            filePath = './profile.html'
            break;
            default:
                filePath = './404.html'
    }
    fs.readFile(filePath, function(err, data){
        if(err){
            console.log("error", err);
            return res.end('<h1>Error</h1>')
        }
        return res.end(data);
    });
    }

const sever = http.createServer(requestHendler);



sever.listen(port, function (err){
if(err){
    console.log(err);
    return;
}
console.log("server is running on port", port)
});
