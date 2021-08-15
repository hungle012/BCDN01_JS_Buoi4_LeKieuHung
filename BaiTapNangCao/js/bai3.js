/**
 * Khối 1: input
 * num
 * 
 * Khối 2: Xử lí
 * B1: khai báo biến vào lấy giá trị sau khi nhấn button
 *  unit, tens, hundred, temp
 * B2: lấy các chữ số hàng trăm, chục, đơn vị của num
 * - lấy hàng đơn vị (unit)
 *      unit = num % 10;
 * - lấy hàng chục (tens)
 *      temp = Math.floor(num/10);
 *      tens =  Math.floor(temp/10);
 * - lấy hàng trăm (hundred)
 *      hundred = Math.floor(num/100);
 * B3: kiểm tra các chữ số đã lấy được
 * - dùng switch case lấy các đọc các số
 *      vd: 1 => một, 2 => hai,...
 * - nếu tens = 1 
 *      đọc hundred trăm mười unit
 * - nếu unit = 1 
 *      đọc hundred trăm tens mươi một
 * - ngược lại 
 *      đọc hundred trăm tens mươi unit
 * Khối 3: output
 * Xuất ra cách đọc num
 */
function docSo() {
    var num = parseInt(document.getElementById("inputNum").value);
    var unit = num % 10;
    var temp = temp = Math.floor(num/10);
    var tens = temp % 10;
    var hundred = hundred = Math.floor(num/100);
    var hundredRead = "";
    var tensRead = "";
    var unitRead = "";

    switch(hundred) {
        case 1:
            hundredRead = "Một";
            break;
        case 2:
            hundredRead = "Hai";
            break;
        case 3:
            hundredRead = "Ba";
            break;
        case 4:
            hundredRead = "Bốn";
            break;
        case 5:
            hundredRead = "Năm";
            break;
        case 6:
            hundredRead = "Sáu";
            break;
        case 7:
            hundredRead = "Bảy";
            break;
        case 8:
            hundredRead = "Tám";
            break;
        case 9:
            hundredRead = "Chín";
            break;
    }
    switch(tens) {
        case 1:
            tensRead = "một";
            break;
        case 2:
            tensRead = "hai";
            break;
        case 3:
            tensRead = "ba";
            break;
        case 4:
            tensRead = "bốn";
            break;
        case 5:
            tensRead = "năm";
            break;
        case 6:
            tensRead = "sáu";
            break;
        case 7:
            tensRead = "bảy";
            break;
        case 8:
            tensRead = "tám";
            break;
        case 9:
            tensRead = "chín";
            break;
    }
    switch(unit) {
        case 1:
            unitRead = "một";
            break;
        case 2:
            unitRead = "hai";
            break;
        case 3:
            unitRead = "ba";
            break;
        case 4:
            unitRead = "bốn";
            break;
        case 5:
            unitRead = "năm";
            break;
        case 6:
            unitRead = "sáu";
            break;
        case 7:
            unitRead = "bảy";
            break;
        case 8:
            unitRead = "tám";
            break;
        case 9:
            unitRead = "chín";
            break;
    }
    if(tens === 1) {
        if(unit === 1) {
            document.getElementById("txtRead").innerHTML = hundredRead + " trăm mười một";
        } else {
            document.getElementById("txtRead").innerHTML = hundredRead + " trăm mười " + unitRead;
        }        
    } else if(unit === 1) {
        document.getElementById("txtRead").innerHTML = hundredRead + " trăm " + tensRead + " mươi mốt";
    } else {
        document.getElementById("txtRead").innerHTML = hundredRead + " trăm " + tensRead + " mươi " + unitRead;
    }
}
document.getElementById("btnRead").onclick = docSo;