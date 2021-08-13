/**
 * Khối 1: input
 * canh1, canh2, canh3
 * 
 * Khối 2: xử lí
 * B1: khai báo biến vào lấy giá trị sau khi nhấn button
 * B2: kiểm tra
 * - nếu canh1 = canh2 = canh3
 *      tam giác đều
 * - nếu canh1 = canh2 || canh2 = canh3
 *      tam giác cân
 * - nếu canh1*canh1 = canh2*canh2 + canh3*canh3
 *      tam giác vuông
 * - ngược lại
 *      tam giác thường
 * 
 * Khối 3: output
 * Là tam giác gì
 */

document.getElementById("btnCheck").onclick =
function() {
    var canh1 = parseInt(document.getElementById("inputCanh1").value);
    var canh2 = parseInt(document.getElementById("inputCanh2").value);
    var canh3 = parseInt(document.getElementById("inputCanh3").value);

    if (canh1 == canh2 && canh2 == canh3 && canh1 == canh3) {
        document.getElementById("txtNoti").innerHTML = "Đây là tam giác ĐỀU";
    } else if (canh1 == canh2 || canh2 == canh3 || canh1 == canh3) {
        document.getElementById("txtNoti").innerHTML = "Đây là tam giác CÂN";
    } else if (canh1*canh1 == canh2*canh2 + canh3*canh3 || canh2*canh2 == canh1*canh1 + canh3*canh3 || canh3*canh3 == canh2*canh2 + canh1*canh1) {
        document.getElementById("txtNoti").innerHTML = "Đây là tam giác VUÔNG";
    } else {
        document.getElementById("txtNoti").innerHTML = "Đây là tam giác THƯỜNG";
    }
}