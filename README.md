# LearnMap — Python Beginner Essentials

This is a responsive interactive mind-map learning website inspired by the supplied reference screenshots.

## Features
- Colourful curved branches from a central/root topic
- Click any topic to expand or collapse its subtopics
- Click a subtopic to open its notes and code example inside the mind-map canvas
- No side compiler/editor panel
- Responsive, horizontally pannable map for phones and tablets
- Dark mode, flashcards, study guide, progress counter
- Plain HTML, CSS and JavaScript; no build tools required

## Run on laptop
1. Extract the ZIP.
2. Open the `learnmap_website` folder in VS Code.
3. Open `index.html` directly in your browser, or run a local server:
   ```bash
   python -m http.server 8000
   ```
4. Visit `http://localhost:8000`.

## Run on phone
The map can be used in a mobile browser. For testing from a phone on the same Wi-Fi as your laptop, run the server on the laptop and open `http://LAPTOP-IP:8000` on the phone. Firewall settings may need to allow the connection.

## Notes
The code shown in the lesson card is a learning example, not an embedded compiler. To run Python examples, use a Python installation or an online Python environment separately.
