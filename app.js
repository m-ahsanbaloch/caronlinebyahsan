var carName = document.getElementById("carName");
var carModel = document.getElementById("carModel");
var civic = document.getElementById("car");
var details = document.getElementById("carDetails");
var cars = {
  honda: {
    civic: {
      varient: "Civic Vti Oriel",
      model: "2023",
      price: 4000000,
      image:{
        black : "assets/images/logocar.png",
        red : "assets/images/logocar.png",
        white : "assets/images/logocar.png",

      } 
    },
    fit: {
      varient: "Fit Hybrid",
      model: "2020",
      price: 4000000,
      image:{
        black : "assets/images/logocar.png",
        red : "assets/images/logocar.png",
        white : "assets/images/logocar.png",

      } 
    },
    city: {
      varient: "City Aspire",
      model: "2022",
      price: 3500000,
      image:{
        black : "assets/images/logocar.png",
        red : "assets/images/logocar.png",
        white : "assets/images/logocar.png",

      } 
    },
  },

  toyota: {
    corolla: {
      varient: "altis Vvti ",
      model: "2023",
      price: 4000000,
      image:{
        black : "assets/images/logocar.png",
        red : "assets/images/logocar.png",
        white : "assets/images/logocar.png",

      } 

    },
    fortuner: {
      varient: "Sigma",
      model: "2022",
      price: 3500000,
      image:{
        black : "assets/images/logocar.png",
        red : "assets/images/logocar.png",
        white : "assets/images/logocar.png",

      } 

    },
  },
};
for (var key in cars) {
  carName.innerHTML += `<option  value="${key}"> ${key.toUpperCase()}</option>`;
}
function getVarient() {
  var selectedManufacture = event.target.value;
  carModel.innerHTML = `<option  value=""> Varient</option>`;
  if (selectedManufacture) {
    var models = cars[selectedManufacture];
  }
  for (var modelName in cars[selectedManufacture]) {
    carModel.innerHTML += `<option  value=""> ${modelName.toUpperCase()}</option>`;
    // console.log(modelName);
  
    // console.log(cars[selectedManufacture][modelName].model);

    // console.log("======>", cars[selectedManufacture][modelName]);
  }

}



function displayCarDetails(){
for(var key in cars){

}







// var carName = document.getElementById("carName");
// var carModel = document.getElementById("carModel");
// var carVarient = document.getElementById("carVarient");
// var carPrice = document.getElementById("carPrice");
// var carYear = document.getElementById("carYear");
// var carImage = document.getElementById("carImage");

// var cars = {
//   honda: {
//     civic: {
//       varient: "Civic Vti Oriel",
//       model: "2023",
//       price: 4000000,
//       image: {
//         black: "assets/images/logocar.png",
//         red: "assets/images/logocar.png",
//         white: "assets/images/logocar.png",
//       },
//     },
//     fit: {
//       varient: "Fit Hybrid",
//       model: "2020",
//       price: 4000000,
//       image: {
//         black: "assets/images/logocar.png",
//         red: "assets/images/logocar.png",
//         white: "assets/images/logocar.png",
//       },
//     },
//     city: {
//       varient: "City Aspire",
//       model: "2022",
//       price: 3500000,
//       image: {
//         black: "assets/images/logocar.png",
//         red: "assets/images/logocar.png",
//         white: "assets/images/logocar.png",
//       },
//     },
//   },

//   toyota: {
//     corolla: {
//       varient: "altis Vvti ",
//       model: "2023",
//       price: 4000000,
//       image: {
//         black: "assets/images/logocar.png",
//         red: "assets/images/logocar.png",
//         white: "assets/images/logocar.png",
//       },
//     },
//     fortuner: {
//       varient: "Sigma",
//       model: "2022",
//       price: 3500000,
//       image: {
//         black: "assets/images/logocar.png",
//         red: "assets/images/logocar.png",
//         white: "assets/images/logocar.png",
//       },
//     },
//   },
// };

// for (var key in cars) {
//   carName.innerHTML += `<option value="${key}"> ${key.toUpperCase()}</option>`;
// }

// function getVarient() {
//   var selectedManufacture = event.target.value;
//   carModel.innerHTML = '<option value="">Select Model</option>';
//   if (selectedManufacture) {
//     var models = cars[selectedManufacture];
//     for (var modelName in models) {
//       carModel.innerHTML += `<option value="${modelName}">${modelName.toUpperCase()}</option>`;
//     }
//   }
// }

// function displayCarDetails() {
//   var selectedManufacture = carName.value;
//   var selectedModel = carModel.value;
//   if (selectedManufacture && selectedModel) {
//     var carDetails = cars[selectedManufacture][selectedModel];
//     carVarient.innerText = `Varient: ${carDetails.varient}`;
//     carPrice.innerText = `Price: ${carDetails.price}`;
//     carYear.innerText = `Model Year: ${carDetails.model}`;
//     carImage.src = carDetails.image.black; // Assuming you want to show the black image by default
//   }
// }