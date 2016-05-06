// date, time, person, project, value, category [joy, success]
import { sample, range, uniqueId } from 'lodash';
import "babel-polyfill";


// {
//   "timestamp": new Date(),
//   "person_id": (sample [1, 2, 3, 4, 5, 6]),
//   "project_id": 1,
//   "value": (rand-int 5),
//   "category_id": (rand-int 2)  // 1: joy, 2: success
// }


function* generateDatum() {
    var datum = function() {
      return {
        "timestamp": function(){
          var hour = sample(range(9, 17));
          return new Date(2016, 3, 4, hour);
        }(),
        "id": uniqueId(),
        "person_id": sample([1, 2, 3, 4, 5, 6]),
        "project_id": 1,
        "value": sample([1, 2, 3, 4, 5]),
        "category_id": sample([1, 2])
      }
    };
    while(true)
      yield datum();
}

var gen = generateDatum();

console.log(gen.next().value);

var data = function(){
  var datapoints = range(20);
  return datapoints.map(function() {
    return gen.next().value;
  })
}();

export default data;

console.log(data)
