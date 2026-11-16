/*
    Footer.jsx - футер: контакти і посилання на соціальні мережі
    Шаренко Владислав Юрійович, група АнД-31, варіант 24
*/
import './Footer.css'
// зчитуємо контакти і соцмережі з файлу JSON
import footer from './Footer.json'

export function Footer() {
  return (
    <footer id="contacts" className="footer">
      <div className="footer-inner">
        <div>
          <h3>{footer.name}</h3>
          <p>{footer.about}</p>
        </div>
        <dl className="contacts">
          {footer.contacts.map((c) => (
            <div key={c.id}>
              <dt>{c.label}</dt>
              <dd>{c.value}</dd>
            </div>
          ))}
        </dl>
        <div>
          <h3>Ми в соцмережах</h3>
          <div className="socials">
            {footer.socials.map((s) => (
              <a
                key={s.id}
                href={s.url}
                title={s.name}
                target="_blank"
                rel="noreferrer"
              >
                <span>{s.short}</span>
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="copyright">© 2026 {footer.name}</p>
    </footer>
  )
}
