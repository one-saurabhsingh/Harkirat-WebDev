// Object Methods Explanation
function objectMethods(obj) {
  console.log("Original Object:", obj);

  let keys = Object.keys(obj); // Object.keys() returns an array of a given object's own enumerable string-keyed property names.
  console.log("After Object.keys():", keys);

  let values = Object.values(obj); // Object.values() returns an array of a given object's own enumerable string-keyed property values.
  console.log("After Object.values():", values);

  let entries = Object.entries(obj); // Object.entries() returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
  console.log("After Object.entries():", entries);

  let hasProp = obj.hasOwnProperty("property"); // hasOwnProperty() checks if the object has a specific property.
  console.log("After hasOwnProperty():", hasProp);

  let newObj = Object.assign({}, obj, { newProperty: "newValue" }); // Object.assign() copies the values of all enumerable own properties from one or more source objects to a target object.
  console.log("After Object.assign():", newObj);


}

// Example Usage for Object Methods
const sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

objectMethods(sampleObject);
