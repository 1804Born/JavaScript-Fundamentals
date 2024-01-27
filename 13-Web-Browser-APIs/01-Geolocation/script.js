// getCurrentPosition()
function curSuccess(pos) {
  const coords = pos.coords;

  console.log(`Latiitude: ${coords.latitude}`);
  console.log(`Longitude: ${coords.longitude}`);
  console.log(`Within: ${coords.accuracy} meters`);
}

function curError() {
  console.log(`Error: ${err.code} - ${err.message}`);
}

const curOptions = {
  enableHighAccuracy: true, //Use GPS If Available
  timeOut: 5000, // Time to wait to stop trying for loaction
  maximumAge: 0, //Do not use a cached position
};

// navigator.geolocation.getCurrentPosition(curSuccess, curError, curOptions);



const target = {
  latitude: 41.924849,
  longitude: -71.939977,
};


// clearWatch()
function watchSuccess(pos) {  
  const coords = pos.coords;
  console.log(coords);

  if (
    target.latitude === coords.latitude &&
    target.longitude === coords.longitude
  ) {
    console.log('You have reached your destination!');
    navigator.geolocation.clearWatch(id);
  }
}


// watchPosition()
function watchError() {
  console.log(`Error: ${err.code} - ${err.message}`);
}

const watchOptions = {
  enableHighAccuracy: true, //Use GPS If Available
  timeOut: 5000, // Time to wait to stop trying for loaction
  maximumAge: 0, //Do not use a cached position
};

const id = navigator.geolocation.watchPosition(
  watchSuccess,
  watchError,
  watchOptions
);
