var cars = {
  honda: {
    civic: {
      varient: "Civic Vti Oriel",
      model: "2023",
      price: 4000000,
      image: {
        black: "assets/images/logocar.png",
        red: "assets/images/logocar.png",
        white: "assets/images/logocar.png",
      },
    },
    fit: {
      varient: "Fit Hybrid",
      model: "2020",
      price: 4000000,
      image: {
        black: "assets/images/logocar.png",
        red: "assets/images/logocar.png",
        white: "assets/images/logocar.png",
      },
    },
    city: {
      varient: "City Aspire",
      model: "2022",
      price: 3500000,
      image: {
        black: "assets/images/logocar.png",
        red: "assets/images/logocar.png",
        white: "assets/images/logocar.png",
      },
    },
  },

  toyota: {
    corolla: {
      varient: "altis Vvti ",
      model: "2023",
      price: 4000000,
      image: {
        black: "assets/images/logocar.png",
        red: "assets/images/logocar.png",
        white: "assets/images/logocar.png",
      },
    },
    fortuner: {
      varient: "Sigma",
      model: "2022",
      price: 3500000,
      image: {
        black: "assets/images/logocar.png",
        red: "assets/images/logocar.png",
        white: "assets/images/logocar.png",
      },
    },
  },
};

var carName = document.getElementById("carName");
var carModel = document.getElementById("carModel");
var civic = document.getElementById("car");
var details = document.getElementById("carDetails");

for (var key in cars) {
  carName.innerHTML += `<option  value="${key}"> ${key.toUpperCase()}</option>`;
}

function getVarient() {
  details.innerHTML = ""
  var selectedManufacture = event.target.value;
  carModel.innerHTML = `<option  value="">Varient</option>`;
  if (selectedManufacture) {
    var models = cars[selectedManufacture];
  }
  for (var modelName in cars[selectedManufacture]) {
    carModel.innerHTML += `<option  value="${modelName}"> ${modelName.toUpperCase()}</option>`;
    details.innerHTML += `
      <div class="card" style="width: 18rem;">
                <img src="assets/images/civic.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${modelName}</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>

    `;
  }
  
}
function showDetails(event){
  details.innerHTML  = ""
  var selectedModel = event.target.value;
  if(selectedModel){
    var selectModel = cars[selectedModel.value]
    // console.log(selectedModel)
  }
  for(var keyMy in cars){
  // console.log(keyModel)
  for(var keyModel in cars[keyMy]){
    console.log(keyModel.civi)
  }
}
  details.innerHTML += `
  <div class="card" style="width: 33rem; ">
            <img src="assets/images/civic.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${selectedModel}</h5>
              <p class="card-text">Abcde</p>
              <a href="#" class="btn btn-primary">Explore</a>
            </div>
          </div>

`;

  // for(var mDetails in selectModel){
  //   console.log(mDetails)
  // }
  // for(var key in cars){
  //   // console.log(cars[key])
  //   for(var key2 in cars[key]){
  //     // console.log(cars[key][key2])
  //   }
  // }
}
// console.log(modelName);