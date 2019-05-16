$(function(){
  // indexページのスライダー
  var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  });

  // 数字をカンマ区切り
  function separate(num) {
    // 文字列にする
    num = String(num);
    var len = num.length;

    // 再帰的に呼び出す
    if (len > 3) {
      // 前半を引数に再帰呼び出し + 後半3桁
      return separate(num.substring(0, len - 3)) + ',' + num.substring(len - 3);
    } else {
      return num;
    }
  }

  // 手数料と利益計算
  $("#item_price").on('keyup', $("#item_price"), function(){
    var price = $(this).val();
    var mercari_margin = price * 0.1;
    var mercari_margin = Math.floor(mercari_margin);
    var saler_margin = price - mercari_margin;
    var mercari_margin = separate(mercari_margin);
    var saler_margin = separate(saler_margin);

    if (price >= 300 && price <= 9999999) {
      $('#price_fee').text("¥" + mercari_margin);
      $('#sales_profit').text("¥" + saler_margin);
    }
    else {
      $('#price_fee').text("-");
      $('#sales_profit').text("-");
    }
  });


  //小ジャンルに添付するhtml
  function appendSecondCategory(secondCategories) {
    var html=`<option value="">---</option>`;

    $.each(secondCategories, function(i, secondCategory){
      html += `<option value="${secondCategory.id}" data-ancestry="${secondCategory.ancestry}">${secondCategory.name}</option>`;
    });
    return html;
  }

  //孫ジャンルに添付するhtml
  function appendThirdCategory(thirdCategories) {
    var html=`<option value="">---</option>`;

    $.each(thirdCategories, function(i, thirdCategory){
      html += `<option value="${thirdCategory.id}" data-ancestry="${thirdCategory.ancestry}">${thirdCategory.name}</option>`;
    });
    return html;
  }

  //category-select_box
  $("#selectitembox").change(function() {
    let firstCat = $(this).val();
    $.ajax({
      type: "get",
      url: "/api/items/new",
      data: {
        firstCat: firstCat
      },
      dataType: "json"
    })
    .done(function(secondCategories){
      $('#selectitembox1').empty();
      let html = appendSecondCategory(secondCategories);
      $('#selectitembox1').append(html);
      $('#selectitembox2').val("");
      $('#selectitembox2').empty();
      $('#selectitembox2').append(`<option value="">---</option>`);
    })
    .fail(function(){
      alert('error.');
    });

    if ($(this).val() !== "") {
      const parent_id = ($(this).val())
      $("#selectitembox1").show(parent_id);
    } else {
      $("#selectitembox1").hide();
      $("#selectitembox2").hide();
      $("#selectitembox1").val("");
      $("#selectitembox2").val("");
    }
  });

  $("#selectitembox1").change(function() {
    let firstCat = $("#selectitembox").val();
    let secondCat = $(this).val();
    console.log(secondCat)
      $.ajax({
        type: "get",
        url: "/api/items/new",
        data: {
          firstCat: firstCat,
          secondCat: secondCat
        },
        dataType: "json"
      })
      .done(function(thirdCategories) {
        $('#selectitembox2').empty();
        let html = appendThirdCategory(thirdCategories);
        $('#selectitembox2').append(html);
      })
      .fail(function(){
        alert('error.');
      });

    if ($(this).val() !== "") {
      $("#selectitembox2").show();
    } else {
      $("#selectitembox2").hide();
      $("#selectitembox2").val("");
    }
  });



  $('#match-height').matchHeight();

});