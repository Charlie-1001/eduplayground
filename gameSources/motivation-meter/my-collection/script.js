const startPage = document.querySelector('.start-page');
const gameContainer = document.querySelector('.game-container');
const summaryContainer = document.querySelector('.summary-container');
const numOfTeams = document.getElementById("numOfTeams");
const typeOfCollection = document.getElementById("typeOfCollection");
const startBtn = document.getElementById("start-btn");
const doneBtn = document.getElementById("doneBtn");
const plusSound = new Audio("assets/sounds/correct.mp3");
const minusSound = new Audio("assets/sounds/incorrect.mp3");
let collectionType = "";
let report = {};
let itemPanelHeight = 0;
let maxNumOfStars = 0;

// The starting page
function createTeams(teamCount) {
  for (let i = 1; i <= teamCount; i++) {
    const team = document.createElement("div");
    team.className = 'team';
    team.id = `team${i}`;

    const teamName = document.createElement("input");
    teamName.className = "team-name";
    teamName.value = `Team ${i}`;

    const scorePanel = document.createElement("div");
    scorePanel.className = "score-panel";

    const plusBtn = document.createElement("button");
    plusBtn.className = "plus-btn";
    plusBtn.textContent = "+";

    const minusBtn = document.createElement("button");
    minusBtn.className = "minus-btn";
    minusBtn.textContent = "-";

    const scoreBox = document.createElement("div");
    scoreBox.className = "score-box";
    scoreBox.textContent = "0";

    const itemPanel = document.createElement("div");
    itemPanel.className = "item-panel";

    minusBtn.addEventListener("click", (e) => btnFunctions(e));
    plusBtn.addEventListener("click", (e) => btnFunctions(e));
    
    scorePanel.append(plusBtn, scoreBox, minusBtn);
    team.append(teamName, scorePanel, itemPanel);
    gameContainer.appendChild(team);

    // accessing the values of itemPanel's height and max number of stars can be fitted in the panel
    itemPanelHeight = itemPanel.clientHeight;
    maxNumOfStars = calculateMaxItems(itemPanel);
  }
}

startBtn.addEventListener("click", () => {
  startPage.style.display = "none";
  gameContainer.classList.remove('hidden');
  createTeams(Number(numOfTeams.value));
  collectionType = typeOfCollection.value; // getting the value of collection type
});

// The game section 
function btnFunctions(btn) {
  const currentBtn = btn.currentTarget;
  const isPlusBtn = currentBtn.classList.contains("plus-btn");
  const scoreBox = currentBtn.parentElement.querySelector(".score-box");
  const itemPanel = currentBtn.parentElement.parentElement.querySelector(".item-panel");

  if (scoreBox) {
    let score = parseInt(scoreBox.textContent, 10) || 0;

    if (isPlusBtn) {
      plusSound.pause();
      plusSound.currentTime = 0;
      plusSound.play();
      if (score < maxNumOfStars * 2) score += 1;
    } else {
      minusSound.pause();
      minusSound.currentTime = 0;
      minusSound.play();
      score -= 1;
    }
    scoreBox.textContent = score;
    addOrRemoveItems(collectionType, itemPanel, score);
  }
}

function calculateMaxItems(itemPanel) {
  const tempBox = document.createElement("div");
  tempBox.className = Number(numOfTeams.value) < 3 ? "item-box-big" : "item-box";
  tempBox.style.visibility = "hidden";
  itemPanel.appendChild(tempBox);

  const panelWidth = itemPanel.clientWidth;
  const panelHeight = itemPanel.clientHeight;
  const boxWidth = tempBox.offsetWidth;
  const boxHeight = tempBox.offsetHeight;

  itemPanel.removeChild(tempBox);
  return Math.floor(panelWidth / boxWidth) * Math.floor(panelHeight / boxHeight);      
}

