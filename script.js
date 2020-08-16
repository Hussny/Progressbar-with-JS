for (var i = 0; i < 3; i++) {
  Start(i);
}

function start(i){
    var percent=document.querySelector(".progress${i} .percent-num");
    var progressing=document.querySelector(".progress${i} .progressing");
    var margin=document.querySelector(".progress${i} .margin");

    requestAnimationFrame(grow);

    var progress = 0;
}