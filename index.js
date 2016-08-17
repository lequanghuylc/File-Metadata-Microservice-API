var express= require("express");
var app = express();
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });

app.use("/", express.static(__dirname + "/public"));
app.post("/get-file-size", upload.single('foo'), function(req, res){
    res.writeHead(200, {'content-type': 'application/json'});
    res.end(JSON.stringify({
        "size": req.file.size
    }));
});

app.listen(8080);