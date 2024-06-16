// var carName = document.getElementById("carName");
// var carModel = document.getElementById("carModel");

// var cars = {
//   honda: {
//     civic: {
//       varient: "Civic Vti Oriel",
//       model: "2023",
//       price: 4000000,
//     },
//     city: {
//       varient: "City Aspire",
//       model: "2022",
//       price: 3500000,
//     },
//   },

//   toyota: {
//     corolla: {
//       varient: "altis Vvti ",
//       model: "2023",
//       price: 4000000,
//     },
//     fortuner: {
//       varient: "Sigma",
//       model: "2022",
//       price: 3500000,
//     },
//   },
// };
// for (var key in cars) {
//   // console.log(key)
//   carName.innerHTML += `<option  value="${key}"> ${key}</option>`;
// }
// function getVarient() {
//   // console.log(event.target.value)
//   var selectedManufacture = event.target.value;
//   // console.log(selectedManufacture)
//   carModel.innerHTML = `<option  value=""> Varient</option>`;
//   if (selectedManufacture) {
//     var models = cars[selectedManufacture];
//   }
//   for (var modelName in cars[selectedManufacture]) {
//     carModel.innerHTML += `<option  value=""> ${modelName}</option>`;
//     console.log(modelName);
//   }
 
// }



var cars = {
    "toyota": {
        "corolla": {
            "model": 2024,
            "mileage": 15245123,
            "available": true,
            "color": ["blue", "silver", "white"],
            "doors": "4 door",
            "images": {
                "blue": "https://www.toyota-central.com/Assets/images/Vehicle/CorollaX/Color/SrongBlue.png",
                "silver": "https://di-enrollment-api.s3.amazonaws.com/toyota/models/2024/corolla-hybrid/Colors/Classic_Silver_Metallic_with_Midnight_Black_Metallic_roof.png",
                "white": "https://www.toyota-central.com/Assets/images/Vehicle/CorollaX/Color/SuperWhite.png"
            }
        }
    },
    "ford": {
        "focus": {
            "model": 2024,
            "mileage": 18123512,
            "available": false,
            "color": ["red", "black", "gray"],
            "doors": "4 door",
            "images": {
                "red": "https://i.pinimg.com/736x/c3/6b/8b/c36b8b4f144135b5aa40f493bdd96b6a.jpg",
                "black": "https://w7.pngwing.com/pngs/505/419/png-transparent-2017-ford-focus-2016-ford-focus-2015-ford-focus-se-car-focus-compact-car-sedan-car.png",
                "gray": "https://p7.hiclipart.com/preview/478/533/245/2018-ford-focus-se-hatchback-car-2018-ford-focus-sedan-car.jpg"
            }
        }
    },
    "chevrolet": {
        "malibu": {
            "model": 2024,
            "mileage": 19541234,
            "available": true,
            "color": ["black", "white", "blue"],
            "doors": "4 door",
            "images": {
                "black": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhpLqM69YNA1RACibmDwrYpDm5O3dhQBeDLQ&s",
                "white": "https://inv.assets.ansira.net/RTT/Chevrolet/2024/6057653/default/ext_GAZ_deg02.jpg",
                "blue": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5d9JQFGQGcHjOAhPpBSEQdOfm-tTLOeS4Cw&s"
            }
        }
    },
    "nissan": {
        "sentra": {
            "model": 2024,
            "mileage": 17351234,
            "available": true,
            "color": ["white", "red", "silver"],
            "doors": "4 door",
            "images": {
                "white": "https://vehicle-images.dealerinspire.com/stock-images/chrome/d038786c0f3bbfd4aec57183c452144a.png",
                "red": "https://vehicle-images.dealerinspire.com/stock-images/chrome/1df9b7097421232c1b2047e29890f073.png",
                "silver": "https://vehicle-images.dealerinspire.com/stock-images/chrome/2e806d794d2844a7737a0d96b99241f4.png"
            }
        }
    },
    "bmw": {
        "3 series": {
            "model": 2024,
            "mileage": 20123456,
            "available": true,
            "color": ["black", "blue", "white"],
            "doors": "4 door",
            "images": {
                "black": "https://vehicle-images.dealerinspire.com/stock-images/thumbnails/large/chrome/f584748989cb1e1ae9abb4eea524f82e.png",
                "blue": "https://vehicle-images.dealerinspire.com/stock-images/chrome/1354618deaf963e8816a657e90dd9a14.png",
                "white": "https://media.chromedata.com/MediaGallery/media/MjkzOTU4Xk1lZGlhIEdhbGxlcnk/YUpPvaiIkMy7ySrUxwCiTYdRfNyVXbLbDn2jrxVg-opW2hmb9ClzmLM0sJF1B-9z_rfyuCZIOVmRt8K6WTLKbGeS01ulbKCpsnVMgF-3937-kudOFjNUWdDm1axeL6Bkge9aDCKzoNOndWoILO6z8Q/2024BMC220001_640_01.png"
            }
        }
    },
    "audi": {
        "a4": {
            "model": 2024,
            "mileage": 18851234,
            "available": false,
            "color": ["white", "black", "gray"],
            "doors": "4 door",
            "images": {
                "white": "https://media.chromedata.com/MediaGallery/media/MjkzOTU4Xk1lZGlhIEdhbGxlcnk/caGsjB6IqrbP4qpZVP8KPmTO5J3G3JwodFWV70tWe5sGnR42SMknTxHFovKytM1L-R3tckphFE2bjIj9alSPyV_FqkgEhmbcf8kSQSzfViM23KtzZJ8b_0kTXRBRzUutjLhp-N1iVRnL17lLGTy_Rlq_RTct8SboSLoCkfrpygYEfb0UWxuuAQ/cc_2024AUC010014_01_640_Z9Z9.png",
                "black": "https://media.chromedata.com/MediaGallery/media/MjkzOTU4Xk1lZGlhIEdhbGxlcnk/caGsjB6IqrbP4qpZVP8KPmTO5J3G3JwodFWV70tWe5sGnR42SMknTxHFovKytM1L-R3tckphFE2bjIj9alSPyV_FqkgEhmbcf8kSQSzfViM23KtzZJ8b_0kTXRBRzUutjLhp-N1iVRnL17lLGTy_Rlq_RTct8SboSLoCkfrpygYEfb0UWxuuAQ/cc_2024AUC010014_01_640_Z9Z9.png",
                "gray": "https://p7.hiclipart.com/preview/112/33/211/5bbc2c3ba333d.jpg"
            }
        }
    },
    "mercedes": {
        "c-class": {
            "model": 2024,
            "mileage": 20451234,
            "available": true,
            "color": ["black", "silver", "white"],
            "doors": "4 door",
            "images": {
                "black": "https://vehicle-images.dealerinspire.com/stock-images/chrome/ed10edee738ded17b96e6cf8e142ea17.png",
                "silver": "https://vehicle-images.dealerinspire.com/stock-images/chrome/58caad0da36013c7a2eef854626ae3da.png",
                "white": "https://vehicle-images.dealerinspire.com/stock-images/chrome/8f58d6e3e7f7a5d8abfe0a3088a27a46.png"
            }
        }
    },
    "hyundai": {
        "elantra": {
            "model": 2024,
            "mileage": 16541234,
            "available": true,
            "color": ["blue", "red", "white"],
            "doors": "4 door",
            "images": {
                "blue": "https://s7d1.scene7.com/is/image/hyundai/2024-elantra-se-fwd-intense-blue-vehicle-browse-hero:Browse?fmt=webp-alpha",
                "red": "https://s7d1.scene7.com/is/image/hyundai/2024-elantra-limited-ultimate-red-vehicle-browse-hero:16-9?wid=640&hei=360&fmt=webp-alpha",
                "white": "https://di-uploads-pod28.dealerinspire.com/tamiamihyundai/uploads/2021/03/2024_Elantra_SE_FWD_SerenityWhitePearl_Black_360_Landscape_WhiteStudio.008.png"
            }
        }
    },
    "kia": {
        "optima": {
            "model": 2024,
            "mileage": 17451234,
            "available": false,
            "color": ["black", "white", "silver"],
            "doors": "4 door",
            "images": {
                "black": "https://vehicle-images.dealerinspire.com/stock-images/chrome/ab773fe5ff21ecdefa8b184228cfccec.png",
                "white": "https://i.pinimg.com/originals/5b/0c/3f/5b0c3f58b68fdfc2cd2587819b444f79.png",
                "silver": "https://65e81151f52e248c552b-fe74cd567ea2f1228f846834bd67571e.ssl.cf1.rackcdn.com/ldm-images/2018-kia-optima-titanium-silver-color.png"
            }
        }
    },
    "mazda": {
        "mazda3": {
            "model": 2024,
            "mileage": 17951234,
            "available": true,
            "color": ["red", "blue", "white"],
            "doors": "4 door",
            "images": {
                "red": "https://media.chromedata.com/MediaGallery/media/MjkzOTU4Xk1lZGlhIEdhbGxlcnk/HZhLkrcFqV6CmuzPMJZaGGZThuhpLXHz0G0yA1NiAd1FbYm2B3fp7vV0TwiabvO7LmYF5OIlNrFVhUR85yktw8LEwmzPvu1Yo4jhYOBxDYDHwoKQ1EqfWwzFQETxHLH97LeRgM7IOXCgAJwFCQ_8IDSvsYCI9NetcnuOth817tCi6rDIzeoMVooG1AEhcxim/cc_2024MAC170042_01_640_46V.png",
                "blue": "https://vehicle-images.dealerinspire.com/stock-images/chrome/3a8d0a7857e4ed6b3598b80b3ac93f99.png",
                "white": "https://inv.assets.ansira.net/ChromeColorMatch/us/TRANSPARENT_cc_2024MAC170026_01_1280_25D.png"
            }
        }
    }
};

