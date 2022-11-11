class AlarmClock {
	constructor() {
		this.alarmCollection = [
				{
					time: "20:00",
					callback: () => console.log('Пора вставать!'),
					id: 20,
				},

				{
					time: "13:00",
					callback: () => console.log('Подъем'),
					id: 70,
				},

				{
					time: "16:00",
					callback: () => console.log('Все проспал'),
					id: 27,
				}
			];
		this.timerId = null;
	}

	addClock(time, callback, id) {
		if(!id) {
			throw new Error('Не передан параметр id !');
		}

		if (this.alarmCollection.some(item => item.id === id)) {
			console.log('Будильник с таким id уже создан!');
			return;
		}

		this.alarmCollection.push({time, callback, id});
	}

	removeClock(id) {
		const arrLengthBefore = this.alarmCollection.length;
		this.alarmCollection = this.alarmCollection.filter(item => item.id !== id);
		return arrLengthBefore !== this.alarmCollection.length;
	}

	getCurrentFormattedTime() {
		let objDate = new Date();
		let h = String(objDate.getHours());
		let m = String(objDate.getMinutes());
		let time = null;

		if(h.length <= 1) {
			h = "0" + h;
		}

		if(m.length <= 1) {
			m = "0" + m;
		}

		return time = h + ":" + m;

	}

	start() {
		if (this.timerId) {
			return;
		}

		this.timerId = setInterval(() => {
			this.alarmCollection.forEach(item => {
				if('this.getCurrentFormattedTime' === item.time) {
					item.callback();
				}
			});
		}, 1000);	
	}

	stop() {
		if(this.timerId){
			clearInterval(this.timerId);
			this.timerId = null;
		}
	}

   printAlarms() {
   	this.alarmCollection.forEach(elem => {
   		console.log('Будильник с id ' + elem.id + '___' + 'время срабатывания ' + elem.time);
   	})
   }

   clearAlarms() {
   	this.stop();
   	this.alarmCollection = [];

   }

}










































