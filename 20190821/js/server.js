const http=require('http');
const url=require('url');
const qs=require('querystring');

http.createServer((req,res)=>{
    res.writeHead(200,{
        "Access-Control-Allow-Origin":"*"
    });
    if(req.method=="GET"){
        req.query=url.parse(req.url,true).query;
        var {uname,upwd}=req.query;
        if(uname=="dingding" && upwd=="123456"){
            res.write(JSON.stringify({code:1}))
        }else{
            res.write(JSON.stringify({code:0})) 
        }
        res.end();
    }else{
        var body="";
        req.on('data',function(chunk){
            body+=chunk;
        });
        req.on('end',function(){
            req.body=qs.parse(body);
            var {uname,upwd}=req.body;
            if(uname=="dingding" && upwd=="123456"){
                res.write(JSON.stringify({code:1}))
            }else{
                res.write(JSON.stringify({code:0}))
            }
            res.end()
        })
    } 
}).listen(3000)