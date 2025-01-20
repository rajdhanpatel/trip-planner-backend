function validateFlighQueryParams(query){
    const errors = [];
    if(!query.origin){
        errors.push("origin is required");
    }
    if(!query.destination){
        errors.push("destination is required");
    }
    return errors;

}
function validateHotelQueryParams(query){
    const errors = [];
    if(!query.location){
        errors.push("location is required");
    }
    return errors;
}
function validateSiteQueryParams(query){
    const errors = [];
    if(!query.location){
        errors.push("location is required");
    }
    return errors;
}
module.exports = {validateFlighQueryParams,validateHotelQueryParams, validateSiteQueryParams};