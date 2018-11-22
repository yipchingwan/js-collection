'use strict';

function choose_multiples_of_three(collection) {

  //implement here
  /*var result = [];
  for(var i=0; i<collection.length;i++){
  	if(collection[i]%3===0){
  		result.push(collection[i]);
  	}
  }*/
  
  return collection.filter(a=>a%3===0)
}

module.exports = choose_multiples_of_three;
