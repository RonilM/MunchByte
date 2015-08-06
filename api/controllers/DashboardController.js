/**
 * DashboardController
 *
 * @description :: Server-side logic for managing Dashboards
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	 DashboardHome: function(req, res){

	 	return res.view('Dashboard/DashboardHome')

	 }
};

