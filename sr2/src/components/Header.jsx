/*
    Header.jsx - шапка сайту: логотип, головне меню і слайдер
    Шаренко Владислав Юрійович, група АнД-31, варіант 24
*/
import './Header.css'
import { useState, useEffect } from 'react'
// зчитуємо дані шапки з файлу JSON
import header from './Header.json'

export function Header() {
  // номер поточного слайда і стан мобільного меню
  const [counter, setCounter] = useState(0)
  const [open, setOpen] = useState(false)

  // слайдер: кожні 5000 мс переходимо до наступного слайда
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((counter) => (counter + 1) % header.slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const slide = header.slides[counter]

  return (
    <header id="top" className="header">
      <div className="header-bar">
        <a className="logo" href="#top">
          <span className="logo-sign"></span>
          <span>
            <b>{header.logo}</b>
            <small>{header.subtitle}</small>
          </span>
        </a>
        <button
          className="burger"
          type="button"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
        {/* пункти меню - з масиву menu */}
        <nav className={open ? 'menu menu-open' : 'menu'}>
          {header.menu.map((punkt) => (
            <a
              key={punkt.id}
              href={punkt.url}
              onClick={() => setOpen(false)}
            >
              {punkt.name}
            </a>
          ))}
        </nav>
      </div>

      <div className="slider" style={{ backgroundColor: slide.color }}>
        <div className="slide" key={slide.id}>
          <h1>{slide.title}</h1>
          <p>{slide.text}</p>
          <a className="slide-btn" href="#admission">Вступникам</a>
        </div>
        <div className="dots">
          {header.slides.map((s, index) => (
            <button
              key={s.id}
              type="button"
              className={index === counter ? 'dot dot-active' : 'dot'}
              onClick={() => setCounter(index)}
            ></button>
          ))}
        </div>
      </div>
    </header>
  )
}
