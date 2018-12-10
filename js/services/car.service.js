import utilService from "./util.service.js";



var cars = [{ id: utilService.makeId(), vendor: 'Mazdi', price: 89.78 }, { id: utilService.makeId(), vendor: 'Toyoka', price: 98.21 }];

function query() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(cars);
        }, 1000)
    });
}

function save(carData) {
    carData.id = utilService.makeId();
    cars.push(carData);
    return Promise.resolve(carData);
}

function getCarById(carId) {
    var theCar = cars.find(car => car.id === carId);
    return Promise.resolve(theCar)
}



export default {
    query,
    save,
    getCarById
}

function query1() {
    return Promise.resolve(cars);
}