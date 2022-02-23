module.exports = function reverse (n) {
    n = n.toString().split('').reverse();

    if(n[0] === '0') {
        n.splice(0, 1);
    }else if(n.slice(-1) == '-') {
        n.splice(-1, 1);
    }

    return n.join('');
}


