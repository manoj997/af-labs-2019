var vehicleName;

function printVehicleName() {
  console.log(vehicleName);
}

var Vehicle = {
  vehicleName: vehicleName,
  getVehicleName: function () {
    console.log(this.vehicleName);
  },
};

printVehicleName();

Vehicle.getVehicleName();
