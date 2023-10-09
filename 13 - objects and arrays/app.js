// start with strings, numbers and booleans

    // Let 's say we have an array
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

    // if you try to create a copy of an array by assining to a var it won't work as it only creates a reference not copy.

 

    // one way
    const sliceMeth = players.slice();
    sliceMeth[3] = "slice"
    console.log(sliceMeth);
    // or create a new array and concat the old one in
    const concatMeth = [].concat(players);
    concatMeth[3] = "concat"
    console.log(concatMeth);
    // or use the new ES6 Spread
    const es6Op = [...players];
    es6Op[3] = "ES6"
    console.log(es6Op);
    // now when we update it, the original one isn't changed
    const fromMeth = Array.from(players);
    fromMeth[3] = "from"
    console.log(fromMeth);
    console.log(players);
    // The same thing goes for objects, let's say we have a person object

    // with Objects
    const person = {
      name: 'Wes Bos',
      age: 80
    };

    // We can also copy the object with ...spread
    const objSpreadMeth = {...person}
    console.log(objSpreadMeth);
    // how do we take a copy instead?
    //console.clear();
    const assignMeth = Object.assign({}, person, {number:99, age:20, color: 'red', degree: "Science"});
    console.log(assignMeth);

    

    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
    const New = {
      name: 'Me',
      age: 80,
      social: {
        twitter: "@wwww",
        instagram: "Att"
      }
    };

    //The following method works but used rarely
    const deepCopi = JSON.parse(JSON.stringify(New));
    console.log(deepCopi);
