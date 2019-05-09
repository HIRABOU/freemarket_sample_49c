fileCount = 0;
$(function(){

  function previewImage(i, imageFile){
    var reader = new FileReader();
    fileCount += 1;
    var img = new Image();
    var html = `<div class="preview_box_container id=${i}"} >
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
    reader.onload = function(){
      $('.preview').append(image_box);
      img.src = reader.result;
      img.width = 114
      img.height = 116
      img.setAttribute("id", "image_" + i)
      def.resolve(image_box);
    };
    reader.readAsDataURL(imageFile);
    return def.promise();
  }



  $('#images-file1').on('change',function(){
    files = this.files;
    var d = (new $.Deferred()).resolve();
    $.each(files,function(i,file){
      console.log(file)
      if (fileCount >= 9){
        $('#images_field').css('display','none');
      };
      if (fileCount >= 10) {
        document.getElementById("itemimage_uproad_over").style.display="block";
        return false;
      };
      d = d.then(function(){return previewImage(i, file)});
      d = d.then(function(){return deleteImage(i)});
    });
  })


  function deleteImage(i){
    $(document).on('click','.preview__delete',function(){
      var list = $(this).parent().parent();
      list.remove();
      delete FileList[i];
    });
  }






  // //previewリストを削除。
  // $(document).on('click','.preview__delete',function(){
  //   //押された削除ボタンの親要素(リスト本体)を取得。
  //   var list = $(this).parent().parent();
  //   //リストの番号を取得。
  //   var parentValue = list.attr('id');
  //   console.log(parentValue)
  //   // var file = files[parentValue]
  //   //両方を削除。これでpreviewで出している画像とinputで送る画像を消すことで、差異を無くしている。
  //   // label.remove();
  //   list.remove();
  //   // file.remove();
  // });
});

