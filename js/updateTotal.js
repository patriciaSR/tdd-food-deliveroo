

function updateTotal(price, total, action){
    const IVA = 0.21;
    if(typeof price === 'number') {
    if(action === 'sum') {
        total += price;
    } else {
        total -= price;
    }
    total *= IVA;
    return Math.abs(total);
    } else {
        throw new Error('Not a valid format')
    };
};

export { updateTotal };