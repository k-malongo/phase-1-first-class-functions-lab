// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(){
    return (drivers.slice(0,2))
}

const returnLastTwoDrivers = function(){
    return (drivers.slice(-2))
}
const selectingDrivers =[returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(num){
     function mul(quad){
        let q= num*quad
        return q
    }
    return mul
}
const fareDoubler= function(fare){
    return fare*2
}
const fareTripler= function(trippleFare){
    return (trippleFare*3)
}
const selectDifferentDrivers = function(driversLab, returnDriver){
    let drive= returnDriver(driversLab)
    return drive
}
