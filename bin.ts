import cluster from "cluster"
import os from "os"
import {app} from "./index.js"
const cpus = os.cpus().length;

if(cluster.isPrimary){
    for(let i=0; i<cpus; i++){
        cluster.fork()
    }
}else{
    app.listen(3000,()=>console.log(`process ${process.pid}`))
}