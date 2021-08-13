/**
 * Khối 1: input
 * num1, num2, num3
 * 
 * Khối 2: Xử lí
 * B1: khai báo biến vào lấy giá trị sau khi nhấn button
 * B2: so sánh các số 
 * - nếu num1 < num2 && num1 < num3 && num2 < num3 
 *      sắp xếp: num1, num2, num3
 * - nếu num1 < num2 && num1 < num3 && num2 > num3
 *      sắp xếp: num1, num3, num2
 * - nếu num1 > num2 && num1 < num3 
 *      sắp xếp: num2, num1, num3
 * - nếu num1 > num2 && num1 > num3 && num2 < num3
 *      sắp xếp: num2, num3, num1 
 * - nếu num1 < num2 && num1 > num3 
 *      sắp  xếp: num3, num1, num2
 * - nếu num1 > num2 && num1 > num3 && num2 > num3
 *      sắp xếp: num3, num2, num1
 * - ngược lại (else)
 *      nhập lại số hợp lệ
 * 
 * Khối 3: output
 * Sắp sếp theo thứ tự tăng dần
 */

function sortNum() {
    var num1 = parseInt(document.getElementById("inputNum1").value);
    var num2 = parseInt(document.getElementById("inputNum2").value);
    var num3 = parseInt(document.getElementById("inputNum3").value);

    if (num1 <= num2 && num1 <= num3 && num2 <= num3) {
        document.getElementById("txtSort").innerHTML = "sắp xếp theo thứ tự tăng dần: " + num1 +", " + num2 + ", " + num3;
    } else if (num1 <= num2 && num1 <= num3 && num2 >= num3) {
        document.getElementById("txtSort").innerHTML = "sắp xếp theo thứ tự tăng dần: " + num1 +", " + num3 + ", " + num2;
    } else if (num1 >= num2 && num1 <= num3 && num2 <= num3) {
        document.getElementById("txtSort").innerHTML = "sắp xếp theo thứ tự tăng dần: " + num2 +", " + num1 + ", " + num3;
    } else if (num1 >= num2 && num1 >= num3 && num2 <= num3) {
        document.getElementById("txtSort").innerHTML = "sắp xếp theo thứ tự tăng dần: " + num2 +", " + num3 + ", " + num1;
    } else if (num1 <= num2 && num1 >= num3 && num2 >= num3) {
        document.getElementById("txtSort").innerHTML = "sắp xếp theo thứ tự tăng dần: " + num3 +", " + num1 + ", " + num2;
    } else if (num1 >= num2 && num1 >= num3 && num2 >= num3) {
        document.getElementById("txtSort").innerHTML = "sắp xếp theo thứ tự tăng dần: " + num3 +", " + num2 + ", " + num1;
    } else {
        document.getElementById("txtSort").innerHTML = "vui lòng nhập đủ 3 số!";
    }
}
document.getElementById("btnSort").onclick = sortNum;