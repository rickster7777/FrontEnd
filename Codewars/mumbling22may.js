/*
spread/rest operator:

It acts different in these 2 situations: 
1. when used behind the name of an object or an array, it acts takes all the elements and clones them into your new object or array.
which in your case all the props are passed to the Modal component. This can be useful when you want to add new object into 
your array without manipulating the first one, like updating state. 

2. when used in the end of a list of object/array-elements, like const {a,b, ...rest} = obj. now, you have a new obj/arr from the remaining 
elements except ones taken out like a, b.
*/


function myFunction() {

    let input = "abcd";
    len = input.length;

    for(let i=0; i < len; i++) {
        
    }

}