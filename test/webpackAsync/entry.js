
var util_sync = require('./util-sync');
var common_util_sync = require('./common-util-sync');

console.log(util_sync.data);
console.log(common_util_sync.data);

document.querySelector('#aBtn').onclick = () => {
    require.ensure(["./dep"], function(){
        var awork = require('./workA-async');
        var dep = require('./dep');
        console.log(awork.data);
        console.log(dep.data);
    });
};

document.querySelector("#bBtn").onclick = () => {
    require.ensure([], function(){
        var bwork = require('./workB-async');
        console.log(bwork.data);
    });
};