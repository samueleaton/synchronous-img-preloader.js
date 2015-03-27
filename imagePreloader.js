var imgsToLoad = [
  "path/to/img1.png",
  "path/to/img2.png",
  "path/to/img3.jpg",
  "path/to/img4.png",
  "path/to/img5.png",
  "path/to/img6.jpg",
];
var loadedImgs = [];
var i = 0;
function imgPreloader() {
	loadedImgs[i] = new Image();
	loadedImgs[i].src = imgsToLoad[i];
	loadedImgs[i].onload = function(){
		if(imgsToLoad[i+1]){
			// console.log("loaded: "+loadedImgs[i].src); // UN-COMMENT FOR CONSOLE OUTPUT
			i++;  imgPreloader();
		}
	};
}
window.addEventListener('load',function(){
		imgPreloader();
});
