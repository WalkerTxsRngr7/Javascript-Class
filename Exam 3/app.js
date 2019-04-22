const jsonfile = require('jsonfile')
const file = '/tmp/data.json'

jsonfile.readFile("data.json", function (err, obj) {
  if (err) console.error(err)
  for (let i = 0; i < obj.items.length; i++) {
    fname = obj.items[i].fname;
    age = obj.items[i].age;
    console.log(fname + " " + age)
  }
})
