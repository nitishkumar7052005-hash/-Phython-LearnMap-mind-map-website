const topics = [
  {id:"how",n:"",title:"How to Use These Notes",color:"#57965c",subs:[
    {title:"1. READ — Understand one idea.",text:"Start with one small concept. Read the explanation slowly before moving to the example.",code:'name = "Python learner"\nprint(name)'},
    {title:"2. TYPE — Run the example yourself.",text:"Typing code yourself helps you remember syntax and punctuation. Do not only copy and paste.",code:'print("Hello, world!")\nprint(12)\nprint(3 + 4)'},
    {title:"3. CHANGE — Edit a value or line.",text:"Change a number or string and predict the output before you test it.",code:'score = 8\nprint(score)\nscore = 10\nprint(score)'},
    {title:"4. EXPLAIN — Describe what the code does.",text:"Explain each line in your own words. If you can explain it simply, you are building understanding.",code:'# print() displays a message\nprint("Practice every day")'}
  ]},
  {id:"syntax",n:"01",title:"Output, Comments & Syntax",color:"#96968b",subs:[
    {title:"print() function",text:"The print() function displays text, numbers, and the results of expressions.",code:'print("Hello, world!")\nprint(12)\nprint(3 + 4)'},
    {title:"Comments with #",text:"A comment starts with #. Python ignores it while running your program. Comments explain your code to people.",code:'# This is a comment\nprint("Hello!")'},
    {title:"Basic syntax",text:"Python uses indentation to group code. Strings need quotes, and spelling and punctuation matter.",code:'message = "Keep learning"\nprint(message)'}
  ]},
  {id:"variables",n:"02",title:"Variables & Data Types",color:"#35aeb6",subs:[
    {title:"Create variables",text:"A variable is a name that refers to a value. Use meaningful names such as student_name or score.",code:'student_name = "Aman"\nscore = 95\nprint(student_name, score)'},
    {title:"int, float, str, bool",text:"int stores whole numbers, float stores decimal numbers, str stores text, and bool stores True or False.",code:'age = 20\nheight = 1.72\nname = "Aman"\nis_student = True\nprint(type(age))'},
    {title:"Check type with type()",text:"The type() function tells you the data type of a value or variable.",code:'x = 3.5\nprint(type(x))'}
  ]},
  {id:"input",n:"03",title:"Input & Conversion",color:"#67a451",subs:[
    {title:"input() function",text:"input() pauses and reads text typed by the user. Its result is a string by default.",code:'name = input("Your name: ")\nprint("Hello,", name)'},
    {title:"Convert with int()",text:"Use int() to convert suitable text or a number into an integer.",code:'age = int("20")\nprint(age + 1)'},
    {title:"Convert with float()",text:"Use float() to convert a value to a decimal number.",code:'price = float("19.5")\nprint(price + 0.5)'}
  ]},
  {id:"operators",n:"04",title:"Operators",color:"#8172b5",subs:[
    {title:"Arithmetic operators",text:"Arithmetic operators perform calculations: +, -, *, /, //, %, and **.",code:'print(8 + 2)\nprint(8 * 2)\nprint(8 % 3)'},
    {title:"Comparison operators",text:"Comparison operators compare values and return True or False.",code:'print(8 > 2)\nprint(5 == 5)\nprint(3 != 4)'},
    {title:"Logical operators",text:"and, or, and not combine or reverse Boolean conditions.",code:'print(True and False)\nprint(True or False)\nprint(not True)'}
  ]},
  {id:"decisions",n:"05",title:"Decisions: if, elif, else",color:"#d47eaf",subs:[
    {title:"if statement",text:"An if statement runs an indented block only when its condition is True.",code:'age = 19\nif age >= 18:\n    print("Adult")'},
    {title:"if / else",text:"else provides an alternative block when the if condition is False.",code:'score = 42\nif score >= 50:\n    print("Pass")\nelse:\n    print("Try again")'},
    {title:"if / elif / else",text:"Use elif to test another condition when earlier conditions were False.",code:'score = 76\nif score >= 80:\n    print("Great")\nelif score >= 50:\n    print("Passed")\nelse:\n    print("Try again")'}
  ]},
  {id:"loops",n:"06",title:"Loops",color:"#32aeb8",subs:[
    {title:"for loop and range()",text:"A for loop repeats once for each item in a sequence. range() is useful for repeating a set number of times.",code:'for number in range(1, 4):\n    print(number)'},
    {title:"while loop",text:"A while loop repeats while its condition remains True. Update the condition so the loop can finish.",code:'count = 0\nwhile count < 3:\n    print(count)\n    count += 1'},
    {title:"break and continue",text:"break exits a loop. continue skips the rest of the current iteration and moves to the next one.",code:'for n in range(5):\n    if n == 2:\n        continue\n    print(n)'}
  ]},
  {id:"collections",n:"07",title:"Strings, Lists, Tuples & Dictionaries",color:"#65a34d",subs:[
    {title:"String basics",text:"A string stores text. Strings support indexing, slicing, and useful methods such as lower() and upper().",code:'word = "Python"\nprint(word[0])\nprint(word.upper())'},
    {title:"Lists and tuples",text:"Lists are ordered and mutable. Tuples are ordered and cannot be changed after creation.",code:'fruits = ["apple", "mango"]\npoint = (3, 4)\nprint(fruits[1])\nprint(point[0])'},
    {title:"Dictionaries",text:"A dictionary stores key-value pairs. Access a value using its key.",code:'student = {"name": "Aman", "year": 2}\nprint(student["name"])'}
  ]},
  {id:"functions",n:"08",title:"Functions",color:"#a66f5d",subs:[
    {title:"Define a function",text:"Use def to create a function. The indented body runs when you call that function.",code:'def greet():\n    print("Hello!")\n\ngreet()'},
    {title:"Parameters and return",text:"Parameters receive input values. return sends a result back to the caller.",code:'def add(a, b):\n    return a + b\n\nprint(add(3, 4))'},
    {title:"Reusable code",text:"Functions let you write logic once and reuse it with different values.",code:'def square(number):\n    return number * number\n\nprint(square(5))'}
  ]},
  {id:"debugging",n:"09",title:"Errors, Debugging & Files",color:"#c3b52d",subs:[
    {title:"Syntax vs runtime errors",text:"Syntax errors mean Python cannot parse the code. Runtime errors happen while the code is running.",code:'print("Check quotes and brackets")'},
    {title:"try / except",text:"Use try and except to handle errors you expect could occur, and provide a helpful response.",code:'try:\n    number = int("abc")\nexcept ValueError:\n    print("Please enter a number")'},
    {title:"Read and write files",text:"Use with open(...) so a file is closed automatically after you finish working with it.",code:'with open("notes.txt", "w") as file:\n    file.write("Keep learning")'}
  ]},
  {id:"project",n:"10",title:"Mini Project: Quiz Score Tracker",color:"#e88732",subs:[
    {title:"Store quiz scores",text:"A list can keep several quiz scores together so they can be processed as a group.",code:'scores = [8, 9, 7]\nprint(scores)'},
    {title:"Calculate average",text:"The average is the total of all scores divided by the number of scores.",code:'scores = [8, 9, 7]\naverage = sum(scores) / len(scores)\nprint("Average:", average)'},
    {title:"Display feedback",text:"Combine variables and conditions to show feedback based on the calculated score.",code:'scores = [8, 9, 7]\naverage = sum(scores) / len(scores)\nif average >= 8:\n    print("Great work!")\nelse:\n    print("Keep practising!")'}
  ]},
  {id:"cheatsheet",n:"",title:"Quick Reference Cheat Sheet",color:"#d5534e",subs:[
    {title:"Common print and variable patterns",text:"Use these small patterns as a quick reminder while practising.",code:'name = "Aman"\nscore = 10\nprint(name, score)'},
    {title:"Common condition and loop patterns",text:"Conditions make decisions, and loops repeat instructions.",code:'if score >= 5:\n    print("Pass")\n\nfor i in range(3):\n    print(i)'}
  ]},
  {id:"checklist",n:"",title:"Practice Checklist",color:"#a66f60",subs:[
    {title:"Beginner practice checklist",text:"Mark these milestones as you learn: output, variables, input, operators, decisions, loops, collections, functions, and debugging.",code:'# Practise a little every day\nprint("One step at a time!")'}
  ]},
  {id:"plan",n:"",title:"Suggested 7-Day Plan",color:"#a87568",subs:[
    {title:"Days 1–2: Basics",text:"Learn output, syntax, variables, data types, input, and conversion.",code:'print("Day 1: Python basics")'},
    {title:"Days 3–4: Logic",text:"Practise operators, if/elif/else, and loops using small examples.",code:'for day in range(3, 5):\n    print("Practice day", day)'},
    {title:"Days 5–7: Build",text:"Learn collections and functions, review errors, then build the Quiz Score Tracker.",code:'scores = [8, 9, 7]\nprint(sum(scores) / len(scores))'}
  ]}
];

