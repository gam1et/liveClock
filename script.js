import './style.scss';

var Watcher = function(){
	this.el = document.getElementsByClassName('watch')[0];
}
Watcher.prototype.createDelimiters = function(){
	var deg = 0;
	for(var i = 1; i<=60; i++){
		var delimiter = document.createElement('div');
		var container = document.createElement('div');
		container.classList.add('delimiter');
		delimiter.classList.add('delimiter_sign');
		container.appendChild(delimiter);
		deg += 6;
		if(i%5==0){delimiter.classList.add('delimiter__big');}
		container.style.transform = 'rotate('+deg+'deg)';
		this.el.appendChild(container);
	}
}
Watcher.prototype.realTime = function(){
	setInterval(function(){
		let date = new Date();
		console.log(date.getHours(),date.getMinutes(),date.getSeconds());
	},1000)
}
Watcher.prototype.startWatch = function() {
	var arrows = {
		secs: {
			class: 'secs',
			deg: 6,
			start_deg: 180,
			time: 1000
		},
		mins: {
			class: 'mins',
			deg: 0.1,
			start_deg: 180,
			time: 1000
		},
		hour: {
			class: 'hour',
			deg: 0.00012,
			start_deg: 180,
			time: 1000
		}
	};

	Object.keys(arrows).map(function(key){
		let item = arrows[key];

		document.getElementsByClassName(key)[0].style.transform = 'rotate('+item.start_deg+'deg)'; // set start position
		setInterval(function(){
			item.start_deg += item.deg;
			document.getElementsByClassName(key)[0].style.transform = 'rotate('+item.start_deg+'deg)';
		},item.time)
	})
};

var watch = new Watcher();
watch.startWatch();
//watch.realTime();
watch.createDelimiters();