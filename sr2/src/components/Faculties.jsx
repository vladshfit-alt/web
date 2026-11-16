/*
    Faculties.jsx - основний контент: картки факультетів з файлу JSON
    Шаренко Владислав Юрійович, група АнД-31, варіант 24
*/
import './Faculties.css'
// зчитуємо перелік факультетів з файлу JSON
import faculties from './Faculties.json'

export function Faculties() {
  return (
    <section id="faculties">
      <h2 className="section-title">Факультети</h2>
      <div className="cards">
        {/* проходимо по масиву, key - унікальний id факультету */}
        {faculties.map((f) => (
          <article key={f.id} className={'card card-' + f.color}>
            <h3>{f.name}</h3>
            <p>{f.text}</p>
            <ul>
              {f.specialties.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <span className="card-count">
              Спеціальностей: {f.specialties.length}
            </span>
          </article>
        ))}
      </div>
    </section>
  )
}
