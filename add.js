export default function(...args){
    return args.reduce((sum, value) => {
        if(typeof value !== 'number'){
            throw new Error(value + ' is not a number');
        }
        if(!Number.isFinite(value)){
            throw new Error('one of the arguments is not finite bumber');
        }
        return sum + value;
    }, 0);
}
