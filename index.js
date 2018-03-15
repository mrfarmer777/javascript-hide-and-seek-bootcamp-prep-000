var getFirstSelector=function(selector){
 var selection =document.querySelector(selector);
 return selection;
};

var nestedTarget=function(){
  var kids =  document.querySelector('#nested .target');
  return kids;
  
};

var increaseRankBy=function(n){
  var lists = document.getElementsByClassName('ranked-list');
  for(var i=0;i<lists.length;i++){
    lists[i].innerHTML=parseInt(lists[i].innerHTML,10)+1;
  }
};

var deepestChild = function(){
  var noded = document.querySelector('#grand-node ')
  return noded;

  
}