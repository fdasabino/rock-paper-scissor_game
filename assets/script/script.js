const game = () => {
	let pScore = 0;
	let cScore = 0;

	//start the game
	const startGame = () => {
		const playBtn = document.querySelector(".intro button");
		const introScreen = document.querySelector(".intro");
		const match = document.querySelector(".match");

		playBtn.addEventListener("click", () => {
			introScreen.classList.add("fadeOut");
			match.classList.add("fadeIn");
		});
	};
	//Play Match
	const playMatch = () => {
		const options = document.querySelectorAll(".options button");
		const playerHand = document.querySelector(".player-hand");
		const computerHand = document.querySelector(".computer-hand");
		const hands = document.querySelectorAll(".hands img");

		hands.forEach((hand) => {
			hand.addEventListener("animationend", function () {
				this.style.animation = "";
			});
		});

		//Computer Options
		const computerOptions = ["rock", "paper", "scissors"];
		options.forEach((option) => {
			option.addEventListener("click", function () {
				//computer choice
				const computerNumber = Math.floor(Math.random() * 3);
				const computerChoice = computerOptions[computerNumber];

				setTimeout(() => {
					//here is where we call compare hands
					compareHands(this.textContent, computerChoice);
					//Update Images
					playerHand.src = `./assets/img/${this.textContent}.png`;
					computerHand.src = `./assets/img/${computerChoice}.png`;
				}, 2000);

				//Animation
				playerHand.style.animation = "shakePlayer 2s ease";
				computerHand.style.animation = "shakeComputer 2s ease";
			});
		});
	};

	//update score
	const updateScore = () => {
		const playerScore = document.querySelector(".player-score p");
		const computerScore = document.querySelector(".computer-score p");
		playerScore.textContent = pScore;
		computerScore.textContent = cScore;
	};
	//compare hands
	const compareHands = (playerChoice, computerChoice) => {
		const winner = document.querySelector(".winner");
		//checking for draw
		if (playerChoice === computerChoice) {
			winner.textContent = "It's a Draw";
			return;
		}

		//Check for Rock
		if (playerChoice === "rock") {
			if (computerChoice === "scissors") {
				winner.textContent = "You Win";
				pScore++;
				updateScore();
				return;
			} else {
				winner.textContent = "Computer Wins";
				cScore++;
				updateScore();
				return;
			}
		}

		//check for paper
		if (playerChoice === "paper") {
			if (computerChoice === "scissors") {
				winner.textContent = "Computer Wins";
				cScore++;
				updateScore();
				return;
			} else {
				winner.textContent = "You Win";
				pScore++;
				updateScore();
				return;
			}
		}

		//check for scissors
		if (playerChoice === "scissors") {
			if (computerChoice === "rock") {
				winner.textContent = "Computer Wins";
				cScore++;
				updateScore();
				return;
			} else {
				winner.textContent = "You Win";
				pScore++;
				updateScore();
				return;
			}
		}
	};

	//call all the inner functions
	startGame();
	playMatch();
	updateScore();
};

//start the game function
game();
