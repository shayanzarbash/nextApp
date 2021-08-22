function multiply(a, b) {
    var aNumRows = a.length, aNumCols = a[0].length,
        bNumRows = b.length, bNumCols = b[0].length,
        m = new Array(aNumRows);  // initialize array of rows
    for (var r = 0; r < aNumRows; ++r) {
        m[r] = new Array(bNumCols); // initialize the current row
        for (var c = 0; c < bNumCols; ++c) {
            m[r][c] = 0;             // initialize the current cell
            for (var i = 0; i < aNumCols; ++i) {
                m[r][c] += a[r][i] * b[i][c];
            }
        }
    }
    return m;
}

function display(m) {
    for (var r = 0; r < m.length; ++r) {
        document.write('&nbsp;&nbsp;' + m[r].join(' ') + '<br />');
    }
}



// let num1 = document.querySelector(".num1").value;
// let num2 = document.querySelector(".num2").value;
// let num3 = document.querySelector(".num3").value;
// let num4 = document.querySelector(".num4").value;


// function get() {
//     num1 = document.querySelector(".num1").value;
//     num2 = document.querySelector(".num2").value;
//     num3 = document.querySelector(".num3").value;
//     num4 = document.querySelector(".num4").value;
// }


var a = [[3, 6], [7, 2]],
    b = [[7, 2], [6, 5]];

document.write('matrix a:<br />');
// display(a);
document.write('matrix b:<br />');
// display(b);
document.write('a * b =<br />');
console.log(multiply(a, b));
