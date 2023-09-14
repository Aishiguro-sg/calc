//テキストを入力した時　アクションを起こす
const e = document.getElementById("textForm");
let textForm = e.value;
let textForms = textForm.split(/ +/);


//ボタンが押された時　アクションを起こす
const btn = document.getElementById("button");

//onclick
function calculate() {
    // input要素から計算式を取得
    var expression = document.getElementById("textForm").value;
  
    // 計算式を分解して演算子とオペランドに分ける
    var tokens = expression.split(/([\+\-\*\/])/);
  
    // 計算結果を格納する変数
    var result = 0;
    var operator = '';
    
    // 最初のオペランドを初期値として設定
    if (tokens.length > 0) {
      result = parseFloat(tokens[0]);
    }
  
    // 計算を実行
    for (var i = 1; i < tokens.length; i += 2) {
      operator = tokens[i];
      var operand = parseFloat(tokens[i + 1]);
      
      switch (operator) {
        case '+':
          result += operand;
          break;
        case '-':
          result -= operand;
          break;
        case '*':
          result *= operand;
          break;
        case '/':
          if (operand !== 0) {
            result /= operand;
          } else {
            // ゼロで割り算しようとした場合のエラーメッセージ
            document.getElementById("resultForm").textContent = "ゼロで割ることはできません";
            return;
          }
          break;
      }
    }
  
    // 計算結果をHTMLに表示
    document.getElementById("resultForm").textContent = "計算結果: " + result;
  }