const canvas = document.getElementById("mapCanvas");
const nodesWrap = document.getElementById("topicNodes");
const svg = document.getElementById("branchSvg");
const lessonCard = document.getElementById("lessonCard");
const lessonTitle = document.getElementById("lessonTitle");
const lessonText = document.getElementById("lessonText");
const lessonCode = document.getElementById("lessonCode");
const lessonKicker = document.getElementById("lessonKicker");
const progressLabel = document.getElementById("progressLabel");
const toast = document.getElementById("toast");
let expanded = new Set(["how"]);
let explored = new Set();
let selectedTopic = "how";
let selectedSub = 0;
let flashIndex = 0;

const flashcards = [
  ["What does print() do?", "It displays text or values in the output."],
  ["How do you write a comment in Python?", "Start the comment with #."],
  ["Which data type stores whole numbers?", "int stores whole numbers."],
  ["What keyword defines a function?", "Use def followed by the function name and parentheses."],
  ["Which collection stores key-value pairs?", "A dictionary stores key-value pairs."]
];

function notify(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(notify.timer);
  notify.timer = setTimeout(() => toast.classList.remove("show"), 2200);
}
function topicById(id) { return topics.find(topic => topic.id === id); }

function layoutMap() {
  // Fixed wide mind-map canvas gives a faithful, pannable mind-map on phones too.
  const startY = 75;
  const rowGap = 72;
  let y = startY;
  const positions = new Map();
  topics.forEach(topic => {
    positions.set(topic.id, y);
    y += rowGap;
    if (expanded.has(topic.id)) y += topic.subs.length * 39 + 8;
  });
  const canvasHeight = Math.max(880, y + 60);
  canvas.style.height = `${canvasHeight}px`;
  canvas.style.width = window.innerWidth <= 700 ? "1420px" : "1580px";
  return positions;
}

