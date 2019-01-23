/* exported generate */
/* eslint-env browser*/
/* eslint no-console:0*/

function generate(a,b) {
    var arr = new Array();
    arr[0]=a;
    var c= a+1;
    for(var i=1;i<b-a;i++){
        arr[i]=c;
        c++;
    }
    arr[i]=b;
    return arr;
}