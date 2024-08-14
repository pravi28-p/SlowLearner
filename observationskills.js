const quizQuestions = [
    {
      
        question: "If you divide 30 by half and then add ten, what do you get?",
      
        options: ["25", "40", "70"],
        answer: "70",
          image: "pictures.jpg"

    },
    {
      question: "2. Which number is the odd one out: 3, 5, 7, 9, 11?",
      options: ["2", "5", "9"],
      answer: "9"
    },
    {
      question: "A farmer has 17 sheep. All but 9 of them die. How many sheep are left?",
      options: ["9", "8", "0"],
      answer: "9"
    },
    {
      question: "If you divide 30 by half and then add ten, what do you get?",
      options: ["25", "40", "70"],
      answer: "70"
    },
    {
      question: "How many sides does a circle have?",
      options: ["0", "1", "Infinite"],
      answer: "1"
    },
    {
      question: "What is the next number in the sequence: 1, 4, 9, 16, ...?",
      options: ["24", "25", "36"],
      answer: "25"
    },
    {
      question: "If you rearrange the letters 'CIFAIPC', you would have the name of a(n):",
      options: ["City", "Ocean", "Animal"],
      answer: "Ocean"
    },
    {
      question: "How many months have 28 days?",
      options: ["1", "12", "All of them"],
      answer: "All of them"
    },
    {
      question: "What is the missing number in the sequence: 2, 6, 12, 20, ...?",
      options: ["30", "24", "36"],
      answer: "30"
    },
    {
      question: "What has keys but can't open locks?",
      options: ["A piano", "A computer", "A treasure chest"],
      answer: "A piano"
    }
  ];
  
  // Variables to track quiz state
  let currentQuestionIndex = 0;
  let score = 0;
  let timeLeft = 30;
  let timerInterval;
  
  // Function to start the quiz
  function startQuiz() {
    // Hide the start button and display the first question
    document.getElementById("start-button").style.display = "none";
    displayQuestion();
    startTimer();
  }
  
  // Function to display a question and its options
  function displayQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const questionText = document.getElementById("question-text");
    const answerButtons = document.getElementById("answer-buttons");
  
    // Clear previous question and answer options
    questionText.innerHTML = "";
    answerButtons.innerHTML = "";
  
    // Display the current question
    questionText.innerHTML = currentQuestion.question;
  
    // Create answer buttons for each option
    currentQuestion.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      button.classList.add("answer-button");
      answerButtons.appendChild(button);
  
      // Add click event listener to check the answer
      button.addEventListener("click", function() {
        checkAnswer(option);
      });
    });
  }
  
  // Function to check the selected answer
  function checkAnswer(selectedOption) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
  
    // Check if the selected answer is correct
    if (selectedOption === currentQuestion.answer) {
      score++;
    }
  
    // Move to the next question or end the quiz if all questions are answered
    currentQuestionIndex++;
  
    if (currentQuestionIndex < quizQuestions.length) {
      displayQuestion();
    } else {
      endQuiz();
    }
  }
  
  // Function to start the timer
  function startTimer() {
    timerInterval = setInterval(function() {
      timeLeft--;
  
      // Update the timer text
      document.getElementById("timer").textContent = timeLeft;
  
      // End the quiz if time runs out
      if (timeLeft <= 0) {
        endQuiz();
      }
    }, 1000);
  }
  
  // Function to end the quiz
  function endQuiz() {
    // Stop the timer
    clearInterval(timerInterval);
  
    // Calculate the score percentage
    const scorePercentage = (score / quizQuestions.length) * 100;
  
    // Display the final score
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = `
      <h2>Quiz Completed!</h2>
      <p>Your Score: ${score} out of ${quizQuestions.length}</p>
      <p>Score Percentage: ${scorePercentage}%</p>
    `;
  }
  
  // Add event listener to start the quiz when the start button is clicked
  document.getElementById("start-button").addEventListener("click", startQuiz);