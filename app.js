
//const http = require("http");
// const { platform } = require("process");

// console.log("Platform:", os.platform());
// console.log("Architecture:", os.arch());
// console.log(os.userInfo());

// const Moses = os.platform();
// const adom = os.arch();

// console.log(adom);
// console.log(Moses);

const http = require("http");

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.end("This is the Home page");

    }else if(req.url === "/about"){
        res.end("This is the about page");
    
    }else if(req.url === "/contact"){
        res.end("This is moses contact");

    }else {
        res.end( "This page is not found");
    }

    });

    server.listen(5000, () => {
        console.log("server is running");
    });



