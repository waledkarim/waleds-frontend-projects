import Card from "@/components/Card";
import Header from "@/components/Header";
import projects from "data/projects";

export default function Home() {
  return (
    <main>
      <Header />
      <section className="wrapper grid-container">
        {projects.map((project, i) => (
          <Card
            key={i}
            title={project.title}
            link={project.link}
            description={project.description}
            enabled={project.enabled}
          />
        ))}
      </section>
    </main>
  );
}
