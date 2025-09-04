import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/layout/Layout';
import Section from '@/components/ui/section';
import { ArrowRight, Download, Mail, MapPin, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBackground from '@/assets/hero-background.jpg';
import profilePic from '@/assets/webphoto.jpeg';

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <Section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 text-center animate-fade-in">
          <div className="animate-float mb-8">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-intense border-4 border-white animate-float">
  <img
  src={profilePic}
  alt="Sabari Srinivas A"
  className="w-full h-full object-cover"
/>
</div>

          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Sabari Srinivas A</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            AI SAAS Builder, Full-Stack Developer, AI/ML Research, Data Science and Data Engineering
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/projects">
              <Button size="lg" className="bg-gradient-primary text-white shadow-glow hover:shadow-intense">
                View My Work
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a 
  href="https://drive.google.com/uc?export=download&id=1UNrU_Goa5vs05NWfrDRBZ1wzkoPqUo0N" 
  download="resume_sabari.pdf"
>
  <Button 
    variant="outline" 
    size="lg" 
    className="border-primary/50 hover:bg-primary/10"
  >
    <Download className="mr-2 w-5 h-5" />
    Download Resume
  </Button>
</a>

          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl font-bold mb-6">
              <span className="gradient-text">About Me</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I am an aspiring AI Engineer and Full-Stack Developer, passionate about designing efficient, smart AI algorithms and building high-performance models that can scale from cloud to edge devices. Currently in my final year of Computer Science & Engineering at Shiv Nadar University, Chennai, I aim to research and implement AI systems that automate processes, optimize performance, and deliver real-world impact.

            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          Guided by the principle: If it can be automated or optimized, I want to make it happen.
          <br /><br />
          <strong>Focus Areas:</strong>
          <br />
          • Developing efficient and smart AI algorithms for high-performance solutions
          <br />
          • Researching and deploying scalable AI models across cloud and edge platforms
          <br />
          • Leveraging full-stack development skills to transform AI research into practical applications
          <br />
          • Driving automation and optimization to make technology faster, smarter, and more accessible
          <br /><br />
          Beyond tech, I find inspiration and balance in video games and cricket, which fuel creativity and innovative thinking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-secondary text-white">
                <Mail className="mr-2 w-4 h-4" />
                Get In Touch
              </Button>
              <Link to="/experience">
                <Button variant="outline">
                  Learn More About Me
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="animate-slide-up">
            <Card className="glass glow">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-lg">Chennai,India</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-secondary" />
                    <span className="text-lg">Available for new opportunities</span>
                  </div>
                  <div className="pt-4">
                    <h3 className="font-semibold mb-3 text-xl">Core Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {['FullStack', 'Azure', 'Docker and Kubernetes', 'Computer Vision','Speech Technology', 'Data Engineering', 'Generative AI' ,'AIML Research', 'Data Science', 'Signal Processing'].map((tech) => (
                        <span 
                          key={tech} 
                          className="px-3 py-1 bg-gradient-primary/20 text-primary rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Quick Links */}
      <Section className="bg-background-secondary/50">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Explore My Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover my projects, experience, research, and products
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Projects', desc: 'Web & Mobile Apps', href: '/projects', color: 'primary' },
            { title: 'Experience', desc: 'Career Journey', href: '/experience', color: 'secondary' },
            { title: 'Research', desc: 'Academic Work', href: '/research', color: 'accent' },
            { title: 'SAAS Products', desc: 'Software Solutions', href: '/saas', color: 'primary' },
          ].map((item, index) => (
            <Link key={item.title} to={item.href}>
              <Card className="glass animate-scale group hover:glow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-${item.color} rounded-xl flex items-center justify-center text-white text-2xl font-bold`}>
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 gradient-text">{item.title}</h3>
                  <p className="text-muted-foreground mb-4">{item.desc}</p>
                  <ArrowRight className="w-5 h-5 mx-auto text-primary group-hover:translate-x-1 transition-transform" />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default Home;