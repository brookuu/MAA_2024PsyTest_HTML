document.getElementById("submitBtn").addEventListener("click", function() {
    // 獲取答案值
    var answer1 = parseInt(document.querySelector('input[name="question1"]:checked').value);
    var answer2 = parseInt(document.querySelector('input[name="question2"]:checked').value);

    // 計算總分
    var totalScore = answer1 + answer2;

    // 顯示結果
    if (totalScore >= 1) {
        alert("你是一個外向的人！");
    } else {
        alert("你是一個內向的人！");
    }
});