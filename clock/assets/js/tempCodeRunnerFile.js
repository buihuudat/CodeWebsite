Date.prototype.getWeek = function() {
    var onejan = new Date(this.getFullYear(),0,1);
    var today = new Date(this.getFullYear(),this.getMonth(),this.getDate());
    var dayOfYear = ((today - onejan + 86400000)/86400000);
    return Math.ceil(dayOfYear/7)
};

const clockText = () =>{
    let date = new Date()

    let hh = date.getHours(),
        ampm,
        ss = date.getSeconds(),
        mm = date.getMinutes(),
        day = date.getDate(),
        week = date.getWeek(),
        month = date.getMonth(),
        year = date.getFullYear()
        console.log(week)