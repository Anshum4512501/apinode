let client  = require('../configdb/config.js')
client.connect().then((res)=>{
    console.log("You are connected now");
      
}).then((res)=>{
    console.log("res",res);
}).catch((err)=>{
    console.log("Sorry Try Another time");
})
