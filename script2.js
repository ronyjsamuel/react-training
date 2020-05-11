// Shallow Copy  of list
const numbers = [1, 2, 3];
let numbersCopy = [...numbers];
numbersCopy.push(4);
console.log(numbers, numbersCopy);


// Shallow Copy  of object
let obj = {
    a: 1,
    b: 2,
  };
  let objCopy = Object.assign({}, obj);
  console.log(objCopy);


// Deep copy of list
const sampleObject = {
    string: 'string',
    number: 123,
    boolean: false,
  }
  
   console.log(sampleObject)
   console.log(typeof sampleObject) // object
  
  const faultyClone = JSON.parse(JSON.stringify(sampleObject))
  
  console.log(faultyClone)
  
  console.log(typeof faultyClone.number) // string


  //Deep copy of object
  var objDeep = { 
    a: 1,
    b: { 
      c: 2
    }
  }
  var newObj = JSON.parse(JSON.stringify(objDeep));
  objDeep.b.c = 20;
  console.log(objDeep); 
  console.log(newObj); 