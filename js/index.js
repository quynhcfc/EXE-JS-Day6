// 0. XUẤT MẢNG
var arrayNumber = [];

var number = document.getElementById("txt-number");

document.getElementById("btn-addNumber").addEventListener("click", function () {
  if ((number.value * 1) % 1 == 0) {
    arrayNumber.push(number.value * 1);
  } else {
    alert("Nhập lại số nguyên");
  }
  document.getElementById("ketQua-Mang").innerText =
    "Mảng: " + arrayNumber.join(", ");
});

// 1. TÍNH TỔNG CÁC SỐ DƯƠNG TRONG MẢNG
function tongSoDuong(array) {
  var sum = 0;
  array.forEach(function (item) {
    if (item > 0) {
      sum = sum + item;
    }
  });
  return sum;
}
document
  .getElementById("btn-tongSoDuong")
  .addEventListener("click", function () {
    document.getElementById("ketQua-tongSoDuong").innerText =
      tongSoDuong(arrayNumber);
  });

// 2. ĐẾM SỐ LƯỢNG SỐ DƯƠNG TRONG MẢNG
function demSoDuong(array) {
  var count = 0;
  array.forEach(function (item) {
    if (item > 0) {
      count++;
    }
  });
  return count;
}
document
  .getElementById("btn-demSoDuong")
  .addEventListener("click", function () {
    document.getElementById("ketQua-soLuongSoDuong").innerText =
      demSoDuong(arrayNumber);
  });

// 2.1 ĐẾM SỐ LƯỢNG SỐ ÂM TRONG MẢNG
function demSoAm(array) {
  var count = 0;
  array.forEach(function (item) {
    if (item < 0) {
      count++;
    }
  });
  return count;
}

// 3. TÌM SỐ NHỎ NHẤT TRONG MẢNG
function soNhoNhat(array) {
  var min = array[0];
  array.forEach(function (item) {
    if (min > item) {
      min = item;
    }
  });
  return min;
}
document.getElementById("btn-minNumber").addEventListener("click", function () {
  document.getElementById("ketQua-soNhoNhat").innerText =
    soNhoNhat(arrayNumber);
});

// 4. TÌM SỐ DƯƠNG NHỎ NHẤT TRONG MẢNG
function soDuongNhoNhat(array) {
  var min = -1;
  array.forEach(function (item) {
    if ((min == -1 || min > item) && item > 0) {
      min = item;
    }
  });
  return min;
}
document
  .getElementById("btn-soDuongNhoNhat")
  .addEventListener("click", function () {
    document.getElementById("ketQua-soDuongNhoNhat").innerText =
      soDuongNhoNhat(arrayNumber);
  });

// 5. TÌM SỐ CHẴN CUỐI CÙNG TRONG MẢNG
function soChanCuoiCung(array) {
  var soChan;
  for (var i = array.length - 1; 0 <= i; --i) {
    if (array[i] % 2 == 0) {
      soChan = array[i];
      break;
    }
  }
  return soChan;
}
document
  .getElementById("btn-soChanCuoiCung")
  .addEventListener("click", function () {
    document.getElementById("ketQua-soChanCuoiCung").innerText =
      soChanCuoiCung(arrayNumber);
  });

// 6. ĐỔI CHỖ 2 GIÁ TRỊ TRONG MẢNG
document.getElementById("btn-doiCho").addEventListener("click", function () {
  var vitri1 = document.getElementById("vitri1").value * 1 - 1;
  var vitri2 = document.getElementById("vitri2").value * 1 - 1;

  var doiCho;

  doiCho = arrayNumber[vitri1];
  arrayNumber[vitri1] = arrayNumber[vitri2];
  arrayNumber[vitri2] = doiCho;

  document.getElementById("ketQua-doiCho").innerText =
    "Mảng mới: " + arrayNumber.join(", ");
});

// 7. SỐ NGUYÊN TỐ TRONG MẢNG
document
  .getElementById("btn-soNguyenTo")
  .addEventListener("click", function () {
    var mangSoNguyenTo = [];
    arrayNumber.forEach(function (item) {
      var flag = true;

      if (item < 2) {
        flag = false;
      } else if (item == 2) {
        flag = true;
      } else if (item % 2 == 0) {
        flag = false;
      } else {
        for (var i = 3; i <= Math.sqrt(item); i += 2) {
          if (item % i == 0) {
            flag = false;
            break;
          }
        }
      }

      if (flag == true) {
        mangSoNguyenTo.push(item);
      }
    });
    document.getElementById("ketQua-soNguyenToDauTien").innerText =
      mangSoNguyenTo.shift();
  });

// 8. SẮP XẾP TĂNG DẦN
var mangSapXep = [];
document
  .getElementById("btn-sapXepTang")
  .addEventListener("click", function () {
    mangSapXep = arrayNumber;
    document.getElementById("ketQua-sapXepTang").innerText = mangSapXep
      .sort(function (a, b) {
        return a - b;
      })
      .join(", ");
  });

// 9. ĐẾM CÓ BAO NHIÊU SỐ NGUYÊN SAU KHI NHẬP THÊM 1 MẢNG SỐ THỰC
var soThuc = document.getElementById("txt-soThuc");
var mangSothuc = [];
var mixMang = "";
document
  .getElementById("btn-themSoThuc")
  .addEventListener("click", function () {
    mangSothuc.push(soThuc.value * 1);
    mixMang = arrayNumber.concat(mangSothuc);
    document.getElementById("ketQua-themSoThuc").innerText =
      "Mảng mới: " + mixMang.join(", ");
  });

document
  .getElementById("btn-demSoNguyen")
  .addEventListener("click", function () {
    var count = 0;
    mixMang.forEach(function (item) {
      if (item % 1 == 0) {
        count++;
      }
    });
    document.getElementById("ketQua-soLuongSoNguyen").innerText = count;
  });

// 10. SO SÁNH SỐ LƯỢNG SỐ ÂM VÀ SỐ DƯƠNG
document.getElementById("btn-soSanh").addEventListener("click", function () {
  var soLuongSoAm = demSoAm(mixMang);
  var soLuongSoDuong = demSoDuong(mixMang);

  if (soLuongSoAm > soLuongSoDuong) {
    document.getElementById("ketQua-soSanhAmDuong").innerText =
      "Số âm nhiều hơn";
  } else if (soLuongSoAm < soLuongSoDuong) {
    document.getElementById("ketQua-soSanhAmDuong").innerText =
      "Số dương nhiều hơn";
  } else {
    document.getElementById("ketQua-soSanhAmDuong").innerText = "Bằng nhau";
  }
});
