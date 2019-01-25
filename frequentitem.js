/* exported freq */
/* eslint-env browser*/
/* eslint no-console:0*/


function freq(arr){
    var arr1 =arr;
var mf = 1;
var m = 0;
var item;

for (var i = 0; i < arr1.length; i++) {
  for (var j = i; j < arr1.length; j++) {
    if (arr1[i] == arr1[j]) m++;
    if (mf < m) {
      mf = m;
      item = arr1[i];
    }
  }

  m = 0;
}

return item+" "+mf;
    
    
    
    
}