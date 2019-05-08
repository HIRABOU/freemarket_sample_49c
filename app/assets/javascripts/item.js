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
  function separate(num){
    // 文字列にする
    num = String(num);
    var len = num.length;

    // 再帰的に呼び出す
    if(len > 3){
        // 前半を引数に再帰呼び出し + 後半3桁
        return separate(num.substring(0,len-3))+','+num.substring(len-3);
    } else {
        return num;
    }
  }

  // 手数料と利益計算
  $("#item_price").on('keyup',$("#item_price"), function() {
    var price = $(this).val();
    var mercari_margin = price * 0.1 ;
    var mercari_margin = Math.floor(mercari_margin);
    var saler_margin = price - mercari_margin;
    var mercari_margin = separate(mercari_margin);
    var saler_margin = separate(saler_margin);
  
    if(price >= 300 && price <= 9999999){
      $('#price_fee').text("¥"+mercari_margin);
      $('#sales_profit').text("¥"+saler_margin);
    }
    else{
      $('#price_fee').text("-");
      $('#sales_profit').text("-");
    }
  });


  






  $('#images-file1').on('change',function(e){
    var files = e.target.files;
    var d = (new $.Deferred()).resolve();
    $.each(files,function(i,file){
      d = d.then(function(){return previewImage(file)});
    });
  })

  var previewImage = function(imageFile){
    var reader = new FileReader();
    var img = new Image();
    var def =$.Deferred();
    reader.onload = function(e){
      $('#images_field').append(img);
      img.src = e.target.result;
      img.width = 114
      img.height = 116
      def.resolve(img);
    };
    reader.readAsDataURL(imageFile);
    return def.promise();
  }

});