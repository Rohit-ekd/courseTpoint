const comm = document.querySelector("#comm")
const java = document.querySelector("#java")
const sem1 = document.querySelector("#sem1")
const sem2 = document.querySelector("#sem2")
const sem3 = document.querySelector("#sem3")
const sem4 = document.querySelector("#sem4")
const sem5 = document.querySelector("#sem5")
const sem6 = document.querySelector("#sem6")
comm.addEventListener("click", () => {
    location.href = "./Communication/comm_intro.html"
})
java.addEventListener("click", () => {
    location.href = "./java/java_intro.html"
})
sem1.addEventListener("click", () => {
    location.href = `./PYQ/sem1.html`
})
sem2.addEventListener("click", () => {
    location.href = `./PYQ/sem2.html`
})
sem3.addEventListener("click", () => {
    location.href = `./PYQ/sem3.html`
})
sem4.addEventListener("click", () => {
    location.href = `./PYQ/sem4.html`
})
sem5.addEventListener("click", () => {
    location.href = `./PYQ/sem5.html`
})
sem6.addEventListener("click", () => {
    location.href = `./PYQ/sem6.html`
})













/*Typing text */
var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};


var date = new Date();
var current_year = date.getFullYear();
// console.log(current_year);
document.getElementById("currentYear").innerHTML = current_year;
