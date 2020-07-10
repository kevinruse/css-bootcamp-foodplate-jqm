function getUserInitStatus() {
    let fruit = {
        'eaten': 0,
        'met': 'false',
        'left': 0
    };
    let protein = {
        'eaten': 0,
        'met': 'false',
        'left': 0
    };
    let veg = {
        'eaten': 0,
        'met': 'false',
        'left': 0
    };
    let grain = {
        'eaten': 0,
        'met': 'false',
        'left': 0
    };
    let stats = [{'fruit': fruit}, {'protein' : protein}, {'veg': veg}, {'grain' : grain}];
    return stats;
}
export { getUserInitStatus }

