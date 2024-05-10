import { Section } from "./components/Section";

export const App = () => (
  <div className="bg-slate-300 min-h-screen">
    <article className="mx-40 space-y-10 py-10">
      <h1>Tailwind CSS border image plugin</h1>

      <Section>
        <p>This is a sectin without border images.</p>
      </Section>

      <Section className="border-source-gradient-to-t">
        <p>
          This section has a border image with a gradient from top to bottom
        </p>
      </Section>
    </article>
  </div>
);
