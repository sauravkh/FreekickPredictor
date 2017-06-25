arrX = [ 214,
 222,
 222,
 189,
 173,
 166,
 200,
 179,
 219,
 143,
 175,
 186,
 201,
 204,
 151,
 728,
 703,
 681,
 669,
 669,
 710,
 710,
 692,
 471,
 509,
 592,
 577,
 693,
 800,
 224,
 93,
 80,
 36,
 22,
 383,
 376,
 445,
 509,
 576 ,
 688,
 715,
 742,
 694,
 680,
 702,
 732,
202 ,
 169,
 165,
 170,
 203,
 193,
 159,
 210,
 190,
 150,
 149,
 148,
 734,
732 ,
737]
 
arrY=[
153,
152,
175,
175,
191,
176,
212,
309,
313,
327,
330,
330,
330,
323,
305,
177,
182,
174,
166,
189,
190,
207,
271,
111,
211,
228,
262,
 72,
 72,
 48,
 67,
131,
 59,
192,
 73,
172,
170,
170,
171,
195,
153,
160,
159,
156,
174,
177,
229,
220,
247,
202,
196,
176,
138,
137,
137,
149,
175,
186,
225,
188,
207]


var canvas = document.getElementById('myCanvas'),
context = canvas.getContext('2d');

heatArray = [];
flag = false;

$(function() {
$("#myCanvas").one("click", function(e) {
  var offset = $(this).offset();
  var relativeX = (e.pageX - offset.left);
  var relativeY = (e.pageY - offset.top);
  context.beginPath();

  context.arc(relativeX,relativeY,15,0,2*Math.PI);
  context.stroke();
  context.fillStyle = "pink";
  context.fill();
  flag = true;
});
});
   
 
   $(".btn-danger").click(function(e) {
		context.clearRect(0, 0, canvas.width, canvas.height);
		flag = false;
   		$("#myCanvas").one("click", function(e) {
 		var offset = $(this).offset();
  		var relativeX = (e.pageX - offset.left);
  		var relativeY = (e.pageY - offset.top);
  		context.beginPath();

  		context.arc(relativeX,relativeY,18,0,2*Math.PI);
  		context.stroke();
  		context.fillStyle = "pink";
  		context.fill();
  		flag = true;

});
   })
   avgDistance();

   time  = function(n) {
      if(n>=1){
        return n-1;
      }
   }

   $(".btn-primary").click(function(e) {
   		if(flag){
   			for(i=0; i<arrY.length;i++) {
   			context.beginPath();
  			context.arc(arrX[i],arrY[i],10,0,2*Math.PI);
  			context.stroke();
  			context.fillStyle = "rgba(0,128,128,.9)";
  			context.fill();
   		}
   
      $('#message').text("This is what the users guessed!");
      $('#count').text("hiii");
      var n = 4
      while(n!= 0) {
        $('p').text(n);
        n = n-1;
        console.log(n)
      }

   		}else {
   			alert("Guess before moving ahead!");
   		}
   		
   })

 function avgDistance () {
	var sum = 0;
	var avg = 0;
	for(var i = 0 ; i< arrX.length; i++) {
		for(var j = 0 ; j < arrX.length; j++) {
			sum+= Math.sqrt(Math.pow(arrX[i]-arrX[j] , 2) + Math.pow(arrY[i]-arrY[j] , 2) )
		}
		avg = sum/arrX.length;
		heatArray[i] = conversion(avg);
		sum = 0;
	}
	console.log(heatArray.sort())
}

function conversion(num) {
	return (num - 247.71)/(187.81);
}

function shoot(){
        context.beginPath();
        context.arc(arrX[10],arrY[10],20,0,2*Math.PI);
        context.stroke();
        context.fillStyle = "rgb(20,20,20)";
        context.fill();
}
