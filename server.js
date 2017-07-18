var http = require("http");
var url =require("url");
var fs=require("fs");
var req=require("request");
var count=0;
http.createServer(function(request,res) {
  var date=new Date(Date.now());
  console.log("request recieved! "+request.method+" ; №"+(++count)+
  " ; NOW- "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds());
  var q=url.parse(request.url,true);
  console.log("path:  "+q.pathname); 
  if(q.query.q)
  {
    var item=q.query.q;
    console.log("q "+item);
  }
  var p="."+q.pathname;  
  
  if(p.match(".php$")){
    req.get("http://localhost/public-html/"+p+"?q="+q.query.q,function(error,responce,body){
      console.log("err- "+error);
      if(error==null)
      {
        console.log("200 redirected "+p);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(body);  
        return res.end();
      }
      else{
        console.log("503 redirected "+p);
        res.writeHead(503, {'Content-Type': 'text/html'});
        res.write("serv err!");  
        return res.end();
      }
  });
  }
  else 
  {
    if(p=="./"){
      p="./fff.html";
    }  
    fs.readFile(p,function(err,data){
      if(err){
        console.log("404 "+p);
        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end("404 Not Found");
      }  
      console.log("200 "+p);
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);  
      return res.end();
    });
  }
  }).listen(8080);
console.log("server runned!");