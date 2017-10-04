
$(function(){

// アコーディオン
  $(".func-acco dt").on("click",function(){
    $(this).toggleClass("open");
    $(this).next().slideToggle();
  });

// #で始まるアンカーをクリックした場合に処理
  $('a[href^=#]').click(function() {
    // スクロールの速度
    var speed = 400; // ミリ秒
    // アンカーの値取得
    var href= $(this).attr("href");
    // 移動先を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を数値で取得
    var position = target.offset().top;
    // スムーススクロール
    $('body,html').animate({scrollTop:position - 200}, speed, 'swing');
    return false;
  });

// リンク内が画像の場合ホバー処理
  $('a').has('img').hover(
    function(){
    $(this).stop().fadeTo("2000",0.6);
  },function(){
    $(this).stop().fadeTo("2000",1.0);
  });

  $(".merit-block a").click(function(){
    return false;
  });


  $(".func-acc").click(function(){
    $(this).next().slideToggle();
  });
});

/* DOMの読み込み完了後に処理 */
if(window.addEventListener) {
  window.addEventListener( "load" , shareButtonReadSyncer, false );
}else{
  window.attachEvent( "onload", shareButtonReadSyncer );
}

/* シェアボタンを読み込む関数 */
function shareButtonReadSyncer(){

// 遅延ロードする場合は次の行と、終わりの方にある行のコメント(//)を外す
// setTimeout(function(){

// Twitter (オリジナルボタンを使用するので、コメントアウトして無効化)
// window.twttr=(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],t=window.twttr||{};if(d.getElementById(id))return;js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);t._e=[];t.ready=function(f){t._e.push(f);};return t;}(document,"script","twitter-wjs"));

// Facebook
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v2.0";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Google+
var scriptTag = document.createElement("script");
scriptTag.type = "text/javascript"
scriptTag.src = "https://apis.google.com/js/platform.js";
scriptTag.async = true;
document.getElementsByTagName("head")[0].appendChild(scriptTag);

// はてなブックマーク
var scriptTag = document.createElement("script");
scriptTag.type = "text/javascript"
scriptTag.src = "https://b.st-hatena.com/js/bookmark_button.js";
scriptTag.async = true;
document.getElementsByTagName("head")[0].appendChild(scriptTag);

// pocket
(!function(d,i){if(!d.getElementById(i)){var j=d.createElement("script");j.id=i;j.src="https://widgets.getpocket.com/v1/j/btn.js?v=1";var w=d.getElementById(i);d.body.appendChild(j);}}(document,"pocket-btn-js"));

//},5000);  //ページを開いて5秒後(5,000ミリ秒後)にシェアボタンを読み込む

}