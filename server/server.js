/**
 * Created by robertzzy on 07/07/16.
 */
// NODE
import http from 'http';
import path from 'path';

// EXPRESS
import express from 'express';
import favicon from 'serve-favicon';

// Profile dev or production
let publicPath = 'build';

let app = express();
let route = require('./router');

app.set('port', process.env.PORT || 3000);
app.use(express.static(publicPath));
//app.use(favicon(path.join(__dirname, '../assets/favicon.ico')));
//app.use(express.static('assets'));
app.use((req,res,next)=>{
	console.log(Date.now() + ": "+"Hit path=>" +req.path);
	next();
});
app.use(route);
http.createServer(app).listen(app.get('port'), () => {
	console.log('Express server listening on port ' + app.get('port'));
});

