import { data } from "./flashcard-data.js";
const container = document.getElementById("container");
const toggleTextBtn = document.getElementById("toggleText");
const readingBtn = document.getElementById("reading");
const selectionGroup = document.querySelector(".select-group");
const gradeSelection = document.getElementById("gradeSelection");
const topicSelection = document.getElementById("topicSelection");
const defaultGrade = data[0].grade.toLowerCase().replace(/\s+/, '-');
const defaultTopic = data[0].topics[0].topic.toLowerCase().replace(/\s+/, '-');
let currentGrade = defaultGrade;

function createGradeOptions() {
  data.forEach(grade => {
    // create options for grade selection
    const gradeOption = document.createElement("option");
    gradeOption.value = grade.grade.toLowerCase().replace(/\s+/g, '-');
    gradeOption.textContent = grade.grade;
    gradeSelection.appendChild(gradeOption);
  });
}
createGradeOptions();

function createTopicOptions(grade = defaultGrade) {
  const selectedGrade = data.find(u => u.grade.toLowerCase().replace(/\s+/g, '-') === grade);
  topicSelection.innerHTML = "";
  selectedGrade.topics.forEach(topic => {
    const topicOption = document.createElement("option");
    topicOption.value = topic.topic.toLowerCase().replace(/\s+/g, '-');
    topicOption.textContent = topic.topic;
    topicSelection.appendChild(topicOption);
  })
}
createTopicOptions();

function loadImages({grade = currentGrade, topic}) {
  const selectedGrade = data.find(u => u.grade.toLowerCase().replace(/\s+/g, '-') === grade);
  const selectedTopic = selectedGrade.topics.find(u => u.topic.toLowerCase().replace(/\s+/g, '-') === topic) || selectedGrade.topics[0];

  selectedTopic.flashcards.forEach(card => {
    const imgFrame = document.createElement("div");
    const image = document.createElement("img");
    const meaning = document.createElement("h1");

    imgFrame.className = "img-frame";
    image.src = card.image;
    image.className = "images";
    meaning.className = "meaning";
    meaning.textContent = card.name;
    imgFrame.appendChild(image);
    imgFrame.appendChild(meaning);
    container.appendChild(imgFrame);
  });
};
loadImages({grade: defaultGrade, topic: defaultTopic});

// Add event listeners to the selections
gradeSelection.addEventListener("change", (e) => {
  currentGrade = e.target.value;
  container.innerHTML = "";
  createTopicOptions(e.target.value);
  loadImages({grade: e.target.value});
})

topicSelection.addEventListener("change", (e) => {
  container.innerHTML = "";
  loadImages({topic: e.target.value});
})

// button functions
toggleTextBtn.addEventListener("click", () => {
    toggleTextBtn.textContent = toggleTextBtn.textContent === "Hide Text" ? "Show Text" : "Hide Text";
    document.querySelectorAll(".meaning").forEach(meaning => {
      meaning.classList.toggle("hide-items");
    })
});

readingBtn.addEventListener("click", () => {
  readingBtn.textContent = readingBtn.textContent === "Reading" ? "Studying" : "Reading";
  document.querySelectorAll(".meaning").forEach(meaning => {
    meaning.classList.toggle("reading");
  });
  document.querySelectorAll(".images").forEach(image => {
    image.classList.toggle("hide-items");
  })
});
