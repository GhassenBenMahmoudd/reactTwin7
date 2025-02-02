// src/Ecmascript/Tab.js
let Tab = [
    { name: 'Wick',id:101, age: 75 },
    { name: 'Baba', id:200,age: 23 },
    { name: 'Jhon',id:115, age: 45 },
  ];
  
  let lastId = 0;
  
  Tab.forEach(item => {
    item.id = ++lastId;
  });
  
  Tab.push({ name: 'David', age: 40, id: ++lastId });
  Tab.unshift({ name: 'Eve', age: 20, id: ++lastId });
  
  const searchById = (id, array) => array.find(item => item.id === id);
  
  export { Tab, searchById };