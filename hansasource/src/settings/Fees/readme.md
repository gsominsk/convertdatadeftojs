# Client  ModelsRegistry
________________________
### Methods
- find(datadef, query) returned array objects that satisfies query
- findById(datadef, id) returned object that has id
- update(datadef, id, data) updated object that has id
- delete(datadef, id) delete object that has id
- create(datadef, data)  created object

```javascript
const modelsRegistry = require('erpjs/core/client/modelsRegistry');

const allUsers = await modelsRegistry.find('users', {});

const user     = await modelsRegistry.find('users', { name : 'Mario' });

const oneUser  = await modelsRegistry.findById('users', 'af81e6de-acbe-4142-97ff-b397629eecd6');

modelsRegistry.delete('users', 'af81e6de-acbe-4142-97ff-b397629eecd6');

modelsRegistry.update('users', 'af81e6de-acbe-4142-97ff-b397629eecd6', { name : 'Mery' } );

modelsRegistry.create('users', { name : 'Darvin', age : 14 });
```
