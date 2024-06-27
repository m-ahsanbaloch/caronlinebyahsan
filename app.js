// var cars = {
//   honda: {
//     civic: {
//       varient: "Civic Vti Oriel",
//       model: "2023",
//       price: 4000000,
//       image: "assets/images/honda/civic.jpg",
//     },
//     fit: {
//       varient: "Fit Hybrid",
//       model: "2020",
//       price: 4500000,
//       image: "assets/images/logocar.png",
//     },
//     city: {
//       varient: "City Aspire",
//       model: "2022",
//       price: 3500000,
//       image: "assets/images/logocar.png",
//     },
//   },

//   toyota: {
//     corolla: {
//       varient: "altis Vvti ",
//       model: "2023",
//       price: 6000000,
//       image: "assets/images/logocar.png",
//     },
//     fortuner: {
//       varient: "Sigma",
//       model: "2022",
//       price: 13500000,
//       image: "assets/images/logocar.png",
//     },
//   },
// };

// var carName = document.getElementById("carName");
// var carModel = document.getElementById("carModel");
// var civic = document.getElementById("car");
// var details = document.getElementById("carDetails");

// for (var key in cars) {
//   carName.innerHTML += `<option  value="${key}"> ${key.toUpperCase()}</option>`;
//   var carKey = cars[key];
//   console.log(carKey);

//   function getVarient() {
//     details.innerHTML = "";
//     var selectedManufacture = event.target.value;
//     carModel.innerHTML = `<option  value="">Varient</option>`;
//     if (selectedManufacture) {
//       var models = cars[selectedManufacture];
//     }
//     for (var modelName in cars[selectedManufacture]) {
//       // console.log(modelName);
//       carModel.innerHTML += `<option  value="${modelName}"> ${modelName.toUpperCase()}</option>`;
//       details.innerHTML += `
//       <div class="card" style="width: 18rem;">
//                 <img src="assets/images/civic.jpg" class="card-img-top" alt="...">
//                 <div class="card-body">
//                   <h5 class="card-title">${modelName}</h5>
//               <p class="card-text">Model</p>
//               <p class="card-text">price</p>                  <a href="#" class="btn btn-primary">Go somewhere</a>
//                 </div>
//               </div>

//     `;
//     }
//   }
// }
// function showDetails(event) {
//   details.innerHTML = "";
//   var selectedModel = event.target.value;
//   console.log(selectedModel, "hello");
//   if (selectedModel) {
//     var selectModel = cars[selectedModel.value];
//     // console.log(selectedModel)
//   }
//   for (var keyMy in cars) {
//     // console.log(keyModel)
//     for (var keyModel in cars[keyMy]) {
//       console.log(keyModel.civi);
//     }
//   }
//   details.innerHTML += `
//   <div class="card" style="width: 33rem; ">
//             <img src="assets/images/civic.jpg" class="card-img-top" alt="...">
//             <div class="card-body">
//               <h5 class="card-title">${selectedModel}</h5>
//               <p class="card-text">Model</p>
//               <p class="card-text">price</p>

//               <a href="#" class="btn btn-primary">Explore</a>
//             </div>
//           </div>

// `;

// }

var cars = {
  honda: {
    civic: {
      varient: "Civic Vti Oriel",
      model: "2023",
      price: 4000000,
      image: "assets/images/honda/civic.jpg",
    },
    fit: {
      varient: "Fit Hybrid",
      model: "2020",
      price: 4000000,
      image: "assets/images/honda/fit.jpg",
    },
    city: {
      varient: "City Aspire",
      model: "2022",
      price: 3500000,
      image: "assets/images/honda/city.jpg",
    },
  },

  toyota: {
    corolla: {
      varient: "Corolla Altis Vvti",
      model: "2023", 
      price: 4500000,
      image: "assets/images/toyota/Corolla.png",
    },
    fortuner: {
      varient: "Fortuner Sigma",
      model: "2022",
      price: 13500000,
      image: "assets/images/toyota/Fortuner.png",
    },
  },
};

var carName = document.getElementById("carName");
var carModel = document.getElementById("carModel");
var details = document.getElementById("carDetails");

function abc(event){
  for(var showAll in cars){
    console.log(showAll)
    for(var main in cars[showAll]){
      console.log(cars[showAll][main])
      details.innerHTML += `
      <div class="card" style="width: 15rem;">
        <img src="${cars[showAll][main].image}" style="width:150px;" class="card-img-top" alt="${cars[showAll][main].varient}">
        <div class="card-body">
          <h5 class="card-title">${cars[showAll][main].varient}</h5>
          <p class="card-text">Model: ${cars[showAll][main].model}</p>
          <p class="card-text">Price: ${cars[showAll][main].price}</p>
          <a href="#" class="btn btn-primary">Explore</a>
        </div> 
      </div>
    `;
    }
  }

}
abc()
for (var key in cars) {
  carName.innerHTML += `<option value="${key}"> ${key.toUpperCase()}</option>`;
}

function getVarient(event) {
  details.innerHTML = "";
  var selectedManufacture = event.target.value;
  carModel.innerHTML = `<option value="">Select Model</option>`;
  if (selectedManufacture) {
    var models = cars[selectedManufacture];
    for (var modelName in models) {
      var modelDetails = models[modelName];
      carModel.innerHTML += `<option value="${modelName}"> ${modelName.toUpperCase()}</option>`;
      details.innerHTML += `
      <div class="card" style="width: 18rem;">
        <img src="${
          modelDetails.image
        }" class="card-img-top" alt="${modelName}">
        <div class="card-body">
          <h5 class="card-title">${modelName.toUpperCase()}</h5>
          <p class="card-text">Model: ${modelName}</p>
          <p class="card-text">Price: ${modelDetails.price}</p>
          <a href="#" class="btn btn-primary">Explore</a>
        </div>
      </div>
    `;
    }
  }
}
function showDetails(event) {
  details.innerHTML = "";
  var selectedManufacture = carName.value;
  var selectedModel = event.target.value;
  if (selectedManufacture && selectedModel) {
    var carDetails = cars[selectedManufacture][selectedModel];
    details.innerHTML += `
      <div class="card" style="width: 33rem;">
        <img src="${carDetails.image}" class="card-img-top" alt="${carDetails.varient}">
        <div class="card-body">
          <h5 class="card-title">${carDetails.varient}</h5>
          <p class="card-text">Model: ${carDetails.model}</p>
          <p class="card-text">Price: ${carDetails.price}</p>
          <a href="#" class="btn btn-primary">Explore</a>
        </div> 
      </div>
    `;
  }
}
