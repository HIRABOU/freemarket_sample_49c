$(document).on('turbolinks:load', function () {
  var form = $("#charge-form");
  number = form.find('input[name="number"]'),
    cvc = form.find('input[name="cvc"]'),
    exp_month = form.find('input[name="exp_month"]'),
    exp_year = form.find('input[name="exp_year"]');
  Payjp.setPublicKey('pk_test_df901acb500678462a655d14');
  $(document).on("click", "#submit-button", function (e) {

    e.preventDefault();
    form.find("input[type=submit]").prop("disabled", true);

    var card = {
      number: $("#payment_card_no").val(),
      cvc: $("#payment_card_cvc").val(),
      exp_month: $("#payment_expiration_date_1i").val(),
      exp_year: $("#payment_expiration_date_2i").val(),
    };
    Payjp.createToken(card, function (s, response) {
      if (response.error) {
        alert('トークン作成エラー発生');
      }
      else {
        $(".number").removeAttr("name");
        $(".cvc").removeAttr("name");
        $(".exp_month").removeAttr("name");
        $(".exp_year").removeAttr("name");
        var token = response.id;

        form.append($('<input type="hidden" name="payjpToken" />').val(token));
        form.get(0).submit();
      }
    });
  });
});