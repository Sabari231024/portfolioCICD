/*
import Layout from '@/components/layout/Layout';
import Section from '@/components/ui/section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Users, TrendingUp, Star, Zap } from 'lucide-react';

const SaasProducts = () => {
  const products = [
    {
      name: 'DevFlow',
      description: 'A comprehensive project management tool designed specifically for development teams. Features include sprint planning, code review tracking, and automated deployment pipelines.',
      logo: '🚀',
      status: 'Live',
      users: '5,000+',
      revenue: '$15K MRR',
      features: ['Project Management', 'Code Review', 'CI/CD Integration', 'Team Analytics'],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
      website: 'https://devflow.io',
      founded: '2023',
      growth: '+150% MoM',
    },
    {
      name: 'ComponentHub',
      description: 'A marketplace for React components where developers can buy, sell, and share high-quality, reusable UI components. Includes version control and documentation.',
      logo: '🧩',
      status: 'Live',
      users: '2,500+',
      revenue: '$8K MRR',
      features: ['Component Marketplace', 'Version Control', 'Auto Documentation', 'Testing Suite'],
      technologies: ['React', 'TypeScript', 'Next.js', 'Stripe', 'MongoDB'],
      website: 'https://componenthub.dev',
      founded: '2022',
      growth: '+80% MoM',
    },
    {
      name: 'APIMonitor',
      description: 'Real-time API monitoring and analytics platform. Track performance, uptime, and errors across all your APIs with intelligent alerting and detailed reporting.',
      logo: '📊',
      status: 'Live',
      users: '1,200+',
      revenue: '$12K MRR',
      features: ['Real-time Monitoring', 'Smart Alerts', 'Performance Analytics', 'API Documentation'],
      technologies: ['Python', 'FastAPI', 'Redis', 'Grafana', 'Kubernetes'],
      website: 'https://apimonitor.dev',
      founded: '2023',
      growth: '+200% MoM',
    },
    {
      name: 'CodeReview AI',
      description: 'AI-powered code review assistant that helps teams maintain code quality by automatically detecting bugs, security issues, and suggesting improvements.',
      logo: '🤖',
      status: 'Beta',
      users: '500+',
      revenue: 'Pre-revenue',
      features: ['AI Code Analysis', 'Security Scanning', 'Performance Suggestions', 'Team Integration'],
      technologies: ['Python', 'TensorFlow', 'React', 'FastAPI', 'Docker'],
      website: 'https://codereview-ai.com',
      founded: '2024',
      growth: 'New Launch',
    },
  ];

  const metrics = [
    { label: 'Total Users', value: '9,200+', icon: Users, color: 'primary' },
    { label: 'Monthly Revenue', value: '$35K+', icon: TrendingUp, color: 'secondary' },
    { label: 'Products Live', value: '3', icon: Star, color: 'accent' },
    { label: 'Average Growth', value: '143%', icon: Zap, color: 'primary' },
  ];

  return (
    <Layout>
      <Section>
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold mb-6">
            <span className="gradient-text">SAAS Products</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Software solutions I've built and launched, serving thousands of developers 
            and businesses worldwide.
          </p>
        </div>

        {/* Metrics Overview }
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card key={metric.label} className="glass text-center animate-scale" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-${metric.color} rounded-xl flex items-center justify-center text-white`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 gradient-text">{metric.value}</h3>
                  <p className="text-muted-foreground">{metric.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Products /}
        <div className="space-y-8">
          {products.map((product, index) => (
            <Card key={product.name} className="glass hover:glow transition-all duration-500 animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                  {/* Product Info /}
                  <div className="lg:col-span-2">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="text-4xl">{product.logo}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold gradient-text">{product.name}</h3>
                          <Badge className={`${
                            product.status === 'Live' 
                              ? 'bg-gradient-primary text-white' 
                              : 'bg-gradient-secondary text-white'
                          }`}>
                            {product.status}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {product.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {product.features.map((feature) => (
                            <Badge key={feature} variant="secondary" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {product.technologies.map((tech) => (
                            <Badge key={tech} className="bg-gradient-accent/20 text-accent text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <Button className="bg-gradient-primary text-white shadow-glow" asChild>
                      <a href={product.website} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Visit Website
                      </a>
                    </Button>
                  </div>

                  {/* Metrics /}
                  <div className="space-y-4">
                    <div className="glass p-4 rounded-lg">
                      <div className="text-center">
                        <div className="text-2xl font-bold gradient-text mb-1">{product.users}</div>
                        <div className="text-sm text-muted-foreground">Active Users</div>
                      </div>
                    </div>
                    <div className="glass p-4 rounded-lg">
                      <div className="text-center">
                        <div className="text-2xl font-bold gradient-text mb-1">{product.revenue}</div>
                        <div className="text-sm text-muted-foreground">Monthly Revenue</div>
                      </div>
                    </div>
                    <div className="glass p-4 rounded-lg">
                      <div className="text-center">
                        <div className="text-2xl font-bold gradient-text mb-1">{product.growth}</div>
                        <div className="text-sm text-muted-foreground">Growth Rate</div>
                      </div>
                    </div>
                    <div className="glass p-4 rounded-lg">
                      <div className="text-center">
                        <div className="text-2xl font-bold gradient-text mb-1">{product.founded}</div>
                        <div className="text-sm text-muted-foreground">Founded</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Journey Section /}
        <Section className="bg-background-secondary/50 mt-16 -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              <span className="gradient-text">The Journey</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                My SAAS journey started in 2022 with a simple idea: create tools that solve real problems for developers. 
                What began as side projects have now grown into sustainable businesses serving thousands of users worldwide.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">💡</div>
                  <h3 className="text-xl font-semibold mb-2 gradient-text">Ideation</h3>
                  <p className="text-muted-foreground">Identifying problems in developer workflows and ideating solutions</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🛠️</div>
                  <h3 className="text-xl font-semibold mb-2 gradient-text">Development</h3>
                  <p className="text-muted-foreground">Building MVPs rapidly and iterating based on user feedback</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">📈</div>
                  <h3 className="text-xl font-semibold mb-2 gradient-text">Growth</h3>
                  <p className="text-muted-foreground">Scaling products to serve thousands of users globally</p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Call to Action /}
        <div className="text-center mt-16">
          <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Interested in My Products?</h3>
            <p className="text-muted-foreground mb-6">
              Check out my SAAS products or get in touch to discuss potential collaborations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-primary text-white shadow-glow">
                Explore Products
              </Button>
              <Button variant="outline">
                Partnership Inquiries
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default SaasProducts;
*/
import Layout from '@/components/layout/Layout';
import Section from '@/components/ui/section';

const SaasProducts = () => {
  return (
    <Layout>
      <Section>
        <div className="text-center py-24 animate-fade-in">
          <h1 className="text-6xl font-bold mb-6">
            <span className="gradient-text">🚧 Coming Soon 🚧</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The SaaS Products page is currently under construction. 
            Stay tuned for exciting updates!
          </p>
        </div>
      </Section>
    </Layout>
  );
};

export default SaasProducts;
