/*
    Admission.jsx - блок «Вступ»: числа університету і кроки вступу
    Шаренко Владислав Юрійович, група АнД-31, варіант 24
*/
import './Admission.css'
// зчитуємо числа і кроки вступу з файлу JSON
import admission from './Admission.json'

export function Admission() {
  return (
    <section id="admission">
      <h2 className="section-title">Вступ</h2>
      <div className="stats">
        {admission.stats.map((s) => (
          <div key={s.id} className="stat">
            <b>{s.value}</b>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
      <ol className="steps">
        {admission.steps.map((step) => (
          <li key={step.id} className="step">
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
