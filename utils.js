
const axios = require('axios');
var conf = require('./config');
var ifsc_code = null;

// Make HTTP request to Razorpay to get IFSC details
function callRazorpay(code) {
    return axios.get(conf.base_url + ifsc_code)
    .then(function (response) {
        switch (response) {
            case "Not Found":
                conf.response.status = 404;
                break;

            default:
                conf.response.status = 200;
                break;
        }
       conf.response.data = response.data;
       return conf.response;
    })
    .catch(function (error) {
        conf.response.status = error.response.status;
        conf.response.err = error.response.statusText;
        return conf.response;
    })
}

// Find requested data from IFSC details
exports.returnData= function (code,id){
    /**
     * code : IFSC code
     * id : Key of data requested e.g BRANCH, STATE,etc
     */
    data_id = id;
    ifsc_code = code;
    return callRazorpay().then((response)=>{
        try{
            if(id == null){
                return response.data;
            }else{
                return response.data[data_id];
            }
        }catch (err){
            return null;
        }  
    })
}
