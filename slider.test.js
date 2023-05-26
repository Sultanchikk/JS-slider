"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var slider_1 = require("./slider");
describe("Slider", function () {
    var slider;
    beforeEach(function () {
        // Create a slider element and attach it to the document body
        var sliderElement = document.createElement("div");
        sliderElement.classList.add("slider");
        document.body.appendChild(sliderElement);
        // Create the slider instance
        slider = new slider_1.default(sliderElement);
    });
    afterEach(function () {
        // Clean up the slider element
        document.body.innerHTML = "";
    });
    test("Slider Initialization", function () {
        expect(document.querySelector(".slider")).toBeDefined();
        expect(slider.slides.length).toBe(15); // Replace 15 with the actual number of slides
        expect(slider.currentIndex).toBe(0);
    });
    test("Create Slide", function () {
        slider.createSlide("#ff0000", "RED");
        expect(slider.slides.length).toBe(16); // After creating a slide, the number of slides should increase
        expect(slider.slides[15].style.backgroundColor).toBe("rgb(255, 0, 0)"); // Replace with the expected background color
        expect(slider.slides[15].textContent).toBe("RED"); // Replace with the expected text content
    });
    test("Slide Navigation", function () {
        expect(slider.currentIndex).toBe(0);
        slider.startSlideTimer();
        jest.advanceTimersByTime(2000); // Simulate waiting for 2 seconds
        expect(slider.currentIndex).toBe(1); // After 2 seconds, the current index should be updated
        slider.startSlideTimer();
        jest.advanceTimersByTime(4000); // Simulate waiting for 4 seconds
        expect(slider.currentIndex).toBe(3); // After 6 seconds in total, the current index should be 3
    });
});
