function mySelf(name1,name2){
    //way 1
   /* console.log(name1);
   console.log(name2); */
   
   //way 2
  /*  console.log(arguments[0]);
   console.log(arguments[1]); */



    //way 1
   //console.log(arguments.length)

   //way 2
    /* var l = arguments.length;
    console.log(l); */

    //function details and output document.write() kore browser ee dakhte hobe
    //(callee) aita browser ee apnar full code ta dakha jabe.. bt tate obossoi (document.write) browser ee dakhar jonno
    console.log(arguments.callee);
    


}
mySelf("hellow",'world');