var JSX = require('node-jsx').install(),
    React = require('react'),
    NextBusApp = require('./components/NextBusApp.react'),
    BusRoutes = require('./models/BusRoutes'); 

module.exports = { 
    /** Pulls data from model and passes to NextBusApp react component
      * for rendering
      */ 
    index: function(req, res) {
        BusRoutes.getRouteGroups(0, 0, function(routeGroups) {
            var markup = React.renderToString(
                NextBusApp({
                    routeGroups: routeGroups
                })
            );
            
            res.render('index', {
                body: markup
            }); 
        }); 
    }
}; 
