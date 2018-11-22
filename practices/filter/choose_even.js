'use strict';

function choose_even(collection) {
	/*var result = [];
  //implement here
  for(var i=0; i<collection.length; i++){
  	if(collection[i]%2===0){
  		result.push(collection[i]);
  	}
  }
  return result*/
  return collection.filter(element=>element%2===0);
}

module.exports = choose_even;
