const hr1 = document.getElementById('hr-1');
const hr2 = document.getElementById('hr-2');
const mn1 = document.getElementById('mn-1');
const mn2 = document.getElementById('mn-2');
const sc1 = document.getElementById('sc-1');
const sc2 = document.getElementById('sc-2');

setInterval(() => {
    const dd = new Date();
    const HH = dd.getHours();  // 24-hour format
    const h1 = Math.floor(HH / 10);  // Tens digit of the hour
    const h2 = HH % 10;  // Ones digit of the hour
    const mm = dd.getMinutes();
    const m1 = mm < 10 ? 0 : Math.floor(mm / 10);  // Tens digit of minutes
    const m2 = mm < 10 ? mm : mm % 10;  // Ones digit of minutes
    const ss = dd.getSeconds();
    const s1 = ss < 10 ? 0 : Math.floor(ss / 10);  // Tens digit of seconds
    const s2 = ss % 10;  // Ones digit of seconds

    // Update the DOM elements with the current time
    sc1.setAttribute('data-digit', s1);
    sc2.setAttribute('data-digit', s2);
    mn1.setAttribute('data-digit', m1);
    mn2.setAttribute('data-digit', m2);
    hr1.setAttribute('data-digit', h1);
    hr2.setAttribute('data-digit', h2);
}, 1000);
