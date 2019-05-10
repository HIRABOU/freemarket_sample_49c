fileCount = 0;
$(function(){
  function previewImage(i, imageFile){
    var reader = new FileReader();
    fileCount += 1;
    var img = new Image(114, 116);
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
      img.src = reader.result;
      var row = parseInt(fileCount/5 + 1);
      var column = parseInt(fileCount%5 + 1);
      img.style = "grid-column:" + (column-1) + "/" + (column) + ";"
      img.style = "grid-row:" + (row) + "/" + (row+1) + ";"
      img.setAttribute("id", "image_" + i)
      $('.image-grid-box').append(image_box);
      $('#images_field').css({"grid-column":`${column}/6`, "grid-row":`${row}/2`});
      def.resolve(image_box);
    };
    reader.readAsDataURL(imageFile);
    return def.promise();
  }



  $('#images-file1').on('change',function(){
    files = this.files;
    var d = (new $.Deferred()).resolve();
    $.each(files,function(i,file){
      if (fileCount >= 9){
        $('#images_field').css('display','none');
      }
      if (fileCount + files.length > 10) {
        document.getElementById("itemimage_uproad_over").style.display="block";
        return false;
      }
      d = d.then(function(){return previewImage(i, file)});
    });
  })

    //プレビュー画像の削除
    $(document).on('click','.preview__delete',function(){
      var list = $(this).parent().parent();
      list.remove();
    });
});

