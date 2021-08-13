/**
 * Khối 1: input
 * num1, num2, num3
 * 
 * Khối 2: xử lí
 * B1: khai báo biến vào lấy giá trị sau khi nhấn button
 * B2: tạo biến đếm số chãn và biến đếm số lẻ
 * countchan, countle
 * B3: kiểm tra num1, num2, num3 
 * - nếu num1 là số chẵn
 *      countchan+=1
 * - ngược lại
 *      countle+=1 
 * - nếu num2 là số chẵn
 *      countchan+=1
 * - ngược lại
 *      countle+=1 
 * - nếu num3 là số chẵn
 *      countchan+=1
 * - ngược lại
 *      countle+=1 
 *      
 * Khối 3: output
 * số lượng số chẵn, lẻ
 */

function countChanLe() {
    var num1 = parseInt(document.getElementById("inputNumber1").value);
    var num2 = parseInt(document.getElementById("inputNumber2").value);
    var num3 = parseInt(document.getElementById("inputNumber3").value);
    var countChan = 0;
    var countLe = 0;

    if (num1 % 2 == 0) {
        countChan+=1;
    } else {
        countLe+=1;
    }
    if (num2 % 2 == 0) {
        countChan+=1;
    } else {
        countLe+=1;
    }
    if (num3 % 2 == 0) {
        countChan+=1;
    } else {
        countLe+=1;
    }

    document.getElementById("txtNotifi").innerHTML = "có " + countChan + " số chẵn và " + countLe + " số lẻ";
}

document.getElementById("btnCount").onclick = countChanLe;