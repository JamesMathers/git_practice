//Self care random generator task

//Selcting a random index number to select the days task
const taskGenerator = () => {
    const task =  _task[Math.floor(Math.random() * _task.length)];
    const time = _time[Math.floor(Math.random() * _time.length)];
    const quote = _quote[Math.floor(Math.random() * _quote.length)];
    return `For your self care day you should, ${task} for ${time} minutes. ${quote}`;

}


//Arrays holding the data
const _task = ['run', 'meditate', 'walk', 'listen to music', 'watch your favourite show', 'play games'];
const _time = [5, 10, 15, 20, 30, 35, 40, 45, 55, 60];
const _quote = ['“Breathe. Let go. And remind yourself that this very moment is the only one you know you have for sure."', '“Love yourself first, and everything else falls in line. You really have to love yourself to get anything done in this world.”', '“Almost everything will work again if you unplug it for a few minutes, including you.”', '"Life should be touched, not strangled. You have got to relax, let it happen at times, and at others move forward with it."', '“To love oneself is the beginning of a lifelong romance.”']





console.log(taskGenerator());