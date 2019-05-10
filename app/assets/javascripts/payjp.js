

document.addEventListener(
  "DOMContentLoaded", e => {
    if (document.getElementById("token_submit") != null) { //token_submitというidがnullの場合、下記コードを実行しない
      let btn = document.getElementById("token_submit"); //IDがtoken_submitの場合に取得されます
      var form = $("#charge-form");
      number = form.find('input[name="card_number"]'),
        cvc = form.find('input[name="cvc"]'),
        exp_month = form.find('input[name="exp_month"]'),
        exp_year = form.find('input[name="exp_year"]');

      btn.addEventListener("click", e => { //ボタンが押されたときに作動します
        e.preventDefault(); //ボタンを一旦無効化します
        Payjp.setPublicKey("pk_test_df901acb500678462a655d14"); //ここに公開鍵を直書き
        let card = {
          number: parseInt(document.getElementById("payment_card_no").value),
          cvc: parseInt(document.getElementById("payment_card_security_code").value),
          exp_month: parseInt(document.getElementById("payment_card_expire_mm").value),
          exp_year: parseInt(document.getElementById("payment_card_expire_yy").value)
        }; //入力されたデータを取得します。
        Payjp.createToken(card, function (status, response) {
          console.log(response.error)
          console.log(card)
          if (status === 200) { //成功した場合
            $("#payment_card_no").removeAttr("name");
            $("#payment_card_security_code").removeAttr("name");
            $("#payment_card_expire_mm").removeAttr("name");
            $("#payment_card_expire_yy").removeAttr("name"); //データを自サーバにpostしないように削除
            $("#charge-form").append(
              $('<input type="hidden" name="payjp-token">').val(response.id)
            ); //取得したトークンを送信できる状態にします
            document.inputForm.submit();
            alert("カード情報を登録しました。"); //確認用
          } else {
            alert("カード情報が正しくありません。"); //確認用
          }
        });
      });
    }
  },
  false
);

// $(document).on('turbolinks:load', function () {
//   console.log("a")
//   console.log(response)
//   console.log(card)
//   var form = $("#charge-form");
//   number = form.find('input[name="card_number"]'),
//     cvc = form.find('input[name="cvc"]'),
//     exp_month = form.find('input[name="exp_month"]'),
//     exp_year = form.find('input[name="exp_year"]');
//   $("#charge-form").on("click", "#token_submit", function (e) {
//     Payjp.setPublicKey("pk_test_df901acb500678462a655d14");
//     e.preventDefault();
//     form.find("input[type=submit]").prop("disabled", true);
//     var card = {
//       number: $("#payment_card_no").val(),
//       cvc: $("#payment_card_security_code").val(),
//       exp_month: $("#payment_card_expire_mm").val(),
//       exp_year: $("#payment_card_expire_yy").val()
//     };
//     Payjp.createToken(card, function (s, response) {

//       if (response.error) {
//         alert("error")
//         form.find('button').prop('disabled', false);
//       }
//       else {
//         $(".number").removeAttr("name");
//         $(".cvc").removeAttr("name");
//         $(".exp_month").removeAttr("name");
//         $(".exp_year").removeAttr("name");
//         var token = response.id;
//         form.append(`<input type="hidden" name="pay_id" class="payjp-token" value=${token} />`)
//         form.get(0).submit();
//       }
//     });
//   });
// });
