          // NOTE //
// Code that Blocks execution are called "Blocking Code" (blocks the code of operation until it completes)
// while 
// Codes that doesn't block execution are called non blocking codes (vice verssa);

//  A cue is first in first out
//  Event loop , monitires the task queue and the call stack (revolving doors at the mall);

//  A fetchApi uses promises over callbacks, they get put on at the MICROTASK QUEUE(promiseJobs); 

// setTimeout(function () {
  // console.log('Hello from callback')
// }, 2000);

// console.log('Hello from global scope');
//[ call back is put on the task queue and waits call stack for the  before it runs ]...

// When you pass in a callback you dont call a parantesis

// GET Request - Fetch/Retrieve datat from the server
// POST Request - Send data to the server
// PUT & PATCH Request- Update data on a server
// DELETE Request - Delete data from a server

// 100 Range   -  Continue                                 .200  -  Success
// 200 Range   -  Success                                  .201  -  Created
// 300 Range   -  Redirects                                .204  -  No Content
// 4000 Range  -  Client Error                             .301  -  Resource Moved
// =>                                                      .304  -  Not Modified
// 500 Range   -  Server Error                             .400  -  Resource Moved
// =>                                                      .401  -  Unauthorized 
// +>                                                      .403  -  Forbidden    
// =>                                                      .404  -  Not Found
// =>                                                      .500  -  Error on Server

//  Payload is the data that we sent [when you send a bundle of data to the sever]


// ACP