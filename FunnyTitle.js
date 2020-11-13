
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/img/touxiang.png");
         document.title = 'ヽ(●-`Д´-)ノ';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/img/touxiang.png");
         document.title = 'ヾ(Ő∀Ő3)ノ！' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });