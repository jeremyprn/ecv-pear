const dateHome = () => {
    //HOME DATE
    const today = new Date();
    const tomorrow = new Date();

    //DAY LETTER
    today.setDate(today.getDate());
    tomorrow.setDate(tomorrow.getDate() + 1);

    const weekday = new Array(7);
    weekday[0] = "Dimanche";
    weekday[1] = "Lundi";
    weekday[2] = "Mardi";
    weekday[3] = "Mercredi";
    weekday[4] = "Jeudi";
    weekday[5] = "Vendredi";
    weekday[6] = "Samedi";

    const dayStr = new Array(7);
    dayStr[0] = "Dim.";
    dayStr[1] = "Lun.";
    dayStr[2] = "Mar.";
    dayStr[3] = "Mer.";
    dayStr[4] = "Jeu.";
    dayStr[5] = "Ven.";
    dayStr[6] = "Sam.";

    let todayDay = dayStr[today.getDay()];

    let tomorrowDay = weekday[tomorrow.getDay()];
    let actualDate = document.querySelector('.home .home__calendar .first-day span.date-day');
    let dateTitle = document.querySelector('.home .home__head h2 span.tomorrow_day');

    actualDate.innerHTML = todayDay;
    dateTitle.innerHTML = tomorrowDay;



    //DAY NUMBER
    const d = new Date();
    const newDate = new Date();
    const scdDay = new Date(newDate.setDate(newDate.getDate() + 1));
    const thirdDay = new Date(newDate.setDate(newDate.getDate() + 1));
    const lastDay = new Date(newDate.setDate(newDate.getDate() + 1));


    let firstDate = document.querySelector('.home .home__calendar .first-day span.date-number');
    let scdDate = document.querySelector('.home .home__calendar .second-day span.date-number');
    let thirdDate = document.querySelector('.home .home__calendar .third-day span.date-number');
    let lastDate = document.querySelector('.home .home__calendar .last-day span.date-number');

    firstDate.innerHTML = d.getDate();
    scdDate.innerHTML = scdDay.getDate();
    thirdDate.innerHTML = thirdDay.getDate();
    lastDate.innerHTML = lastDay.getDate();
}

export { dateHome };