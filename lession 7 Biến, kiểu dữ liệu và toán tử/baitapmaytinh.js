function tinhtoan(pheptinh) {
    var o1 = document.getElementById('so1').value;
    var o2 = document.getElementById('so2').value;
    o1 = parseFloat(o1);
    o2 = parseFloat(o2);
    if (pheptinh === '+') {
        dapan = o1 + o2;
    }
    if (pheptinh === '-') {
        dapan = o1 - o2;
    }
    if (pheptinh === '*') {
        dapan = o1 * o2;
    }
    if (pheptinh === '/'){
        dapan = o1 / o2;
    }
    alert("ket qua là: " + dapan);
}