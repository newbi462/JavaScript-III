/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.  Window/Global Object Binding: the global scop or where you are running the code....
* 2.  Implicit Binding: The scope if what you are runing it in such as an object... (to the left of the ".")
* 3.  New binding: When you invoce a "new" operation using a funtion built on this.x operations
* 4.  Explicit Binding: When you define it using .call and so on... 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2
let testObj = {
  name: "testname",
  greet: function() { return 'hello my name is ' + this.name}
};
console.log(testObj.greet());

// code example for Implicit Binding

// Principle 3

// code example for New Binding
function MoreThings(diemtnions) {
  this.xsize = diemtnions.xsize;
  this.ysize = diemtnions.ysize;
  this.zsize = diemtnions.zsize;
}

const stuff = new MoreThings( {xsize: "2 inch", ysize: "5 inch", zsize: "3 inch"} );
console.log(stuff);


// Principle 4



// code example for Explicit Binding
x.constructor.call(inplaceofx);