function renderMap() {
  nodesWrap.innerHTML = "";
  const positions = layoutMap();
  topics.forEach(topic => {
    const y = positions.get(topic.id);
    const isOpen = expanded.has(topic.id);
    const btn = document.createElement("button");
    btn.className = "topic-node" + (selectedTopic === topic.id ? " selected" : "");
    btn.style.top = `${y}px`;
    btn.innerHTML = `<span class="branch-dot" style="background:${topic.color}"></span>${topic.n ? `<span class="topic-number">${topic.n}</span>` : ""}<span class="topic-label">${topic.title}</span><span class="chevron">${isOpen ? "⌄" : "›"}</span>`;
    btn.setAttribute("aria-expanded", String(isOpen));
    btn.addEventListener("click", () => {
      selectedTopic = topic.id;
      explored.add(topic.id);
      if (expanded.has(topic.id)) {
        expanded.delete(topic.id);
        if (selectedTopic === topic.id) lessonCard.classList.add("hidden");
      } else {
        expanded.add(topic.id);
        openLesson(topic.id, 0);
      }
      renderMap();
    });
    nodesWrap.appendChild(btn);

    if (isOpen) {
      const subList = document.createElement("div");
      subList.className = "subtopic-list";
      subList.style.top = `${y + 38}px`;
      subList.style.setProperty("--branch-color", topic.color);
      topic.subs.forEach((sub, index) => {
        const subBtn = document.createElement("button");
        subBtn.className = "subtopic" + (selectedTopic === topic.id && selectedSub === index ? " active" : "");
        subBtn.innerHTML = `<span class="mini-dot" style="background:${topic.color}"></span><span>${sub.title}</span><span class="sub-arrow">↗</span>`;
        subBtn.addEventListener("click", () => {
          selectedTopic = topic.id;
          selectedSub = index;
          explored.add(topic.id);
          openLesson(topic.id, index);
          renderMap();
          if (window.innerWidth <= 700) {
            document.getElementById("mapViewport").scrollTo({left: 500, behavior:"smooth"});
          }
        });
        subList.appendChild(subBtn);
      });
      nodesWrap.appendChild(subList);
    }
  });
  drawBranches(positions);
  progressLabel.textContent = `${explored.size} of 10 topics explored`;
}

function drawBranches(positions) {
  const height = parseFloat(canvas.style.height) || 900;
  svg.setAttribute("viewBox", `0 0 1580 ${height}`);
  svg.setAttribute("height", height);
  let paths = "";
  const rootX = 260, rootY = 454;
  topics.forEach(topic => {
    const y = positions.get(topic.id) + 19;
    const endX = 304;
    const mid1 = 280, mid2 = 270;
    const selected = selectedTopic === topic.id;
    paths += `<path d="M ${rootX} ${rootY} C ${mid1} ${rootY}, ${mid2} ${y}, ${endX} ${y}" fill="none" stroke="${topic.color}" stroke-width="${selected ? 3 : 2}" stroke-linecap="round" opacity="${selected ? 1 : .72}"/>`;
    paths += `<circle cx="${endX}" cy="${y}" r="${selected ? 6 : 5}" fill="${topic.color}" stroke="var(--surface)" stroke-width="2"/>`;
    if (expanded.has(topic.id)) {
      const subY = y + 38;
      paths += `<path d="M ${endX + 8} ${y} C ${endX + 38} ${y}, ${endX + 24} ${subY}, 654 ${subY}" fill="none" stroke="${topic.color}" stroke-width="1.5" stroke-linecap="round" opacity=".52"/>`;
    }
  });
  paths += `<circle cx="${rootX}" cy="${rootY}" r="7" fill="var(--surface)" stroke="#9db5a3" stroke-width="2"/>`;
  svg.innerHTML = paths;
}

