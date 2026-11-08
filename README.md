# Ideal Partner Gacha

A clean, modern web application where users roll for randomized attributes along a dynamic horizontal line to generate an ideal partner profile.

🌐 **Live Demo:** [https://fahrizal-tech.github.io/ideal-partner-gacha/](https://fahrizal-tech.github.io/ideal-partner-gacha/)

---

## Overview

The application simulates a sequential gacha system along an animated rope connecting nine large station bubbles. The slider moves from left to right, locking in attributes in real-time, and concludes by presenting a clean summary card with options to lock individual attributes, roll again, or export an image card.

### Key Features
- **Sequential Horizontal Flow:** Indicator moves smoothly across nine stations from left to right with responsive auto-scroll centering on mobile screens.
- **Nine Attribute Stations:**
  1. **Gender** (Male / Female)
  2. **Name** (20 short male names & 20 short female names with initials)
  3. **Age** (18 to 100 Years Old)
  4. **Zodiac** (12 Zodiac signs from Aries to Pisces)
  5. **Height** (130 cm to 250 cm)
  6. **Weight** (40 kg to 150 kg)
  7. **Occupation** (Concise job titles: Doctor, Pilot, Chef, Engineer, etc.)
  8. **Monthly Salary** ($10/mo up to $1,000,000/mo in USD)
  9. **Personality** (16 MBTI personality types: INTJ, ENFP, INFJ, etc.)
- **Interactive Attribute Locking:** Retain preferred attributes across subsequent rolls using individual lock toggles.
- **Minimalist Aesthetic:** Clean natural palette (white, royal blue, black) with zero unnecessary clutter.
- **Audio Feedback:** Subtle synthesized web audio clicks and chimes using the native Web Audio API (zero external audio dependencies).
- **Export & Share:** Export partner profile cards as high-resolution PNG images via HTML5 Canvas.

---

## Tech Stack
- **HTML5:** Semantic document structure with accessible SVG vector icons.
- **CSS3:** Responsive widescreen design, CSS variables, and cubic-bezier transitions.
- **JavaScript (ES6+):** Modular event-driven architecture, Web Audio synthesis, and dynamic Canvas rendering.

---

## Local Development

To run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/fahrizal-tech/ideal-partner-gacha.git
   ```
2. Navigate to the project directory:
   ```bash
   cd ideal-partner-gacha
   ```
3. Open `index.html` in any modern web browser (e.g. Google Chrome).

---

## License
MIT License. Free to use and customize.
