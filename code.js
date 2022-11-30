//check prime Number program
let count=0;
let N=13;
for(let i=1;i<N;i++){
	if(N%i==0){
	count++;		
}if(count>0){
	console.log(count)
}else{
	console.log("no")	
}
}
//Palindrome problem 
let str="aba"
let bag=""
for(let i=0;i<str.length;i++){
	bag=bag+str[i]
}if(str==bag){
	console.log("Yes")
}else{
	console.log("No")
}