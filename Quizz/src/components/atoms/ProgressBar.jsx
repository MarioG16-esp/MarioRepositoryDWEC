import './ProgressBar.css'

export default function ProgressBar({ value, max }) {
  const percent = max > 0 ? (value / max) * 100 : 0
  return (
    <div className="progress-bar">
      <p className="progress-bar__label">Pregunta {value} de {max}</p>
      <div
        className="progress-bar__track"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-label="Progreso del quiz"
      >
        <div className="progress-bar__fill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  )
}