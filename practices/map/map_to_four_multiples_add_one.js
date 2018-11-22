'use strict';
var map_to_four_multiples_add_one = function(collection){
  
  return collection.map(a=>a*4+1)
  //return map(collection,timeFourPlusOne);
};

function timeFourPlusOne(element){
	return element*4+1
}

function map(collection, fn){
	var result=[];
  for(var i=0; i<collection.length; i++){
  	result[i] = fn(collection[i]);  	
  }
  return result;
}

module.exports = map_to_four_multiples_add_one;
