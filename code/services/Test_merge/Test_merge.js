function Test_merge(req, resp){
    
    if(typeof merge === 'object'){
        if(Object.getOwnPropertyNames(merge).length === 0){
            log("False");
            resp.error("False");
        } else{
            log("True");
            resp.success("True");
        }

    } else if(typeof merge === 'function'){
        var tempPropObj = Object.getOwnPropertyNames(merge);
        if (merge.prototype && typeof merge.prototype.constructor  === 'function'){
            log("True");
            resp.success("True");
        } else {
            log("False");
            resp.error("False");
        }
    }

}
