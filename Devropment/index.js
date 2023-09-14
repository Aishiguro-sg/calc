//ボタンが押された時　アクションを起こす
const btn = document.getElementById("button");

function calculate() {

        //テキストを入力した時　アクションを起こす// input要素から計算式を取得
        const textForm = document.getElementById("textForm").value;
        //const e = document.getElementById("textForm");
       // let textForm = e.value;
    const resultForm = document.getElementById("resultForm");
  
    // 計算式をスペースで分解
    var tokens = textForm.split(/ +/);
  
    // 計算結果を格納する変数
    var result = 0;
  
    // 最初のオペランドを初期値として設定
    if (tokens.length !== 3) {
       resultForm.value = "計算式が不正です";
        //document.getElementById("resultForm").value = "計算式が不正です";
        return;
    }
  
    // 計算を実行
    let value1 = parseInt(tokens[0]);
    let operator = tokens[1];
    var value2 = parseInt(tokens[2]);
  
      switch (operator) {
        case '+':
          result = value1 + value2;
          break;
        case '-':
          result = value1 - value2;
          break;
        case '*':
          result = value1 * value2;
          break;
        case '/':
          if (value2 !== 0) {
            result = value1 / value2;
          } else {
            // ゼロで割り算しようとした場合のエラーメッセージ
            document.getElementById("resultForm").value = "error";
            return;
          }
          break;
      }
         // 計算結果をHTMLに表示
    document.getElementById("resultForm").value = result;
    }