import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-exampage',
  templateUrl: './exampage.component.html',
  styleUrls: ['./exampage.component.css']
})
export class ExampageComponent implements OnInit, OnDestroy {
  questions = [
    {
      question: 'What is the capital of India?',
      options: ['Mumbai', 'Chennai', 'New Delhi', 'Kolkata'],
      correctAnswer: 'New Delhi',
    },
    {
      question: 'Which is the largest planet in our solar system?',
      options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
      correctAnswer: 'Jupiter',
    },
    {
      question: 'Who is known as the father of computers?',
      options: ['Charles Babbage', 'Alan Turing', 'Bill Gates', 'Steve Jobs'],
      correctAnswer: 'Charles Babbage',
    },
    {
      question: 'What is the chemical symbol for water?',
      options: ['O2', 'CO2', 'H2O', 'HO2'],
      correctAnswer: 'H2O',
    }
  ];

  currentQuestionIndex = 0;
  selectedAnswer: string | null = null;
  score = 0;
  totalTimer = 120; // 2 minutes for all questions
  intervalId: any;
  isAnswered = false;

  get currentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  ngOnInit() {
    this.startTotalTimer();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  startTotalTimer() {
    this.intervalId = setInterval(() => {
      this.totalTimer--;
      if (this.totalTimer <= 0) {
        this.finishQuiz();
      }
    }, 1000);
  }

  onOptionSelected(option: string) {
    if (this.isAnswered) return;

    this.selectedAnswer = option;
    this.isAnswered = true;

    if (option === this.currentQuestion.correctAnswer) {
      this.score++;
    }

    setTimeout(() => this.goToNextQuestion(), 300); // short delay before switching
  }

  goToNextQuestion() {
    this.selectedAnswer = null;
    this.isAnswered = false;
    this.currentQuestionIndex++;

    if (this.currentQuestionIndex >= this.questions.length) {
      this.finishQuiz();
    }
  }

  finishQuiz() {
    clearInterval(this.intervalId);
    alert(`Time's up or all questions answered! Your score is ${this.score}/${this.questions.length}`);
  }
}
