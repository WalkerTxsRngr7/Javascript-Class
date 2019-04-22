const jsonfile = require('jsonfile')
const file = '/tmp/data.json'

jsonfile.readFile("data.json", function (err, obj) {
  if (err) console.error(err)
//   console.log(obj)
//   obj.items.forEach(item => {
//       console.log (obj.items[item])
//   });
  for (let i = 0; i < obj.items.length; i++) {
    fname = obj.items[i].fname;
    age = obj.items[i].age;
    console.log(fname + " " + age)
  }
//   console.log(obj.items[0].fname)
})