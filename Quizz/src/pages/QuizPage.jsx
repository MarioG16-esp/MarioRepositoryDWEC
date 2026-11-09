import { useState } from 'react'
import { questions as allQuestions } from '@/data/questions'
import { buildQuiz } from '@/utils/buildQuiz'
import ProgressBar from '@/components/atoms/ProgressBar'
import Button from '@/components/atoms/Button'
import StartScreen from '@/components/organisms/StartScreen'
import QuestionCard from '@/components/organisms/QuestionCard'
import ScorePanel from '@/components/organisms/ScorePanel'
import './QuizPage.css'

const AMOUNT = 5

export default function QuizPage() {
  // Estado: lo único que se guarda
  const [phase, setPhase] = useState('start') // 'start' | 'playing' | 'finished'
  const [questions, setQuestions] = useState(() => buildQuiz(allQuestions, AMOUNT))
  const [currentIndex, setCurrentIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState({})

  // Valores calculados: no se guardan
  const question = questions[currentIndex]
  const selected = userAnswers[question.id] ?? null
  const isLast = currentIndex === questions.length - 1
  const score = questions.filter((q) => userAnswers[q.id] === q.correct).length

  function handleSelect(questionId, answer) {
    setUserAnswers((prev) => ({ ...prev, [questionId]: answer }))
  }

  function handleNext() {
    if (isLast) setPhase('finished')
    else setCurrentIndex((i) => i + 1)
  }

  function startGame() {
    setQuestions(buildQuiz(allQuestions, AMOUNT))
    setCurrentIndex(0)
    setUserAnswers({})
    setPhase('playing')
  }

  return (
    <main className="quiz-page">
      <div className="quiz-page__panel">
        {phase === 'start' && <StartScreen total={AMOUNT} onStart={startGame} />}

        {phase === 'playing' && (
          <>
            <ProgressBar value={currentIndex + 1} max={questions.length} />
            <QuestionCard
              key={question.id}
              question={question}
              selected={selected}
              locked={selected !== null}
              onSelect={handleSelect}
            />
            <div className="quiz-page__actions">
              <Button onClick={handleNext} disabled={selected === null}>
                {isLast ? 'Ver resultado' : 'Siguiente'}
              </Button>
            </div>
          </>
        )}

        {phase === 'finished' && (
          <ScorePanel score={score} total={questions.length} onPlayAgain={startGame} />
        )}
      </div>
    </main>
  )
}