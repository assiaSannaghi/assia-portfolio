"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function About() {
  const skills = [
    "JavaScript", "React",
    "Next.js", "Tailwind CSS", "Redux", "React Query"
  ]

  const experiences = [
    {
      year: "Dec - Feb 2025",
      role: "Frontend Developer",
      company: "Passionate Talents",
      description: "Developed projects using modern technologies"
    }
  ]

  return (
    <div className="container px-4 py-24 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <p className="text-lg text-muted-foreground">
            A passionate developer with a keen eye for design and a love for creating
            seamless user experiences.
            I specialize in building modern, responsive, and performant web applications.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.year}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <span className="text-muted-foreground">{exp.year}</span>
                  </div>
                  <p className="text-primary mb-2">{exp.company}</p>
                  <p className="text-muted-foreground">{exp.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}