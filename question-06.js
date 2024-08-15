// Will the below code return any error? If yes, identify the error.

function fetchData(callback) {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => callback(null, data))
      .catch(error => callback(error));
  }
   fetchData(function (error, data) {
    if (error) {
      console.log('Error:', error);
    } else {
      console.log('Data:', data);
    }
  });