/**
 * Created by py on 2017/3/15.
 */
app.service('tt',function ($http) {

        this.getCom = function(params){
            return $http.get("/carrots-admin-ajax/a/company/search/",{params:params});
        };

})
