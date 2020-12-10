function diffSubtract(date1, date2) {
    return date2 - date1;
}
 
// Массив данных о времени
let end_date = {
    "full_year":"2020",
    "month": "12",
    "day": "20",
    "hours": "04",
    "minutes": "20",
    "seconds": "00"
}

 
// Строка для вывода времени
let end_date_str = `${end_date.full_year}-${end_date.month}-${end_date.day}T${end_date.hours}:${end_date.minutes}:${end_date.seconds}`;

timer = setInterval(function () {
    // Получение времени сейчас
    let now = new Date();
    // Получение заданного времени
    let date = new Date(end_date_str);
    // Вычисление разницы времени 
    let ms_left = diffSubtract(now, date);
    // Если разница времени меньше или равна нулю 
    if (ms_left <= 0) { // То
        // Выключаем интервал
        clearInterval(timer);
        
    } else { // Иначе
        // Получаем время зависимую от разницы
        let res = new Date(ms_left);
        // Делаем строку для вывода
        let days = res.getUTCDate() - 1;
        let hours = res.getUTCHours();
        let minutes = res.getUTCMinutes();
        if (days <= 9) days = "0" + days;
        if (hours <= 9) hours = "0" + hours;
        if (minutes <= 9) minutes = "0" + minutes;
        let str_timer = `END IN ${days}d:${hours}h`;
        // Выводим время
        
        document.getElementById("doc_time").innerHTML = str_timer;
    }
}, 1000)

