// open for extension 
// closed for modifications

class Vehicle{
    constructor(efficiency,fuelcap){
        this.efficiency = efficiency;
        this.capacity = fuelcap;
    }

    calcRange(){
        return this.efficiency * this.capacity;
    }
}

// class Vehicle{
//     constructor(efficiency,fuelcap,electric = 0){
//         this.efficiency = efficiency;
//         this.capacity = fuelcap;
//         this.electricRange = electric;
//     }

//     calcRange(){
//         if(this.electricRange) return this.efficiency * this.capacity + this.electricRange

//         return this.efficiency * this.capacity;
//     }
// }

// let there be an addition of electric functionality
// modify this class to calculatethe range

// add electric meter to measure the usage of batter
// 120 v --- 1.2kvA ----- 200km 

class hybridVhc extends Vehicle{
    constructor(efficiency,fuelcap,electric){
        super(efficiency,fuelcap)
        this.electricRange = electric;
    }
    // meth(od overriding
    calcRange(){
        return this.capacity*this.efficiency + this.electricRange;
    }
}

class Electrometer extends hybridVhc{
    constructor(efficiency,fuelcap,electric){
        super(efficiency,fuelcap,electric)

    }
    //
    electroMeterCalc(){

    }
}

let ordinaryVehicle = new Vehicle(89,112)
ordinaryVehicle.calcRange()

let hybrid = new hybridVhc(89,112,200)
ordinaryVehicle.calcRange()

let elB = new Electrometer()



