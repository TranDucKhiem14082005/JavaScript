import {logger2} from './logger/index.js';

// console.log(logger); 
//mot module chi export default mot cai.
// import { 
//     TYPE_LOG,
//     TYPE_WARN,
//     TYPE_ERROR
//  } from './constants.js';

// logger('Test mamssage',TYPE_ERROR);
// import constants from './constants.js'; //export default
import * as constants from './constants.js';
console.log(constants);

logger2('Test mamssage',constants.TYPE_ERROR);