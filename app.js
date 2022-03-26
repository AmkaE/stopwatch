function select(elementName) {
	return (elementName = document.querySelector(elementName));
}
function selectAll(elementsName) {
	return (elementsName = document.querySelectorAll(elementsName));
}

const durationInput = select('#durationInput');
const startBtn = select('.startBtn');
const pauseBtn = select('.pauseBtn');
const circle = select('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let duration = 0;

const timer = new Timer(durationInput, startBtn, pauseBtn, {
	onStart(totalDuration) {
		duration = totalDuration;
		console.log('Timer Started');
	},
	onTick(timeRemaining) {
		circle.setAttribute(
			'stroke-dashoffset',
			(perimeter * timeRemaining) / duration - perimeter,
		);
	},
	onComplete() {
		console.log('Timer Completed');
	},
});
