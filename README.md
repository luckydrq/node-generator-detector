## node-generator-detector

### A simple module to detect generator feature for node.js.

### Quick Start
```javascript
  var detector = require('node-generator-detector');
  detector(function(err, result){
    if (err) console.error(err.message);
    else console.log(result);       // true or false
  });
```
### Installation
```npm i node-generator-detector```
