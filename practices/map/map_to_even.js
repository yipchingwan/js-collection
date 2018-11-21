'use strict';
function map_to_even(collection){
  
  return map(collection, timeTwo);
}

function timeTwo(element){
	return element*2
}

function map(collection, fn){
	var result=[];
  for(var i=0; i<collection.length; i++){
  	result[i] = fn(collection[i]);  	
  }
  return result;
}
module.exports = map_to_even;
