/*
import Layout from '@/components/layout/Layout';
import Section from '@/components/ui/section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, ExternalLink, Calendar, Users } from 'lucide-react';

const Research = () => {
  const publications = [
    {
      title: 'Machine Learning Approaches to Web Performance Optimization',
      authors: ['John Doe', 'Jane Smith', 'Dr. Robert Wilson'],
      journal: 'IEEE Transactions on Software Engineering',
      year: '2023',
      abstract: 'This paper presents novel machine learning techniques for automatically optimizing web application performance. We demonstrate a 35% improvement in load times across various web applications.',
      tags: ['Machine Learning', 'Web Performance', 'Optimization'],
      pdfUrl: '#',
      citationCount: 23,
    },
    {
      title: 'Serverless Architecture Patterns for Scalable Applications',
      authors: ['John Doe', 'Dr. Sarah Chen'],
      journal: 'ACM Computing Surveys',
      year: '2022',
      abstract: 'A comprehensive survey of serverless architecture patterns and their impact on application scalability. We analyze 50+ real-world applications and provide design recommendations.',
      tags: ['Serverless', 'Cloud Computing', 'Scalability'],
      pdfUrl: '#',
      citationCount: 41,
    },
    {
      title: 'Real-time Collaborative Editing: Conflict Resolution Algorithms',
      authors: ['John Doe', 'Mike Johnson', 'Dr. Lisa Brown'],
      journal: 'Journal of Computer Science and Technology',
      year: '2022',
      abstract: 'We propose new algorithms for conflict resolution in real-time collaborative editing systems, reducing conflicts by 60% compared to existing approaches.',
      tags: ['Distributed Systems', 'Algorithms', 'Collaboration'],
      pdfUrl: '#',
      citationCount: 18,
    },
  ];

  const researchAreas = [
    {
      title: 'Machine Learning & AI',
      description: 'Exploring applications of ML/AI in software engineering, web development, and user experience optimization.',
      icon: '🤖',
      projects: 3,
    },
    {
      title: 'Web Performance',
      description: 'Research on modern web technologies, performance optimization techniques, and user experience metrics.',
      icon: '⚡',
      projects: 5,
    },
    {
      title: 'Distributed Systems',
      description: 'Studies on scalable architectures, microservices, and cloud-native application development.',
      icon: '🌐',
      projects: 4,
    },
    {
      title: 'Human-Computer Interaction',
      description: 'Investigation of user interface design principles and accessibility in modern web applications.',
      icon: '👥',
      projects: 2,
    },
  ];

  const conferences = [
    {
      name: 'ACM SIGPLAN Conference on Programming Language Design',
      role: 'Speaker',
      year: '2023',
      topic: 'TypeScript in Large-Scale Applications',
    },
    {
      name: 'IEEE International Conference on Software Engineering',
      role: 'Paper Presenter',
      year: '2023',
      topic: 'ML-Based Performance Optimization',
    },
    {
      name: 'React Conf',
      role: 'Workshop Leader',
      year: '2022',
      topic: 'Advanced React Patterns',
    },
    {
      name: 'JSConf',
      role: 'Keynote Speaker',
      year: '2022',
      topic: 'Future of Web Development',
    },
  ];

  return (
    <Layout>
      <Section>
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold mb-6">
            <span className="gradient-text">Research</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My contributions to academic research in computer science, software engineering, 
            and web technologies.
          </p>
        </div>

        { Research Areas } put these titles in comment format . since it an commented i hvae remove it
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="gradient-text">Research Areas</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchAreas.map((area, index) => (
              <Card key={area.title} className="glass animate-scale text-center" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{area.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 gradient-text">{area.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {area.description}
                  </p>
                  <Badge className="bg-gradient-primary text-white">
                    {area.projects} Projects
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        //{ Publications } put these titles in comment format . since it an commented i hvae remove it 
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="gradient-text">Publications</span>
          </h2>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <Card key={pub.title} className="glass hover:glow transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2 gradient-text">{pub.title}</CardTitle>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{pub.authors.join(', ')}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{pub.year}</span>
                        </div>
                      </div>
                      <p className="text-sm font-medium text-secondary">{pub.journal}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{pub.citationCount} citations</Badge>
                      <Button size="sm" variant="outline" asChild>
                        <a href={pub.pdfUrl} target="_blank" rel="noopener noreferrer">
                          <FileText className="w-4 h-4 mr-2" />
                          PDF
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {pub.abstract}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {pub.tags.map((tag) => (
                      <Badge key={tag} className="bg-gradient-secondary/20 text-secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        { Conference Presentations }put these titles in comment format . since it an commented i hvae remove it
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="gradient-text">Conference Presentations</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {conferences.map((conf, index) => (
              <Card key={conf.name} className="glass animate-scale" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <CardTitle className="text-lg gradient-text">{conf.name}</CardTitle>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-gradient-accent text-white">{conf.role}</Badge>
                    <span className="text-sm text-muted-foreground">{conf.year}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    <strong>Topic:</strong> {conf.topic}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action }put these titles in comment format . since it an commented i hvae remove it
        <div className="text-center mt-16">
          <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Interested in Collaboration?</h3>
            <p className="text-muted-foreground mb-6">
              I'm always open to research collaborations and academic partnerships.
            </p>
            <Button className="bg-gradient-secondary text-white shadow-glow">
              <ExternalLink className="mr-2 w-4 h-4" />
              View Full Research Profile
            </Button>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Research;
*/
import Layout from '@/components/layout/Layout';
import Section from '@/components/ui/section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock } from 'lucide-react';

const Research = () => {
  return (
    <Layout>
      <Section>
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold mb-6">
            <span className="gradient-text">Research</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Exciting research updates are on the way.
          </p>
        </div>

        <Card className="glass mx-auto max-w-xl animate-fade-in">
          <CardHeader>
            <CardTitle className="text-2xl text-center gradient-text">
              <Clock className="inline-block w-6 h-6 mr-2" />
              Feature Coming Soon
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center text-muted-foreground">
            This section is under construction. Stay tuned for upcoming publications, research areas, and conference presentations.
          </CardContent>
        </Card>
      </Section>
    </Layout>
  );
};

export default Research;
