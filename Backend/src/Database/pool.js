var mysql=require("mysql2")


const pool=mysql.createPool(
    { host:'localhost',
    port:3306,
    user:'root',
    password:'Rajgupta@1234',
    database:'testing'
})
// const pool=mysql.createPool(
//     { hostname:'ftp://vaishyasamajshaadi.com',
//     // port:3306,
//     user:'u162132502_rajgupta',
//     password:'2O+$Q93sfNx!',
//     database:'u162132502_Shaadi'
// })





module.exports=pool