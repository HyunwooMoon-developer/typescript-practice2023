/**
 * Let's make a game 🕹
 */

{
  type Direction = 'left' | 'right' | 'up' | 'down';

  function move(direction: Direction) {
    switch (direction) {
      case 'left':
        return (position.x -= 1);
        break;
      case 'right':
        return (position.x += 1);
        break;
      case 'up':
        return (position.y += 1);
        break;
      case 'down':
        return (position.y -= 1);
        break;
      default:
        throw new Error('unknown direction');
    }
  }

  let position: { x: number; y: number } = { x: 0, y: 0 };

  console.log(position); // { x: 0, y: 0}
  move('up');
  console.log(position); // { x: 0, y: 1}
  move('down');
  console.log(position); // { x: 0, y: 0}
  move('left');
  console.log(position); // { x: -1, y: 0}
  move('right');
  console.log(position); // { x: 0, y: 0}
}
