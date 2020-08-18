# IFSC Finder
IFSC Finder is module based on Razorpay's API to get IFSC details. It provides simple way to get detailed as well as specific information for specific IFSC code.

# Example Usage 
```JS
var ifsc = require('ifsc-finder');
```

# Documentation
## Basic Usage
If you want to get details all details for specific IFSC code following function will be userfull.

```JS
fc.get(IFSC_CODE).then(function(res){
    console.log(res);
})
```
Different functions are avaiable to get specific details like Bank Name, Bank Code, City, State, etc. Below is example to get Bank Name for ```IFSC_Code```.

```JS
fc.getBankName(IFSC_CODE).then(function(res){
    console.log(res);
})
```

## Functions to get specific details
- ``` getBankName(IFSC_Code)``` - Returns Bank Name for specified IFSC code
- ``` getBranchName(IFSC_Code)``` - Returns Branch Name for specified IFSC code
- ``` getBankCode(IFSC_Code)``` - Returns Bank Code for specified IFSC code
- ``` getMicr(IFSC_Code)``` - Returns bank's MICR Code for specified IFSC code
- ``` getDistrict(IFSC_Code)``` - Returns District for specified IFSC code
- ``` getCity(IFSC_Code)``` - Returns City for specified IFSC code
- ``` getState(IFSC_Code)``` - Returns State for specified IFSC code
- ``` getContact(IFSC_Code)``` - Returns Contact Number for specified IFSC code
- ``` getAddress(IFSC_Code)``` - Returns bank's Address for specified IFSC code
- ``` isUpi(IFSC_Code)``` - Returns true if bank supports UPI for specified IFSC code
- ``` isImps(IFSC_Code)``` - Returns true if bank supports IMPS for specified IFSC code
- ``` isNeft(IFSC_Code)``` - Returns true if bank supports NEFT for specified IFSC code
- ``` isRtgs(IFSC_Code)``` - Returns true if bank supports RTGS for specified IFSC code

