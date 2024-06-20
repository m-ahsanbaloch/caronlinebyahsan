var carName = document.getElementById("carName");
var carModel = document.getElementById("carModel");
var civic = document.getElementById("car");
var cars = {
  honda: {
    civic: {
      varient: "Civic Vti Oriel",
      model: "2023",
      price: 4000000,
      image: (src = "assets/images/logocar.png"),
    },
    fit: {
      varient: "Fit Hybrid",
      model: "2020",
      price: 4000000,
      image: (src = "assets/images/logocar.png"),
    },
    city: {
      varient: "City Aspire",
      model: "2022",
      price: 3500000,
    },
  },

  toyota: {
    corolla: {
      varient: "altis Vvti ",
      model: "2023",
      price: 4000000,
    },
    fortuner: {
      varient: "Sigma",
      model: "2022",
      price: 3500000,
    },
  },
};
for (var key in cars) {
  // console.log(key)
  carName.innerHTML += `<option  value="${key}"> ${key.toUpperCase()}</option>`;
}
function getVarient() {
  // console.log(event.target.value)
  var selectedManufacture = event.target.value;
  // console.log(selectedManufacture)
  carModel.innerHTML = `<option  value=""> Varient</option>`;
  if (selectedManufacture) {
    var models = cars[selectedManufacture];
  }
  for (var modelName in cars[selectedManufacture]) {
    carModel.innerHTML += `<option  value=""> ${modelName.toUpperCase()}</option>`;
    console.log(modelName);
    // if(carModel == modelName){
    //     console.log("abcdefgh")
    // }
    console.log(cars[selectedManufacture][modelName].model);
    // for(var key2 in cars[selectedManufacture][modelName]){
    //     console.log("Ssss", key2)
    // }
    console.log("======>", cars[key][modelName]);
  }
  //   if(modelName === "civic"){
  //     civic.style.display = "flex"
  //   }
}
// var prod = getVarient()
function show(event) {
  // console.log(prod)
  // console.log(event)
  return "ahsan";
}

civic.style.display = "flex";
civic.style.width = 100 + "px";
