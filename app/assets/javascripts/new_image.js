$(function(){

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
    var html = `<div class="preview_box_container" >
        <div class="preview__edit">
          編集
        </div>
        <div class="preview__delete">
          削除
        </div>
      </div>`
    var image_box = $('<div class="sell_image_box">');
    image_box.append(img)
    image_box.append(html)
    var def =$.Deferred();
    reader.onload = function(e){
      $('.preview').append(image_box);
      img.src = e.target.result;
      img.width = 114
      img.height = 116
      def.resolve(image_box);
    };
    var list = $('.sell_image_box');
    if(list.length >= 9){
        $('#images_field').css('display','none');
     }
    reader.readAsDataURL(imageFile);
    return def.promise();

    
  }

  //previewリストを削除。
  $(document).on('click','.preview__delete',function(){
    //押された削除ボタンの親要素(リスト本体)を取得。
    var list = $(this).parent().parent();
    //リストの番号を取得。
    var parentValue = list.attr('id');
    //リストと同じ番号のinputを取得。
    var label =$('#delete-'+parentValue);
    //両方を削除。これでpreviewで出している画像とinputで送る画像を消すことで、差異を無くしている。
    label.remove();
    list.remove();
  });
});