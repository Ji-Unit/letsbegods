(function() {
  'use strict';

  window._ = {};

  // Returns whatever value is passed as the argument. This function doesn't
  // seem very useful, but remember it--if a function needs to provide an
  // iterator when the user does not pass one in, this will be handy.
  _.identity = function(val) {
    return val;
  };

  /**
   * COLLECTIONS
   * ===========
   *
   * In this section, we'll have a look at functions that operate on collections
   * of values; in JavaScript, a 'collection' is something that can contain a
   * number of values--either an array or an object.
   *
   *
   * IMPORTANT NOTE!
   * ===========
   *
   * The .first function is implemented for you, to help guide you toward success
   * in your work on the following functions. Whenever you see a portion of the
   * assignment pre-completed, be sure to read and understand it fully before
   * you proceed. Skipping this step will lead to considerably more difficulty
   * implementing the sections you are responsible for.
   */

  // Return an array of the first n elements of an array. If n is undefined,
  // return just the first element.
  _.first = function(arr, n) {
    if(!arr.length) return null;
    if(n === undefined) {
      return arr[0];
    }
    return arr.slice(0,n);
  };

  // Like first, but for the last elements. If n is undefined, return just the
  // last element.
  _.last = function(arr, n) {
    if(!arr.length) return null;
    if(n === undefined) return arr[arr.length-1];
    if(!n) return [];
    if(n > arr.length) return arr;
    return arr.slice(arr.length-n, arr.length);

  };

  // Call iterator(value, key, collection) for each element of collection.
  // Accepts both arrays and objects.
  //
  // Note: _.each does not have a return value, but rather simply runs the
  // iterator function over each item in the input collection.
  _.each = function(collection, iterator) {
    if(Array.isArray(collection)) {
      for(let i = 0; i<collection.length; i++) {
        iterator(collection[i], i, collection);
      }
    }else if(typeof collection === 'object') {
      for(let key in collection) {
        iterator(collection[key],key,collection);
      }
    }
  };

  // Returns the index at which value can be found in the array, or -1 if value
  // is not present in the array.
  _.indexOf = function(array, target) {
    // TIP: Here's an example of a function that needs to iterate, which we've
    // implemented for you. Instead of using a standard `for` loop, though,
    // it uses the iteration helper `each`, which you will need to write.
    let index = -1;
    _.each(array, (item,i) => {
      if(item === target && index === -1) index = i;
    })
    return index;
  };

  // Return all elements of an array that pass a truth test.
  _.filter = function(collection, test) {
    const arr = [];
    _.each(collection, function(item) {
      if(test(item)) {
        arr.push(item);
      }
    });
    return arr;
  };

  // Return all elements of an array that don't pass a truth test.
  _.reject = function(collection, test) {
    // TIP: see if you can re-use _.filter() here, without simply
    // copying code in and modifying it
    return _.filter(collection, (item) => !test(item))
  };

  // Produce a duplicate-free version of the array.
  _.uniq = function(array) {
    const uniqItems = {};
    return _.filter(array, (item) => {
      if(!uniqItems[item]) {
        uniqItems[item] = true;
        return true;
      }
    })
  };

  // Return the results of applying an iterator to each element.
  _.map = function(collection, iterator) {
    // map() is a useful primitive iteration function that works a lot
    // like each(), but in addition to running the operation on all
    // the members, it also maintains an array of results.
    const arr = [];
    _.each(collection, (item,i,collection) => {
      arr.push(iterator(item,i,collection));
    })
    return arr;
  };

  /*
   * TIP: map is really handy when you want to transform an array of
   * values into a new array of values. _.pluck() is solved for you
   * as an example of this.
   */

  // Takes an array of objects and returns and array of the values of
  // a certain property in it. E.g. take an array of people and return
  // an array of just their ages
  _.pluck = function(collection, key) {
    // TIP: map is really handy when you want to transform an array of
    // values into a new array of values. _.pluck() is solved for you
    // as an example of this.
    return _.map(collection, (obj) => obj[key]);
  };

  // Reduces an array or object to a single value by repetitively calling
  // iterator(accumulator, item) for each item. accumulator should be
  // the return value of the previous iterator call.
  //
  // You can pass in a starting value for the accumulator as the third argument
  // to reduce. If no starting value is passed, the first element is used as
  // the accumulator, and is never passed to the iterator. In other words, in
  // the case where a starting value is not passed, the iterator is not invoked
  // until the second element, with the first element as its second argument.
  //
  // Example:
  //   var numbers = [1,2,3];
  //   var sum = _.reduce(numbers, function(total, number){
  //     return total + number;
  //   }, 0); // should be 6
  //
  //   var identity = _.reduce([5], function(total, number){
  //     return total + number * number;
  //   }); // should be 5, regardless of the iterator function passed in
  //          No accumulator is given so the first element is used.
  _.reduce = function(collection, iterator, accumulator) {
    _.each(collection, function(item,i,collection) {
      if(accumulator === undefined) {
        accumulator = item;
      }else {
        const memo = iterator(accumulator,item,i,collection);
        if(memo !== undefined) accumulator = memo;
      }
    });
    return accumulator;
  };

  // Determine if the array or object contains a given value (using `===`).
  _.contains = function(collection, target) {
    // TIP: Many iteration problems can be most easily expressed in
    // terms of reduce(). Here's a freebie to demonstrate!
   return _.reduce(collection, function(accum,item) {
      if(item === target) {
        accum = true;
      }
      return accum;
    },false)
  };

  // Determine whether all of the elements match a truth test.
  _.every = function(collection, iterator) {
    if(!iterator) iterator = function (item) { return !!item }
    // TIP: Try re-using reduce() here.
    return _.reduce(collection, function(accum,item) {
      if(!iterator(item)) {
        accum = false;
      }
      return accum;
    },true)
  };

  // Determine whether any of the elements pass a truth test. If no iterator is
  // provided, provide a default one
  _.some = function(collection, iterator) {
    // TIP: There's a very clever way to re-use every() here.
    if(!iterator) iterator = function (item) { return !!item }
    return !_.every(collection, function(item) {
      //if NOT NONE = some or all
      return !iterator(item);
    });
  };

  /**
   * OBJECTS
   * =======
   *
   * In this section, we'll look at a couple of helpers for merging objects.
   */

  // Extend a given object with all the properties of the passed in
  // object(s).
  //
  // Example:
  //   var obj1 = {key1: "something"};
  //   _.extend(obj1, {
  //     key2: "something new",
  //     key3: "something else new"
  //   }, {
  //     bla: "even more stuff"
  //   }); // obj1 now contains key1, key2, key3 and bla
  _.extend = function(obj) {
    const args = [...arguments];
    for(let i = 1;i<args.length;i++) {
      const currObj = args[i];
      if(typeof currObj === 'object' && !Array.isArray(currObj)) {
        _.each(currObj, function(val, key) {
          obj[key] = val;
        });
      }else {
        throw "Need objects as arguments";
      }
    }
    return obj;
  };

  // Like extend, but doesn't ever overwrite a key that already
  // exists in obj
  _.defaults = function(obj) {
    const args = [...arguments];
    for(let i = 1;i<args.length;i++) {
      const currObj = args[i];
      if(typeof currObj === 'object' && !Array.isArray(currObj)) {
        _.each(currObj, function(val, key) {
          if(obj[key] === undefined) {
            obj[key] = val;
          }
        });
      }else {
        throw "Need objects as arguments";
      }
    }
    return obj;
  };

  /**
   * FUNCTIONS
   * =========
   *
   * Now we're getting into function decorators, which take in any function
   * and return out a new version of the function that works somewhat differently
   */

  // Return a function that can be called at most one time. Subsequent calls
  // should return the previously returned value.
  _.once = function(func) {
    // TIP: These variables are stored in a "closure scope" (worth researching),
    // so that they'll remain available to the newly-generated function every
    // time it's called.
    // TIP: We'll return a new function that delegates to the old one, but only
    // if it hasn't been called before.
    let once = false;
    let firstResult;
    return (...args) => {
      if(once === false) {
        once = true;
        firstResult = func.apply(this, args);
      }
      return firstResult;
    }
  };

  // Memorize an expensive function's results by storing them. You may assume
  // that the function only takes primitives as arguments.
  // memoize could be renamed to oncePerUniqueArgumentList; memoize does the
  // same thing as once, but based on many sets of unique arguments.
  //
  // _.memoize should return a function that, when called, will check if it has
  // already computed the result for the given argument and return that value
  // instead if possible.
  _.memoize = function(func) {
    const memo = {};

    return (...args) => {
      if(memo[JSON.stringify(args)] === undefined) {
        memo[JSON.stringify(args)] = func.apply(this, args);
      }
      return memo[JSON.stringify(args)];
    }
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  //
  // The arguments for the original function are passed after the wait
  // parameter. For example _.delay(someFunction, 500, 'a', 'b') will
  // call someFunction('a', 'b') after 500ms
  _.delay = function(func, wait, ...funcArgs) {
      setTimeout(() => func.apply(this, funcArgs),wait)
  };

  /**
   * ADVANCED COLLECTION OPERATIONS
   * ==============================
   */

  // Randomizes the order of an array's contents.
  //
  // TIP: This function's test suite will ask that you not modify the original
  // input array. For a tip on how to make a copy of an array, see:
  // http://mdn.io/Array.prototype.slice
  _.shuffle = function(array) {
    const shuffled = array.slice();

    for(let i = 0; i < shuffled.length ;i++) {
      const randIndex = Math.floor(Math.random() * shuffled.length);
      const temp = shuffled[i];
      shuffled[i] = shuffled[randIndex];
      shuffled[randIndex] = temp;
    }
    return shuffled;
  };

  /**
   * ADVANCED
   * =================
   *
   * Note: This is the end of the pre-course curriculum. Feel free to continue,
   * but nothing beyond here is required.
   */

  // Calls the method named by functionOrKey on each value in the list.
  // Note: You will need to learn a bit about .apply to complete this.
  _.invoke = function(collection, functionOrKey, args) {
    //in case there are multiple args
    return _.map(collection, (item,key) => {
      if (typeof functionOrKey === 'function') {
        return functionOrKey.apply(item, args);
      } else {
        return item[functionOrKey].apply(item,args);
      }
    });
  };

  // Sort the object's values by a criterion produced by an iterator.
  // If iterator is a string, sort objects by that property with the name
  // of that string. For example, _.sortBy(people, 'name') should sort
  // an array of people by their name.
  _.sortBy = function(collection, iterator) {
    if(typeof iterator === 'string') {
      collection.sort((a,b) => {
        return a[iterator] - b[iterator];
      });
    }else if (typeof iterator === 'function') {
        collection.sort((a,b) => {
        return iterator(a) - iterator(b);
      });
    }
    return collection;
  };

  // Zip together two or more arrays with elements of the same index
  // going together.
  //
  // Example:
  // _.zip(['a','b','c','d'], [1,2,3]) returns [['a',1], ['b',2], ['c',3], ['d',undefined]]
  _.zip = function() {
    //find longest array
    const arrays = [...arguments];
    let longest = arrays[0];
    for(let i = 0;i < arrays.length;i++) {
      if(arrays[i].length > longest) longest = arrays[i];
    }
    const final = [];
    for(let j = 0; j<longest.length; j++) {
       final.push([]);
        _.each(arrays, (arr) => {
          final[final.length-1].push(arr[j])
        });
    }
    return final;
  };

  // Takes a multidimensional array and converts it to a one-dimensional array.
  // The new array should contain all elements of the multidimensional array.
  //
  // Hint: Use Array.isArray to check if something is an array
  _.flatten = function(nestedArray, result) {
    if(!result) result = [];
    _.each(nestedArray, item => {
      if(Array.isArray(item)) {
        _.flatten(item,result);
      }else {
        result.push(item);
      }
    });
    return result;
  };

  // Takes an arbitrary number of arrays and produces an array that contains
  // every item shared between all the passed-in arrays.
  _.intersection = function() {
    const args = [...arguments];
    const counter = {};
    _.each(args, (arr,i) => {
      _.each(arr, item => {
        if(!counter[item]) counter[item] = 1;
        else counter[item]++;
      });
    });
    return _.filter(Object.keys(counter), item => counter[item] === args.length);
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    const others = [...arguments].slice(1);
    const all = _.reduce(others, (accum,arr) => {
      return accum.concat(arr);
    },[]);
    const existingOthers = _.reduce(all, (accum, item) => {
      if(!accum[item]) accum[item] = true;
    },{});
    return _.filter(array, item => !existingOthers[item]);
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time.  See the Underbar readme for extra details
  // on this function.
  //
  // Note: This is difficult! It may take a while to implement.
  _.throttle = function(func, wait) {
    let waiting = false;
    return (...args) => {
      if(!waiting) {
        waiting = true;
        func.apply(this,args);
        setTimeout(() => { waiting = false }, wait);
      }
    }
  };
})();
