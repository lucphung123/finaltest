function numberOneTriangle(n) {
  if (n < 1 || n > 10) {
    console.error("Vui lòng nhập số trong khoảng từ 1 đến 10");
    return;
  }
  let output = "";
  for (var i = 0; i <= n; i++) {
    for (var j = 0; j <= i; j++) {
      output += " * ";
    }
    output += "<br/>";
  }
  document.write(output);
}

numberOneTriangle(10);
