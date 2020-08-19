var utils = require('./utils');

// Returns all details for specified IFSC code
exports.get = function (code,) {
    return utils.returnData(code,null);
}

// Returns Bank Name for specified IFSC code
exports.getBankName = function(code){
    return utils.returnData(code,'BANK');
}

// Returns Branch Name for specified IFSC code
exports.getBranchName = function(code){
    return utils.returnData(code,'BRANCH');
}

// Returns Bank Code for specified IFSC code
exports.getBankCode = function(code){
    return utils.returnData(code,'BANKCODE');
}

// Returns bank's MICR Code for specified IFSC code
exports.getMicr = function(code){
    return utils.returnData(code,'MICR');
}

// Returns District for specified IFSC code
exports.getDistrict = function(code){
    return utils.returnData(code,'DISTRICT');
}

// Returns City for specified IFSC code
exports.getCity = function(code){
    return utils.returnData(code,'CITY');
}

// Returns State for specified IFSC code
exports.getState = function(code){
    return utils.returnData(code,'STATE');
}

// Returns Contact Number for specified IFSC code
exports.getContact = function(code){
    return utils.returnData(code,'CONTACT');
}

// Returns bank's Address for specified IFSC code
exports.getAddress = function(code){
    return utils.returnData(code,'ADDRESS');
    ifsc_code = code;
}

// Returns true if bank supports UPI for specified IFSC code
exports.isUpi = function(code){
    return utils.returnData(code,'UPI');
}

// Returns true if bank supports IMPS for specified IFSC code
exports.isImps = function(code){
    return utils.returnData(code,'IMPS');
}

// Returns true if bank supports NEFT for specified IFSC code
exports.isNeft = function(code){
    return utils.returnData(code,'NEFT');
}

// Returns true if bank supports RTGS for specified IFSC code
exports.isRtgs = function(code){
    return utils.returnData(code,'RTGS');
} 