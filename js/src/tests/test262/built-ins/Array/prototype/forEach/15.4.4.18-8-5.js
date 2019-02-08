// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.18-8-5
description: >
    Array.prototype.forEach doesn't call callbackfn if 'length' is 0
    (subclassed Array, length overridden to '0' (type conversion))
---*/

  foo.prototype = new Array(1, 2, 3);
  function foo() {}
  var f = new foo();
  f.length = '0';
  
  var callCnt = 0;
  function cb(){callCnt++}
  var i = f.forEach(cb);  

assert.sameValue(callCnt, 0, 'callCnt');

reportCompare(0, 0);