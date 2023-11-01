'use strict'

let executeQuery = (mysqlPool,query) => {
    return new Promise((resolve,reject)=>{
        mysqlPool.query(query, (error, results, fields) => {
            if (error) {
                console.log(`Mysql Error ===> ${JSON.stringify(error)}`);
                return reject({errorcode:1004,reason:'executeQuery failed'});
            } else {
                console.log('results ===> ',results[0]);
                return resolve(results[0]);
            }
        });
    });
}

module.exports = {
    executeQuery:executeQuery
}