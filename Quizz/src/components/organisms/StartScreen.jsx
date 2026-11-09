import Button from '../atoms/Button'
import './StartScreen.css'

export default function StartScreen({ total, onStart }) {
  return (
    <section className="start-screen">
      <h1 className="start-screen__title">Quiz de desarrollo web</h1>
      <p className="start-screen__text">
        Responde {total} preguntas al azar sobre JavaScript, CSS, HTML y React.
      </p>
      <Button onClick={onStart}>Empezar</Button>
    </section>
  )
}