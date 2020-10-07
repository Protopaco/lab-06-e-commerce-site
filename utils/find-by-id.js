

export function findById(anArray, anId){

    for (let item of anArray){
        if (item.id === anId) {return item}
    }

    return null;
}