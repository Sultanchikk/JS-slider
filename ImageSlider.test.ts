import { JSDOM } from "jsdom";
import Slider from "./index";

// Create a virtual DOM using JSDOM
const dom = new JSDOM("<html><body></body></html>");
global.document = dom.window._document;

describe("ImageSlider", () => {
  let sliderElement: HTMLElement;
  let imageSlider: Slider;

  beforeEach(() => {
    sliderElement = document.createElement("div");
    imageSlider = new Slider(sliderElement);
  });

  afterEach(() => {
    sliderElement.remove();
  });

  it("should create a slide", () => {
    imageSlider.createSlide("#FF0000", "Slide 1");
    const slides = sliderElement.querySelectorAll(".slide");
    expect(slides.length).toBe(1);
  });

  it("should slide to the next slide every 2 seconds", (done) => {
    const slideData = [
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

    slideData.forEach((slide) => {
      imageSlider.createSlide(slide.color, slide.text);
    });

    // Check initial state
    const initialSlide = sliderElement.querySelector(".slide");
    expect(initialSlide?.classList.contains("active")).toBe(true);

    // Wait for 2 seconds (assuming the slides will transition)
    setTimeout(() => {
      const currentSlide = sliderElement.querySelector(".slide.active");
      const nextSlide = sliderElement.querySelector(".slide:not(.active)");
      expect(currentSlide).toBeNull();
      expect(nextSlide?.classList.contains("active")).toBe(true);
      done();
    }, 2000);
  });
});
