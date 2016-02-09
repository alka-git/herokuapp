var Controller 		= require('../controllers/controller');


module.exports 		= function(app,router){

		// check through requests ------------------------------------
		router.use(function(req, res, next) {

			// Website you wish to allow to connect
		    //res.setHeader('Access-Control-Allow-Origin', 'https://ui-designs.de');
		    res.setHeader('Access-Control-Allow-Origin', '*');

		    // Request methods you wish to allow
		    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

		    // Request headers you wish to allow
		    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

		    // Set to true if you need the website to include cookies in the requests sent
		    // to the API (e.g. in case you use sessions)
		    res.setHeader('Access-Control-Allow-Credentials', true);

			next();
	
		});


		// Profile route ----------------------------------------------
		router.route('/index').get(Controller.index);


	// Router prefix -------------------------------------------------
	app.use('/', router);

}