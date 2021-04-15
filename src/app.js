var matrix = [[0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3]];
var count = 0;
for (var i = 0; i < matrix[0].length; i++)
    if (matrix[0][i] != 0)
        count = count + matrix[0][i];
for (var i = 1; i < matrix.length; i++)
    for (var j = 0; j < matrix[0].length; j++)
        if (matrix[i][j] != 0 && matrix[i - 1][j] != 0)
            count = count + matrix[i][j];
console.log(count);
