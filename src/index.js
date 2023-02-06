module.exports = function reverse (n) {
    let d = Math.abs(n).toString();
    let v = d.split('').reverse().join('');

    return v;
}
