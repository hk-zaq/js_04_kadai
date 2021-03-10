// 送信処理
$("#enter").on("click", function () {
  newPostRef.push({
    category: $("#category").val(),
    expense: $("#expense").val(),
    who: $("#who").val(),
    note: $("#note").val(),
  });
  $("#category").val("");
  $("#expense").val("");
  $("#who").val("");
  $("#note").val("");
});

// エンターキーで送信処理
$("#note").on("keydown", function (e) {
  console.log(e);
  if (e.keyCode == 13) {
    newPostRef.push({
      category: $("#category").val(),
      expense: $("#expense").val(),
      who: $("#who").val(),
      note: $("#note").val(),
    });
    $("#category").val("");
    $("#expense").val("");
    $("#who").val("");
    $("#note").val("");
    $(function () {
      var DoSum = function (self) {
        var user1sum = self.data("expense");
        var sum1 = 0;
        $("[data-group='" + user1sum + "']").each(function (index) {
          sum1 = sum1 + Number($(this).val());
        });
        $("#sum1" + expense).val(sum1);
      };
      $("[data-group]").change(function () {
        DoSum($(this));
      });
    });
  }
});

// 受信処理
newPostRef.on("child_added", function (data) {
  //「data」という変数にデータが入ってくる
  const v = data.val(); //「data」のデータを定義する
  const k = data.key;
  let str = "";
  str += "<tr>";
  str += "<td>" + v.category + "</td>";
  str += "<td>" + v.expense + "</td>";
  str += "<td>" + v.who + "</td>";
  str += "<td>" + v.note + "</td>";
  str += "</tr>";
  $("#mainTable").append(str);
});
