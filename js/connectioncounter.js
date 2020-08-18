var count = { val : 0 };
var newVal = 15;
var counter = document.getElementById("connection-counter");

TweenLite.to(count, 6, {
  val: newVal,
  roundProps: "val",
  onUpdate: function(){
    counter.innerHTML = count.val
  }
});