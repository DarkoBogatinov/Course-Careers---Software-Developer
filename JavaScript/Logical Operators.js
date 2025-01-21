/*
&&
||
!
*/

let and = true && false;
console.log(and);

and = true || false;
console.log(and);

and = !false;
console.log(and);

/*
x y  &&  ||  !x
0 0   0   0   1
0 1   0   1   1
1 0   0   1   0
1 1   1   1   0
*/