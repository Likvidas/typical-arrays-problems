exports.min = function min(array) {
    if (arguments.length === 0 || array.length === 0) return 0;

    let minimum = Math.min(...array);

    return minimum;
}

exports.max = function max(array) {
    if (arguments.length === 0 || array.length === 0) return 0;

    let maximum = Math.max(...array);

    return maximum;
}

exports.avg = function avg(array) {
    if (arguments.length === 0 || array.length === 0) return 0;

    let averege = array.reduce((accum, current) => accum + current) / array.length;

    return averege;
}
