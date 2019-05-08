// function changeimg(url,e) {
//   document.getElementById("img").src = url;
//   let nodes = document.getElementById("thumb_img");
//   let img_child = nodes.children;
//   for (i = 0; i < img_child.length; i++) {
//     img_child[i].classList.remove('active')
//   }
//   e.classList.add('active');

// }





// $(function(){
//     $('.mouseover').each(function(){
//         var src_off = $(this).find('img').attr('src');
//         var src_on = src_off.replace('_off','_on');
//         $('<img />').attr('src',src_on);
//         $(this).hover(function(){
//             $(this).find('img').attr('src',src_on);
//         },function(){
//             $(this).find('img').attr('src',src_off);
//         });
//     });
// });