export default class Slider {
  public slider: HTMLElement;
  public slidesContainer: HTMLElement;
  public slides: NodeListOf<HTMLElement>;
  public currentIndex: number;

  constructor(slider: HTMLElement) {
    this.slider = slider;
    this.slidesContainer = document.createElement("div");
    this.slidesContainer.classList.add("slides");
    this.slider.appendChild(this.slidesContainer);
    this.slides = this.slidesContainer.querySelectorAll(".slide");
    this.currentIndex = 0;
    this.showCurrentSlide();
    this.startSlideTimer();
  }

  public showCurrentSlide(): void {
    this.slidesContainer.style.transform = `translateX(-${this.currentIndex * 100}%)`;
  }

  public startSlideTimer(): void {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
      this.showCurrentSlide();
    }, 2000);
  }

  public createSlide(color: string, text: string): void {
    const slideElement = document.createElement("div");
    slideElement.classList.add("slide");
    slideElement.style.backgroundColor = color;
    slideElement.textContent = text;
    this.slidesContainer.appendChild(slideElement);
    this.slides = this.slidesContainer.querySelectorAll(".slide");
  }
}

let sliderElement = document.createElement("div");
sliderElement.classList.add("slider");

// Create the image slider
const imageSlider = new Slider(sliderElement);

// Define the colors and texts for the slides
const slideData: { color: string; text: string }[] = [
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
slideData.forEach((slide) => {
  imageSlider.createSlide(slide.color, slide.text);
});

// Append the slider to the document body
document.body.appendChild(sliderElement);
