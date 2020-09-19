
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let result = [];
    let i = 0;
    if (matrix === undefined)
        return result;
    matrix.forEach(element => {
        if (i % 2 === 0) {
            result = result.concat(element);
        } else {
            result = result.concat(element.reverse());
        }
        i++;
    });
    return result;
}
