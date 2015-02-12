module.exports = {
    /** Takes location and return static test data
     *  @param {number} location latitude 
     *  @param {number} location longitude
     *  @param {function} callback(routeGroups)
     *          function is called after data is retrieved
                routeGroups {array}: JSON of routes  
     */  
    getRouteGroups : function(latitude, longitude, callback) {
        var ROUTEGROUPS = [
            {direction: "Northbound",
             routes: [
                 {id: "1", number: "205", timer:"5"},
                {id: "2", number: "209", timer:"12"}
            ]},
            {direction: "Southbound",
            routes: [
                {id: "3", number: "209", timer:"11"},
                {id: "4", number: "205", timer:"2"}
            ]},
            {direction: "Westbound",
            routes: [
                {id: "5", number: "21", timer:"50"},
                {id: "6", number: "17", timer:"90"}
            ]},
            {direction: "Eastbound",
            routes: [
                {id: "7", number: "21", timer:"20"},
                {id: "8", number: "17", timer:"12"}
            ]}
        ];
        callback(ROUTEGROUPS);     
    }
}; 
