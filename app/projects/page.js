"use client"

import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Responsive eCommerce frontend focused on clean UI, intuitive navigation, and smooth performance across all devices",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      tags: ["React", "Tailwind CSS"],
      demoLink: "https://sia-store.netlify.app/",
      githubLink: "https://github.com/assiaSannaghi/sia-store"
    },
    {
      title: "Share and Split App",
      description: "A smart bill-splitting app that calculates who owes what, making it easy to split expenses between friends and settle up quickly",
      image: "https://images.pexels.com/photos/6694864/pexels-photo-6694864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["React", "JavaScript", "Tailwind CSS", "Supabase"],
      demoLink: "https://sharensplit.netlify.app/",
      githubLink: "https://github.com/assiaSannaghi/share-and-split"
    },
    {
      title: "Forkify Food App",
      description: "A modern recipe app where users can add, search, and bookmark custom meals—designed for easy sharing and discovery",
      image: "https://images.pexels.com/photos/12673562/pexels-photo-12673562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["HTML", "SCSS", "JavaScript"],
      demoLink: "https://forkify-assia.netlify.app",
      githubLink: "https://github.com/assiaSannaghi/forkify-assia"
    }
  ]

  return (
    <div className="container px-4 py-24 mx-auto">
      <motion.h1
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col">
              <CardHeader>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="mt-auto">
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}