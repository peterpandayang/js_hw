var fullname = 'John Doe';
var obj = {
   fullname: 'Colin Ihrig',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};
 
alert(obj.prop.getFullname());
 
var test = obj.prop.getFullname;
 
alert(test());

alert(test.call(obj.prop));