// START: Load moduls ================================================
var express 			= require('express');
var http 				= require('http');
var cors 				= require('cors');
var bodyParser 			= require('body-parser');
// END: Load moduls ==================================================


// START: Config =====================================================
var CONFIG 				= require( __dirname + '/configs/config.js' );
// END: Config =======================================================



// START: App config =================================================
var app 				= module.exports = express();
var SERVER 				= http.createServer( app );

app.use( cors() );
app.use( bodyParser.urlencoded({ extended:true }) );
app.use( bodyParser.json() );
console.log(process.env.NODE_ENV);
if(process.env.NODE_ENV=="development")
	app.use(express.static('client'));
else
	app.use(express.static('dist'));
app.set( 'port', process.env.PORT || CONFIG.APP.PORT );
// END: App config ===================================================


// START: Load routes ================================================
var router 				= express.Router();
require(__dirname + '/routers/router.js')(app,router);
// END: Load routes ==================================================

// START: Starte server ==============================================
SERVER.listen( app.get('port'), function(){
	console.log('+-----------------------------------------------------+');
	console.log('|          Server is listening on port ' + app.get('port') + '           |');
	console.log('+-----------------------------------------------------+');
} );
// END: Starte server ================================================