import Button from '../atoms/Button'
import './ScorePanel.css'

function getMessage(score, total) {
  if (score === total) return '¡Perfecto! No fallaste ninguna.'
  if (score >= total * 0.6) return 'Buen resultado. Casi lo tienes.'
  return 'Sigue practicando: la próxima irá mejor.'
}

export default function ScorePanel({ score, total, onPlayAgain }) {
  return (
    <section className="score-panel">
      <h1 className="score-panel__score">Tu puntuación: {score} / {total}</h1>
      <p className="score-panel__message">{getMessage(score, total)}</p>
      <Button onClick={onPlayAgain}>Jugar de nuevo</Button>
    </section>
  )
}