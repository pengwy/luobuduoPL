/**
 * Created by py on 2017/3/14.
 */
'use strict';
app.controller('comDetail',function (approvedStatus,industrytype,financingtype) {
    var vm =this
     vm.se={
        approved:approvedStatus.slice(1),
        financing:financingtype.slice(1),
        industry:industrytype.slice(1)

    };


    vm.company={
        approved:vm.se.approved[0],
        name:'',
        solgan:'',
        totalNum:'',
        financing:vm.se.financing[0],
        industry:vm.se.industry[0]
    }


});