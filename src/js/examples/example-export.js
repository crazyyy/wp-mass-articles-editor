// *** Example Export >>> //
function cube(x) {
  return x * x * x;
}

const foo = Math.PI + Math.SQRT2;

const graph = {
  options: {
    color: 'white',
    thickness: '2px',
  },
  draw() {
    console.log('From graph draw function');
  },
};

export { cube, foo, graph };
// <<< Example Export *** //

// *** Example Import >>> //
import { cube, foo, graph } from 'src/js/examples/example-export';
graph.options = {
  color: 'blue',
  thickness: '3px',
};

graph.draw();
console.log(cube(3)); // 27
console.log(foo); // 4.555806215962888
// <<< Example Import *** //
