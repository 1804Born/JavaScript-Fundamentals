// fetch('http://httpstat.us/200')
//   .then((response) => {
//     return response;
//   })
//   .then(() => {
//     console.log('success');
//   });

// fetch('http://httpstat.us/404')
//   .then((response) => {
//       if (!response.ok) {
//         throw new Error('Request Failed'); 
//       }
//     return response;
//   })
//   .then(() => {
//     console.log('success');
//   })
//   .catch((error) => {
//     console.log(error)
//   });

//Check for specific code
fetch('http://httpstat.us/404')
  .then((response) => {
      if (response.status === 400) {
        throw new Error('Bad Request');
      } else if (response.status === 500) {
        throw new Error ('Server Error');
        } else if (response.status !== 200) {
        throw new Error ('Response Failed');
      }
      return response;
  })
   .then(() => {
    console.log('success');
  })
  .catch((error) => {
    console.log(error);
  });

// Catch runs on a network error
  // fetch('http://hello123.net')
  // .then((response) => {
  //   return response;
  // })
  // .then(() => {
  //   console.log('success');
  // })
  // .catch((error) => {
  //   console.log(error)
  // });