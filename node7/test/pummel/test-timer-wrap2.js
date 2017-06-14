'use strict';
require('../common');

// Test that allocating a timer does not increase the loop's reference
// count.

const Timer = process.binding('timer_wrap').Timer;
new Timer();
