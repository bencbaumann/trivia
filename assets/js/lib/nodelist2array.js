'use strict'
module.exports = function (nodelist){
    let arr = [];
    for (var index = 0; index < nodelist.length; index++) {
        arr.push(nodelist[index]);
    }
    return arr;
}