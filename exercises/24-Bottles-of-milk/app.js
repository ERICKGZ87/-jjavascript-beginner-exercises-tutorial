// Your code here:
function sing(){
    var mytext1='99 bottles of milk on the wall, 99 bottles of milk. Take one down and pass it around, 98 bottles of milk on the wall.'
    var mytext2='98 bottles of milk on the wall, 98 bottles of milk. Take one down and pass it around, 97 bottles of milk on the wall.'
    var mytext3='1 bottle of milk on the wall, 1 bottle of milk. Take one down and pass it around, no more bottles of milk on the wall.'  
    var mytext4='No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.'

    for (let i=1;i<=100;i++){
      
        var cancion=mytext1+' '+mytext2+' '+mytext3+' '+mytext4;
    console.log(cancion)
    }  
}
sing();