function addOrRemoveItems(type, itemPanel, scoreNum) {
  let goodItem, badItem, bestItem;
  let maxItems = calculateMaxItems(itemPanel);
  itemPanel.innerHTML = "";

  if (type === "star") {
    goodItem = "assets/images/blue-star.png";
    badItem = "assets/images/black-star.png";
    bestItem = "assets/images/smiling-star.png";
  }

  if (type === "coin") {
    goodItem = "assets/images/silver-coin.png";
    badItem = "assets/images/stone.png";
    bestItem = "assets/images/gold-coin.png";
  }

  if (type === "diamond") {
    badItem = "assets/images/bad-diamond.png";
    goodItem = "assets/images/good-diamond.png";
    bestItem = "assets/images/best-diamond.png";
  }

  if (scoreNum > 0 && scoreNum <= maxItems) {
    for (let i = 1; i <= scoreNum; i++) {
      const itemBox = document.createElement("div");
      itemBox.className = Number(numOfTeams.value) < 3 ? "item-box-big" : "item-box";

      const item = document.createElement("img");
      item.className = "item";
      item.src = goodItem;
      itemBox.appendChild(item);
      itemPanel.appendChild(itemBox);
    }
  } else if (scoreNum < 0) {
      for (let i = 1; i <= Math.abs(scoreNum); i++) {
        const itemBox = document.createElement("div");
        itemBox.className = "item-box";
        const item = document.createElement("img");
        item.className = "item";
        item.src = badItem;
        itemBox.appendChild(item);
        itemPanel.appendChild(itemBox);
      }
  }

  if (scoreNum > maxItems && scoreNum <= maxItems * 2) {
    const numOfBestItem = scoreNum - maxItems;
    for (let i = 1; i <= numOfBestItem; i++) {
      const itemBox = document.createElement("div");
      itemBox.className = "item-box";
      const item = document.createElement("img");
      item.className = "item";
      item.src = bestItem;
      itemBox.appendChild(item);
      itemPanel.appendChild(itemBox);
    }
  } else {
    return;
  }
}

// to report the information about the teams for the summary page
function reportingInfo(teamId, teamName, score) {
  report[teamId] = {
    teamName: teamName,
    teamScore: score
  }
}

doneBtn.addEventListener("click", () => {
  const summarySound = new Audio("assets/sounds/victory.mp3");
  summarySound.play();
  const teams = gameContainer.querySelectorAll(".team");
  for (let team of teams) {
    const teamId = team.id;
    const teamName = team.querySelector('.team-name').value;
    const teamScore = Number(team.querySelector('.score-panel .score-box').textContent);

    reportingInfo(teamId, teamName, teamScore);
  }
  teamSummary();
})

function teamSummary() {
  gameContainer.classList.add("hidden");
  summaryContainer.classList.remove("hidden");

  const starHeads = [
    "assets/images/first-star.png",
    "assets/images/second-star.png",
    "assets/images/third-star.png",
    "assets/images/fourth-star.png"
  ];
  const colors = ["green", "blue", "yellow", "red"];
  let i = 0; // a flag to update the background colors of team blocks
  let sortedScore = [];              
  let scores = [];

  for (let ts in report) {
    scores.push(report[ts].teamScore);
  }
  sortedScore = scores.sort((a, b) => b - a); // to sort the scores from high to low 

  for (let team in report) {
    const teamBlockContainer = document.createElement("div");
    teamBlockContainer.className = "team-summary-container";

    const teamBlockHead = document.createElement('div');
    teamBlockHead.className = "team-summary-head";

    const teamBlockHeadImg = document.createElement('img');
    teamBlockHeadImg.className = "team-summary-head-img";

    for (let i=0; i < sortedScore.length; i++) {
      if (report[team].teamScore === sortedScore[i]) {
        teamBlockHeadImg.src = starHeads[i]; // to choose the star headings based on the scores
      }
    }

    const teamBlock = document.createElement("div");
    teamBlock.className = "team-summary";

    // append the teamblockhead first to get its client height
    teamBlockHead.appendChild(teamBlockHeadImg);
    teamBlockContainer.append(teamBlockHead);
    summaryContainer.appendChild(teamBlockContainer);

    // to determine the height of the team blocks to never exceeds the height of the summary container
    const heightPerScore = (summaryContainer.clientHeight - teamBlockHead.clientHeight) / (maxNumOfStars * 2);
    const blockheight = report[team].teamScore * heightPerScore;

    teamBlock.style.height = Math.max(blockheight, 0) + "px"; // to set the height to 0 when the value is negative
    teamBlock.style.backgroundColor = colors[i];
    teamBlock.textContent = report[team].teamName;
    teamBlock.style.boxShadow = `2px 2px 10px white`;
    teamBlock.style.borderRadius = "0 0 0.3rem 0.3rem";
    i++

    teamBlockContainer.append(teamBlock);
    summaryContainer.appendChild(teamBlockContainer);
  }
}