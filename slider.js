"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Slider = /** @class */ (function () {
    function Slider(slider) {
        this.slider = slider;
        this.slidesContainer = document.createElement("div");
        this.slidesContainer.classList.add("slides");
        this.slider.appendChild(this.slidesContainer);
        this.slides = this.slidesContainer.querySelectorAll(".slide");
        this.currentIndex = 0;
        this.showCurrentSlide();
        this.startSlideTimer();
    }
    Slider.prototype.showCurrentSlide = function () {
        this.slidesContainer.style.transform = "translateX(-".concat(this.currentIndex * 100, "%)");
    };
    Slider.prototype.startSlideTimer = function () {
        var _this = this;
        setInterval(function () {
            _this.currentIndex = (_this.currentIndex + 1) % _this.slides.length;
            _this.showCurrentSlide();
        }, 2000);
    };
    Slider.prototype.createSlide = function (color, text) {
        var slideElement = document.createElement("div");
        slideElement.classList.add("slide");
        slideElement.style.backgroundColor = color;
        slideElement.textContent = text;
        this.slidesContainer.appendChild(slideElement);
        this.slides = this.slidesContainer.querySelectorAll(".slide");
    };
    return Slider;
}());
exports.default = Slider;
var sliderElement = document.createElement("div");
sliderElement.classList.add("slider");
// Create the image slider
var imageSlider = new Slider(sliderElement);
// Define the colors and texts for the slides
var slideData = [
    {
        color: "#c62828",
        text: "RED",
    },
    {
        color: "#ad1457",
        text: "PINK",
    },
    {
        color: "#6a1b9a",
        text: "PURPLE",
    },
    {
        color: "#4527a0",
        text: "DEEP_PURPLE",
    },
    {
        color: "#283593",
        text: "INDIGO",
    },
    {
        color: "#1565c0",
        text: "BLUE",
    },
    {
        color: "#0277bd",
        text: "LIGHT_BLUE",
    },
    {
        color: "#00838f",
        text: "CYAN",
    },
    {
        color: "#00695c",
        text: "TEAL",
    },
    {
        color: "#2e7d32",
        text: "GREEN",
    },
    {
        color: "#558b2f",
        text: "LIGHT_GREEN",
    },
    {
        color: "#827717",
        text: "LIME",
    },
    {
        color: "#ef6c00",
        text: "ORANGE",
    },
    {
        color: "#d84315",
        text: "DEEP_ORANGE",
    },
    {
        color: "#4e342e",
        text: "BROWN",
    },
];
// Create slides using the slide data
slideData.forEach(function (slide) {
    imageSlider.createSlide(slide.color, slide.text);
});
// Append the slider to the document body
document.body.appendChild(sliderElement);
