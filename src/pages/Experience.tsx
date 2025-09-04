import Layout from '@/components/layout/Layout';
import Section from '@/components/ui/section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Building, GraduationCap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Summer Research Fellow (AI Lead)',
      company: 'NIT Trichy (WIDEZO)',
      location: 'Trichy, India',
      period: 'May 2025',
      description:
        'Delivered a real-time multilingual speech-to-speech translation system for WebRTC video calls, enhancing client communication capabilities. Optimized inference pipelines using ONNX, GPU parallelization (Slurm), and sliding-window techniques, achieving significant latency reduction and improved UX. Managed end-to-end deployment with stakeholder updates, ensuring alignment and client satisfaction. Deployed the product on edge devices and cloud infrastructure, enabling effective remote monitoring and patient-to-doctor communication.',
      technologies: ['ONNX', 'WebRTC', 'GPU Parallelization', 'Slurm', 'Edge Deployment'],
      achievements: [
        'Developed and deployed a real-time speech-to-speech translation system',
        'Optimized latency with ONNX and sliding-window pipelines',
        'Delivered cloud + edge deployment for healthcare use cases',
      ],
    },
    {
      title: 'Summer Research Fellow',
      company: 'IAS/IIT Ropar',
      location: 'Ropar, India',
      period: 'May 2024',
      description:
        'Concept Positioning System — Developed a scalable recommender system suggesting concepts in a linear learning path by increasing difficulty. Leveraged Bayesian Personalized Ranking with 50.1% benchmark accuracy on Stack Overflow data. Implemented distributed data-parallel pipelines to efficiently process large-scale datasets. Explored Bilateral VAEs, Collaborative Denoising Autoencoders, and CGAN-based synthetic data generation to enhance recommendation quality and engagement.',
      technologies: ['Bayesian Personalized Ranking', 'Distributed Data Pipelines', 'VAE', 'CDAE', 'CGAN'],
      achievements: [
        'Designed a scalable concept recommender system',
        'Achieved 50.1% accuracy on Stack Overflow benchmark',
        'Explored advanced ML approaches to improve recommendation quality',
      ],
    },
  ];

  const skills = [
    { category: 'Programming & OOP', items: ['Java', 'C/C++', 'Python', 'JavaScript', 'Data Structures & Algorithms'] },
    { category: 'Distributed Systems', items: ['Multi-GPU Pipelines', 'Cloud Deployment', 'Scalable APIs', 'Fault-tolerant Systems'] },
    { category: 'Databases & Data Engineering', items: ['MySQL', 'MongoDB', 'Apache Kafka', 'Dask', 'FAISS', 'Pinecone', 'ChromaDB'] },
    { category: 'Machine Learning & AI', items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'LangChain', 'HuggingFace', 'Neo4j'] },
    { category: 'Frameworks', items: ['Flask', 'Django', 'Node.js', 'Express.js', 'React.js', 'React Native', 'Flutter'] },
    { category: 'DevOps & Cloud', items: ['Git', 'Docker', 'Microsoft Azure', 'n8n', 'A2A'] },
    { category: 'Analytics & Visualization', items: ['Tableau', 'Power BI', 'Apache Superset', 'Pandas', 'NumPy', 'NetworkX', 'Matlab'] },
  ];

  const education = [
    {
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'Shiv Nadar University',
      period: 'Present',
      location: 'Chennai, India',
      details:
        '4th Year | CGPA: 9.305 | Leadership: Technical Head of AIML Coding Club — organized hackathons and workshops (Arduino, ESP8266, TinyML) with strong stakeholder engagement and event management outcomes.',
    },
    {
      degree: 'Class XII – CBSE',
      institution: 'Velammal Vidhyashram, Surapet',
      period: '2021 – 2022',
      location: 'Chennai, India',
      details: 'Percentage: 94.2%',
    },
    {
      degree: 'Class X – CBSE',
      institution: 'Velammal Vidhyashram, Surapet',
      period: '2019 – 2020',
      location: 'Chennai, India',
      details: 'Percentage: 91%',
    },
  ];

  return (
    <Layout>
      {/* Experience Section */}
      <Section>
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold mb-6">
            <span className="gradient-text">Experience</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey in software development, research, and AI innovation.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary opacity-30"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className="relative animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-primary rounded-full shadow-glow"></div>

                <div className="ml-16">
                  <Card className="glass hover:glow transition-all duration-300">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <CardTitle className="text-2xl gradient-text">{exp.title}</CardTitle>
                        <Badge className="bg-gradient-primary text-white w-fit">{exp.period}</Badge>
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
                      <p className="text-muted-foreground mb-6 leading-relaxed">{exp.description}</p>

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

      {/* Education Section */}
      <Section className="bg-background-secondary/50">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My academic background and qualifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <Card
              key={edu.degree}
              className="glass animate-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl gradient-text">{edu.degree}</CardTitle>
                <Badge className="bg-gradient-primary text-white w-fit">{edu.period}</Badge>
              </CardHeader>
              <CardContent>
                <div className="mb-3 flex items-center gap-2 text-muted-foreground">
                  <GraduationCap className="w-4 h-4" />
                  <span>{edu.institution}</span>
                </div>
                <div className="mb-3 flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{edu.location}</span>
                </div>
                <p className="text-muted-foreground">{edu.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Skills Section */}
      <Section>
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
            <Card
              key={skillGroup.category}
              className="glass animate-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
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
