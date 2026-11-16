/*
    News.jsx - блок новин з файлу JSON
    Шаренко Владислав Юрійович, група АнД-31, варіант 24
*/
import './News.css'
// зчитуємо новини з файлу JSON
import news from './News.json'

export function News() {
  return (
    <section id="news">
      <h2 className="section-title">Новини</h2>
      <div className="news">
        {news.map((n) => (
          <article key={n.id} className="news-item">
            <div className="news-top">
              <span className="news-tag">{n.tag}</span>
              <time>{n.date}</time>
            </div>
            <h3>{n.title}</h3>
            <p>{n.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
