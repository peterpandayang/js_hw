/*==========================================================================================
    More example about passing by value or reference

    By: Haochuan <haochuan.liu@gmail.com>
    
    Some notes: 

    Primitive type (string, number, etc.) are passed by value and objects are passed by reference. 
    If you change a property of the passed object, the change will be affected. 
    However, you assign a new object to the passed object, the changes will not be reflected.

=                                     Example code starts                                 =
==========================================================================================*/
var num = 10,
    name = "alice",
    object1 = {
      value: "first value"
    },
    object2 = {
     value: "second value"
    },
    object3 = object2;
 
function change(num, name, object1, object2) {
    num = num * 10;
    name = "bob";
    object1 = object2;
    object2.value = "new value";
}
 
change(num, name, object1, object2);
 
console.log(num); // 10
console.log(name);// "alice"
console.log(object1.value);//"first value"
console.log(object2.value);//"new value"
console.log(object3.value);//"new value"   


/*-----  Example code ends  ------*/