const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for (let element of Object.values(collection)){
        callback(element)
      }
      return collection;
    },

    map: function(collection, callback) {
      let result = [];
      for (let element of Object.values(collection)){
        result.push(callback(element));
      }
      return result;
    },

    reduce: function(collection, callback, initialValue) {
      let total;
      let counter;

      if (!!initialValue) {
        total = initialValue;
        counter = 0;
      } else {
        total = collection[0];
        counter = 1;
      }

     for (let i = counter; i < collection.length; i++) {
       total = callback(total, collection[i])
     }
      return total
    },

    find: function(collection, callback) {
      for (let element of collection) {
        if (callback(element)) {
          return element;
        }
      }
    },

    filter: function(collection, callback) {
      let result = [];
      for (let element of collection) {
        if (callback(element)) {
          result.push(element)
        }
      }
      return result;
    },

    size: function(collection) {
      return Object.values(collection).length
    },

    first: function(collection, value) {
      if (value) {
        return collection.slice(0, value)
      } else {
        return collection[0]
      }
    },

    last: function(collection, value) {
      if (value) {
        return collection.slice(value * -1)
      } else {
        return collection[collection.length -1]
      }
    },

    compact: function(collection) {
      let result = [];
      for (let element of collection) {
        if (!!element) {
          result.push(element);
        }
      }
      return result;
    },

    sortBy: function(collection, callback) {
      const result = [...collection];
      return result.sort((a, b) => callback(a) - callback(b));
    },

    flatten: function(collection, isSingleLevel) {
      let result = [];
      if (!!isSingleLevel) {
        result = result.concat(...collection)
      } else {
        for (let element of collection){
          if (typeof element === "object") {
            result.push(...this.flatten(element, false))
          } else {
            result.push(element)
          }
        }
      }
      return result
    },

    uniq: function(collection, sorted=false, iteratee=false) {
      if (sorted) {
        return fi.uniqSorted(collection, iteratee)
      } else if (!iteratee) {
        return Array.from(new Set(collection))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of collection) {
          const moddedVal = iteratee(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    },

    keys: function(collection) {
      return Object.keys(collection)
    },

    values: function(collection) {
      return Object.values(collection)
    },

    functions: function(obj) {
      const functionNames = [];

      for (let key in obj) {
        if (typeof obj[key] === "function"){
          functionNames.push(key);
        }
      }

      return functionNames.sort();
    },

  };
})()

fi.libraryMethod()