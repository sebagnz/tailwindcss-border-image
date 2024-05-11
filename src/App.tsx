import { Section } from './components/Section'

export const App = () => (
  <div className="bg-slate-300 min-h-screen">
    <article className="mx-40 space-y-10 py-10">
      <h1>Tailwind CSS border image plugin</h1>

      <Section>
        <p>This is a section without border images.</p>
      </Section>

      <Section className="border-image-fill from-purple-500 to-purple-500 border-outset-x-screen">
        <p>This section has a border image with a gradient from top to bottom</p>
      </Section>

      <div className="py-1">
        <Section className="slant slant-l border-image-fill from-red-400 to-red-400 border-outset-screen">
          <p>This section is slanted to the left</p>
        </Section>
      </div>
      <div className="py-1">
        <Section className="slant slant-r border-image-fill from-green-300 to-green-300 border-outset-screen">
          <p>This section is sketched to the right</p>
        </Section>
      </div>
    </article>
  </div>
)
