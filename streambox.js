function duplicate(filename) {
    console.log('Function Duplicate')
  }

  src.pipe(filename).pipe(filename)



  
  module.exports = { 
    duplicate,duplicate
  }

  
  /*
    If you need to import an element from a module you can use:
  const { duplicate } = require('./streambox.js')
  duplicate()
  */