var manufactureDropdown = document.getElementById('manufacture');
var modelDropdown = document.getElementById('model');
var carDetailsContainer = document.getElementById('carDetails');

// Populate manufacturer dropdown
function populateManufacturers() {
    for (var key in cars) {
        var option = document.createElement('option');
        option.value = key;
        option.textContent = key.charAt(0).toUpperCase() + key.slice(1); // Capitalize first letter
        manufactureDropdown.appendChild(option);
    }
}

// Generate model dropdown based on selected manufacturer
function generate() {
    var selectedManufacturer = manufactureDropdown.value;
    modelDropdown.innerHTML = "<option value=''>Select Model</option>";
    if (selectedManufacturer) {
        var models = cars[selectedManufacturer];
        for (var modelName in models) {
            var option = document.createElement('option');
            option.value = modelName;
            option.textContent = modelName.charAt(0).toUpperCase() + modelName.slice(1); // Capitalize first letter
            modelDropdown.appendChild(option);
        }
    }
}

// Show car details when model is selected
function showCarDetails() {
    var selectedManufacturer = manufactureDropdown.value;
    var selectedModel = modelDropdown.value;

    if (selectedManufacturer && selectedModel) {
        var car = cars[selectedManufacturer][selectedModel];
        if (car) {
            var carDetailsHTML = `
                <div class="card">
                    <div class="car-img">
                        <img id="carImage" src="${car.images[car.color[0]]}" alt="${selectedModel}">
                    </div>
                    <div class="card-body">
                        <h2>${selectedModel.charAt(0).toUpperCase() + selectedModel.slice(1)}</h2>
                        <p><strong>Manufacturer:</strong> ${selectedManufacturer.charAt(0).toUpperCase() + selectedManufacturer.slice(1)}</p>
                        <p><strong>Model Year:</strong> ${car.model}</p>
                        <p><strong>Mileage:</strong> ${car.mileage}</p>
                        <p><strong>Available:</strong> ${car.available ? 'Yes' : 'No'}</p>
                        <p><strong>Color Options:</strong></p>
                        <div class="d-flex justify-content-evenly bg-warning py-3">
                    `;
                    
                    car.color.forEach(color => {
                        carDetailsHTML += `
                            <div class="car-colors" style="background-color: ${color};" onclick="changeCarImage('${color}')"></div>
                        `;
                    });

                    carDetailsHTML += `
                            </div>
                            <p><strong>Doors:</strong> ${car.doors}</p>
                        </div>
                    </div>
                    `;
            carDetailsContainer.innerHTML = carDetailsHTML;
        } else {
            carDetailsContainer.innerHTML = "<p>No details found for selected model.</p>";
        }
    } else {
        carDetailsContainer.innerHTML = "<p>Please select a manufacturer and a model.</p>";
    }
}

// Change car image based on selected color
function changeCarImage(color) {
    var selectedManufacturer = manufactureDropdown.value;
    var selectedModel = modelDropdown.value;

    if (selectedManufacturer && selectedModel) {
        var car = cars[selectedManufacturer][selectedModel];
        if (car && car.images[color]) {
            var carImage = document.getElementById('carImage');
            carImage.src = car.images[color];
            carImage.alt = selectedModel + ' (' + color + ')';
        }
    }
}

// Initialize manufacturer dropdown
populateManufacturers();
