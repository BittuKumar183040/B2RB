import Seperator from '../components/Seperator';
import { forwardRef } from 'react';
import Header from './components/Header';

const HeaderTitle = ({ title }) => {
  return (
    <header className="mt-2">
      <h1 className="text-sm font-semibold tracking-wide">{title}</h1>
      <Seperator />
    </header>
  )
}

const Builder = forwardRef(({ header, experiences, projects, skills, education, certifications, settings }, ref) => {
  const selectedPreview = settings.previewType.find((o) => o.selected)?.value ?? "exact";
  const selectedPageSize = settings.pageSize.find((o) => o.selected)?.value ?? "aspect-[1/1.414] w-198.5 h-280.75";
  const selectedFont = settings.font.find((o) => o.selected)?.value ?? "font-sans";
  const zoom = settings.zoom.value ?? 1;

  const pageClass = selectedPreview === "exact" ? selectedPageSize : "w-full";

  return (
    <div
      style={{ transform: `scale(${zoom})`, fontFamily: `'${selectedFont}', sans-serif`, transformOrigin: "top left" }}
      className={`resume-page border border-gray-300 rounded-sm pl-6 pr-6 pt-4 pb-4 flex flex-col shrink-0
        ${pageClass}`}
      ref={ref}
    >

      <Header header={header} />

      {/* EXPERIENCE */}
      {experiences.length > 0 && <Header title="EXPERIENCE" />}
      {experiences.map((exp, i) => (
        <div key={i} className="text-sm">
          <div className="flex justify-between font-semibold">
            <span>{exp.company.value}</span>
            <span>
              {exp.duration.value.start} - {exp.duration.value.end}
            </span>
          </div>
          <div className="flex justify-between italic">
            <span>{exp.designation.value}</span>
            <span>{exp.location.value}</span>
          </div>
          <div className="space-y-px">
            {exp.description.value.map((section, idx) => (<div>
              <div key={idx} className=' flex items-center gap-2'>
                <div className=" font-semibold ">
                  {section.label}
                </div>
                {section.sublabel && section.sublabel.value.length > 0 &&
                  <div className=" italic">
                    <> - {section.sublabel.value.join(", ")}</>
                  </div>
                }
              </div>
              <ul className={`list-disc ${section.sublabel && section.sublabel.value.length > 0 ? "ml-7" : "ml-6"}`}> {section.value} </ul>
            </div>
            ))}
          </div>
        </div>
      ))}

      <section>
        {projects.length > 0 && (
          <HeaderTitle title={"PROJECTS"} />
        )}
        {projects?.map((project, index) => {
          const tech = project.technology.value.join(", ")
          return (
            <section key={index}>
              <div className="flex justify-between gap-2 text-sm font-medium">
                <div className="flex gap-2 items-center">
                  <span className={project.title.className}>{project.title.value}</span>
                  <span>|</span>
                  <span className={project.technology.className}>{tech}</span>
                </div>
                <div className="flex flex-1 gap-2 ml-2">
                  {project.live.value && (
                    <a className={project.live.className} href={project.live.value} rel="noopener noreferrer" target="_blank" >View</a>
                  )}
                  {project.github.value && (
                    <a className={project.github.className} href={project.github.value} rel="noopener noreferrer" target="_blank" >Github</a>
                  )}
                </div>
                <div className={project.date.className}>{project.date.value}</div>
              </div>
              <ol className={project.description.className}>
                {project.description.value}
              </ol>
            </section>
          )
        })
        }
      </section>

      <section>
        {skills.length > 0 && (
          <HeaderTitle title={"TECHNICAL SKILLS"} />
        )}
        <div className="space-y-px ml-3">
          {skills.map((skill, index) => {
            const items = skill.items.value.join(", ")
            return (
              <p key={index}>
                <span className={skill.category.className}>
                  {skill.category.value}:
                </span>
                <span className={skill.items.className}>
                  {" "}{items}
                </span>
              </p>
            )
          })}
        </div>
      </section>

      <section>
        {education.length > 0 && <Header title={"EDUCATION"} />}
        {education.map((edu, index) => (
          <div key={index} className="ml-3">
            <div className="flex justify-between text-sm font-medium mt-2">
              <p className={edu.degree.className}>
                {edu.degree.value}
              </p>

              <p className={edu.location.className}>
                {edu.location.value}
              </p>
            </div>
            <div className="flex justify-between text-sm mt-1">
              <p className={edu.college.className}>
                {edu.college.value}
              </p>
              <p className={edu.duration.className}>
                {edu.duration.value}
              </p>
            </div>
          </div>
        ))}
      </section>


      <section>
        {certifications.length > 0 && (
          <HeaderTitle title={"CERTIFICATIONS / ACHIEVEMENTS"} />
        )}
        <ol className="list-disc pl-5 space-y-1 text-sm mt-2 ml-4">
          {certifications.map((cert, index) => (
            <li key={index}>
              <span className={cert.title.className}>
                {cert.title.value}
              </span>
              {cert.year.value && (
                <span className={cert.year.className}> {" - "}{cert.year.value} </span>
              )}
              {cert.issuer.value && (
                <span> {" | "}{cert.issuer.value} </span>
              )}
            </li>
          ))}
        </ol>
      </section>
    </div>
  )
});

export default Builder