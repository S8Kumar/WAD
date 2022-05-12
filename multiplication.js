function createTable() {

    let input1  = $('#input1').val();
    let input2  = $('#input2').val();

    let t1 = document.getElementById("table1");
    let t2 = document.getElementById("table2");
    let t3 = document.getElementById("table3");
 
    let str1 = input1.split('#').map(Number);
    let str2 = input2.split('#').map(Number);

    let r1 = str1[0], c1 = str1[1], start1 = str1[2];
    let r2 = str2[0], c2 = str2[1], start2 = str2[2];

    let m1 = [], m2 = [];

    for (let i=0; i<r1; i++) {
        let temp1 = [];
        var x1 = t1.insertRow(i);
        num1 = start1*(i+1)
        for (let j=0; j<c1; j++) {
            var y1 = x1.insertCell(j);
            y1.innerHTML = num1;
            temp1.push(num1);
            num1 += i+1;
        }
        m1.push(temp1);
    }

    for (let i=0; i<r2; i++) {
        let temp2 = [];
        var x2 = t2.insertRow(i);
        num2 = start2*(i+1)
        for (let j=0; j<c2; j++) {
            var y2 = x2.insertCell(j);
            y2.innerHTML = num2;
            temp2.push(num2);
            num2 += i+1;
        }
        m2.push(temp2);
    }

    var res = multiplyMatrices(m1,m2)
  
    if (start1 == start2) {
        for (let i=0; i<r1; i++) {
            var x3 = t3.insertRow(i);
            num1 = start1*(i+1)
            for (let j=0; j<c1; j++) {
                var y3 = x3.insertCell(j);
                y3.innerHTML = num1;
                num1 += i+1;
            }
        }
    }
    else {
        for (let i = 0; i < r1; i++) {
            var x3 = t3.insertRow(i);
            num1 = start1*(i+1)
            num2 = start2*(i+1)
            for (let j=0; j<c1; j++) {
                var y3 = x3.insertCell(j);
                y3.innerHTML = num1*num2;
                //y3.innerHTML = result[i][j];
                num1 += i+1;
                num2 += i+1;
            }
        }
    }

}


function multiplyMatrices(m1, m2) {
    var result = [];
    for (var i = 0; i < m1.length; i++) {
        result[i] = [];
        for (var j = 0; j < m2[0].length; j++) {
            var sum = 0;
            for (var k = 0; k < m1[0].length; k++) {
                sum += m1[i][k] * m2[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}