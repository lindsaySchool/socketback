//alles dat live komt, komt hier

//make the go function
module.exports.go = (server)=>{
    const Primus = require('primus');
    const primus = new Primus(server, {
        /* options */
    });

    //check if primus connection oke, then console.log
    primus.on('connection', function connection(spark) {
        console.log('connection made (:');

        //check if data received from client, then console.log
        spark.on('data', function (data) {
            console.log('received data from client: ', data);
            if(data.action === "newMessage"){
                primus.write({
                    action: "newMessage",
                    message: data.data
                })
            }
        });
    });

    
};