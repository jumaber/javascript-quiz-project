class Quiz { 
    constructor (questions, timeLimit, timeRemaining) {
        this.questions = questions; // Stores the questions array
        this.timeLimit = timeLimit; // Stores the total time limit
        this.timeRemaining = timeRemaining; // Stores the remaining time
        this.correctAnswers = 0; // Initializes the correct answer count
        this.currentQuestionIndex = 0; // Initializes the correct answer count
    }

    getQuestion(){
        return this.questions[this.currentQuestionIndex]; // Initializes the correct answer count
    }

    moveToNextQuestion(){
        this.currentQuestionIndex++; // Moves on to the next question
    }

    shuffleQuestions(){
        this.questions.sort(() => Math.random() - 0.5); // Shuffles randomly with the Fisher-Yates algorithm the questions
    }

    checkAnswer(answer){
        if (this.getQuestion().answer === answer){ // It checks if the questions is correct
            this.correctAnswers++; // It adds it to the correct Answers array
           }  
    }

    hasEnded(){
        if (this.currentQuestionIndex < this.questions.length){ // Continues because it reads that it has not reached the end of the questions array.
            return false;
        }
        else if (this.currentQuestionIndex === this.questions.length){ // It stops because it reads that it has reached the end of the questions array.
            return true;
        }
    }

    filterQuestionsByDifficulty(){
        // constructor(difficulty){}
        
    }

    averageDifficulty(){
        
    }
}


