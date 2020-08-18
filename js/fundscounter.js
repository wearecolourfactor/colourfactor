var count = { val : 0 };
var newVal = 1600;
var counter = document.getElementById("funds-counter");

TweenLite.to(count, 6, {
  val: newVal,
  roundProps: "val",
  onUpdate: function(){
    counter.innerHTML = count.val
  }
});


var count2 = { val2 : 0 };
var newVal2 = 15;
var counter2 = document.getElementById("exp-counter");

TweenLite.to(count2, 6, {
  val: newVal2,
  roundProps: "val2",
  onUpdate: function(){
    counter2.innerHTML = count2.val2
  }
});


var count3 = { val2 : 0 };
var newVal3 = 15;
var counter3 = document.getElementById("connection-counter");

TweenLite.to(count3, 6, {
  val3: newVal,
  roundProps: "val2",
  onUpdate: function(){
    counter3.innerHTML = count3.val2
  }
});