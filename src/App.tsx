import './App.css'
import { rules } from './rules'

function App() {
  return (
    <main className="lab">
      <header className="lab-header">
        <h1>UI Up</h1>
        <p>One rule per row. Left is before applying it, right is after.</p>
      </header>

      <div className="lab-columns" aria-hidden="true">
        <span>Before</span>
        <span>After</span>
      </div>

      {rules.map((rule) => (
        <section className="rule" key={rule.id} aria-labelledby={`${rule.id}-title`}>
          <h2 id={`${rule.id}-title`}>{rule.title}</h2>
          {rule.description && <p className="rule-description">{rule.description}</p>}

          <div className="rule-panes">
            <div className="pane">
              <span className="pane-label">Before</span>
              {rule.before}
            </div>
            <hr className="rule-divider" />
            <div className="pane">
              <span className="pane-label">After</span>
              {rule.after}
            </div>
          </div>
        </section>
      ))}
    </main>
  )
}

export default App
