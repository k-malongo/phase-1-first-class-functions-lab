// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(){
    return (drivers.slice(0,2))
}

const returnLastTwoDrivers = function(){
    return (drivers.slice(2,4))
}
const selectingDrivers =[returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(num){
    return function(quad){
        return num*quad
    }

}
const fareDoubler= function(fare){
    return fare*2
}
const fareTripler= function(trippleFare){
    return (trippleFare*3)
}
const selectDifferentDrivers = function(drivers, returnDriver){
    return returnDriver(drivers)
}