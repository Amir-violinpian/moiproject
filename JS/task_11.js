var array = [];

for(var i=1; i<100; i++);{
    array.push(i);
    if(i%3 ==0 || i%5==0){
    if(i%3 ==0)
    console.log("fizz");
    
     if (i%5 ==0)
    console.log("buzz");

    else if(i% 3 ==0 && i%5 ==0)
    console.log("FIZZBUZZ");
}else{
    
    console.log(i);
}
}