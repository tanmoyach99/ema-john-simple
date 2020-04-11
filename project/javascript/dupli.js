var name=[1,2,2,3,3,3,4,49,9,9];
var dupli=[];
for(var i=0;i<name.length;i++){
    var element=name[i];
    var index=dupli.indexOf(element);
    if(index==-1){
        dupli.push(element); 
    }
}
console.log(dupli);