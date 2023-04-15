import'./App.css'
export function App() {
  return (
    <article className='tw-followCard'>
      <header  className='tw-followCard-header'>
        <img alt="El avatar de midudev" src="https://unavatar.io/midudev" />
        <div>
          <strong>Miguel Angle Duran</strong>
          <span>@miidudev</span>
        </div>
      </header>

      <aside>
        <button>Seguir</button>
      </aside>

    </article>
  );
}
