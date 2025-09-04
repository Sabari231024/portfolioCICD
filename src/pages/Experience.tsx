import Layout from '@/components/layout/Layout';
import Section from '@/components/ui/section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Lead development of scalable web applications serving 100K+ users. Implemented microservices architecture and improved system performance by 40%.',
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'MongoDB'],
      achievements: [
        'Led a team of 5 developers on major product launches',
        'Reduced server costs by 30% through optimization',
        'Implemented CI/CD pipeline reducing deployment time by 60%',
      ],
    },
    {
      title: 'Full-Stack Developer',
      company: 'StartupXYZ',
      location: 'Remote',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple web applications using modern JavaScript frameworks. Collaborated with design team to create user-friendly interfaces.',
      technologies: ['React', 'Python', 'PostgreSQL', 'Redux', 'GraphQL'],
      achievements: [
        'Built 3 major features that increased user engagement by 25%',
        'Mentored 2 junior developers',
        'Improved application performance by 50%',
      ],
    },
    {
      title: 'Frontend Developer',
      company: 'WebSolutions',
      location: 'New York, NY',
      period: '2019 - 2020',
      description: 'Focused on creating responsive, accessible web applications. Worked closely with UX designers to implement pixel-perfect designs.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Vue.js', 'Sass'],
      achievements: [
        'Improved website accessibility score to 98%',
        'Reduced page load times by 40%',
        'Converted 5 legacy projects to modern frameworks',
      ],
    },
    {
      title: 'Junior Developer',
      company: 'DevAgency',
      location: 'Los Angeles, CA',
      period: '2018 - 2019',
      description: 'Started my career developing custom websites and web applications for various clients. Gained experience in multiple technologies and frameworks.',
      technologies: ['PHP', 'WordPress', 'jQuery', 'MySQL', 'Bootstrap'],
      achievements: [
        'Completed 15+ client projects successfully',
        'Learned 5 new technologies in first year',
        'Received "Rising Star" award',
      ],
    },
  ];

  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Vue.js', 'Next.js', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'Express', 'FastAPI', 'GraphQL'] },
    { category: 'Database', items: ['MongoDB', 'PostgreSQL', 'Redis', 'Firebase', 'Supabase'] },
    { category: 'DevOps', items: ['AWS', 'Docker', 'CI/CD', 'Kubernetes', 'Terraform'] },
    { category: 'Tools', items: ['Git', 'Jest', 'Webpack', 'Vite', 'Figma'] },
  ];

  return (
    <Layout>
      <Section>
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold mb-6">
            <span className="gradient-text">Experience</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey in software development, from junior developer 
            to senior full-stack engineer.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary opacity-30"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.title} className="relative animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-primary rounded-full shadow-glow"></div>
                
                <div className="ml-16">
                  <Card className="glass hover:glow transition-all duration-300">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <CardTitle className="text-2xl gradient-text">{exp.title}</CardTitle>
                        <Badge className="bg-gradient-primary text-white w-fit">
                          {exp.period}
                        </Badge>
                      </div>
                      <div className="flex flex-col md:flex-row md:items-center gap-4 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Building className="w-4 h-4" />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section className="bg-background-secondary/50">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with regularly
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <Card key={skillGroup.category} className="glass animate-scale" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <CardTitle className="text-xl gradient-text">{skillGroup.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <Badge 
                      key={skill} 
                      className="bg-gradient-primary/20 text-primary hover:bg-gradient-primary hover:text-white transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default Experience;