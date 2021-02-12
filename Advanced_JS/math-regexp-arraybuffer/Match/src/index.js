import Magician from './Magician';
import Daemon from './Daemon';

const magician = new Magician('Леголаз');
const daemon = new Daemon('Аластор');

magician.attack = 4;
daemon.attack = 2;
console.log('= ----- =');
magician.stoned = true;
daemon.stoned = true;
console.log('= ----- =');
console.log(magician.attack);
console.log(daemon.attack);
console.log('= ----- =');
magician.attack = 1;
daemon.attack = 5;
console.log('= ----- =');
console.log(magician.attack);
console.log(daemon.attack);
magician.attack = 7;
daemon.attack = 5;
magician.attack = 8;
daemon.attack = 6;
magician.attack = 3;
daemon.attack = 4;
magician.attack = 2;
daemon.attack = 9;
console.log('= ----- =');
console.log(magician.stoned);
console.log(daemon.stoned);
console.log('= ----- =');
magician.stoned = false;
daemon.stoned = false;
console.log('= ----- =');
console.log(magician.attack);
console.log(daemon.attack);