function openLesson(topicId, subIndex) {
  const topic = topicById(topicId);
  const sub = topic.subs[subIndex] || topic.subs[0];
  selectedTopic = topicId;
  selectedSub = subIndex;
  lessonCard.classList.remove("hidden");
  lessonKicker.textContent = `${topic.n ? `TOPIC ${topic.n}` : "LEARNING NOTES"} · NOTE ${subIndex + 1}`;
  lessonTitle.textContent = sub.title;
  lessonText.textContent = sub.text;
  lessonCode.textContent = sub.code;
  lessonCard.style.borderTop = `3px solid ${topic.color}`;
  const y = parseFloat(canvas.style.height) || 900;
  // Place the notes panel on the right of the selected branch, within the map itself.
  const topicPositions = calculatePositions();
  const topicY = topicPositions.get(topicId) || 300;
  const panelTop = Math.max(20, Math.min(y - 330, topicY - 30));
  lessonCard.style.top = `${panelTop}px`;
  lessonCard.style.left = window.innerWidth <= 700 ? "735px" : "820px";
}
function calculatePositions() {
  let y = 75;
  const positions = new Map();
  topics.forEach(topic => {
    positions.set(topic.id, y);
    y += 72;
    if (expanded.has(topic.id)) y += topic.subs.length * 39 + 8;
  });
  return positions;
}

document.getElementById("rootNode").addEventListener("click", () => {
  expanded = new Set(topics.map(topic => topic.id));
  explored = new Set(topics.filter(topic => topic.n).map(topic => topic.id));
  renderMap();
  notify("All branches expanded.");
});
document.getElementById("expandAllBtn").addEventListener("click", () => {
  expanded = new Set(topics.map(topic => topic.id));
  renderMap();
});
document.getElementById("resetMapBtn").addEventListener("click", () => {
  expanded = new Set(["how"]);
  selectedTopic = "how";
  selectedSub = 0;
  lessonCard.classList.add("hidden");
  renderMap();
  document.getElementById("mapViewport").scrollTo({left:0, top:0, behavior:"smooth"});
});
document.getElementById("closeLessonBtn").addEventListener("click", () => lessonCard.classList.add("hidden"));
document.getElementById("themeBtn").addEventListener("click", () => document.body.classList.toggle("dark"));
document.getElementById("flashcardsBtn").addEventListener("click", () => document.getElementById("flashcardsDialog").showModal());
document.getElementById("studyBtn").addEventListener("click", () => document.getElementById("studyDialog").showModal());
document.getElementById("startStudyBtn").addEventListener("click", () => {
  document.getElementById("studyDialog").close();
  document.getElementById("mapViewport").scrollIntoView({behavior:"smooth", block:"start"});
});

function showFlashcard() {
  document.getElementById("flashQuestion").textContent = flashcards[flashIndex][0];
  document.getElementById("flashAnswer").textContent = flashcards[flashIndex][1];
  document.getElementById("flashAnswer").classList.add("hidden");
  document.getElementById("flipCardBtn").textContent = "Show answer";
}
document.getElementById("flipCardBtn").addEventListener("click", () => {
  const answer = document.getElementById("flashAnswer");
  answer.classList.toggle("hidden");
  document.getElementById("flipCardBtn").textContent = answer.classList.contains("hidden") ? "Show answer" : "Hide answer";
});
document.getElementById("nextCardBtn").addEventListener("click", () => {
  flashIndex = (flashIndex + 1) % flashcards.length;
  showFlashcard();
});
document.querySelectorAll(".modal-close").forEach(button => button.addEventListener("click", event => {
  event.preventDefault();
  button.closest("dialog").close();
}));
window.addEventListener("resize", () => {
  if (!lessonCard.classList.contains("hidden")) {
    const topic = topicById(selectedTopic);
    if (topic) openLesson(selectedTopic, selectedSub);
  }
  renderMap();
});
renderMap();
openLesson("how", 0);
