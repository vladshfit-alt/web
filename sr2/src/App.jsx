/*
    App.jsx - головний компонент: шапка, основні блоки і футер
    Шаренко Владислав Юрійович, група АнД-31, варіант 24
*/
import { Header } from './components/Header'
import { Faculties } from './components/Faculties'
import { Admission } from './components/Admission'
import { News } from './components/News'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      {/* смуга з даними студента */}
      <p className="student">
        СР2 «Знайомство з React» · Шаренко Владислав Юрійович, АнД-31,
        варіант 24 (у завданні - 2, сайт університету)
      </p>
      <Header />
      <main>
        <Faculties />
        <Admission />
        <News />
      </main>
      <Footer />
    </>
  )
}

export default App
