'use strict';

function grouping_count(collection) {
	/*var tmp = [];
	var tmpCount =[]; 
	var result={};
	for(var i=0; i<collection.length;i++){
		if(!tmp.includes(collection[i])){
			tmp.push(collection[i]);
		}
	}
	for(var i=0; i<tmp.length;i++){
		tmpCount[i] = 0;
		for(var j=0; j<collection.length; j++){
			if(tmp[i]==collection[j]){
				tmpCount[i]+=1;
			}
		}
	}
	for(var i=0; i<tmp.length;i++){
		var string = tmp[i]+''
		result[string] = tmpCount[i];
	}*/
	//return result;
  //implement here
  
  /*var myTmp ={}
  collection.filter(a=>{
  	var string = a+'';
  	myTmp[a] =0;

  });
  collection.filter(a=>{
  	var string = a+'';
  	myTmp[a] +=1;

  });
  return myTmp*/
  var result={};
  collection.filter((element, index)=>collection.indexOf(element)===index).map(element=>{
  	result[element] = collection.filter(y=>element==y).length
  });
  return result;


}

module.exports = grouping_count;
