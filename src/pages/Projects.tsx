import Layout from '@/components/layout/Layout';
import Section from '@/components/ui/section';
import ProjectCard from '@/components/ui/project-card';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [repos, setRepos] = useState([]);

  const categories = ['All', 'SDE', 'AIML', 'DataEngineering', 'IoT'];

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        // Step 1: Get all repos
        const res = await fetch("https://api.github.com/users/Sabari231024/repos", {
          headers: {
            Accept: "application/vnd.github.mercy-preview+json", // needed for topics
          },
        });
        const data = await res.json();

        // Step 2: Filter only repos with tags
        const taggedRepos = data.filter((repo) => repo.topics && repo.topics.length > 0);

        // Step 3: For each repo, fetch techstack.md
        const enrichedRepos = await Promise.all(
          taggedRepos.map(async (repo) => {
            let description = repo.description || "No description available.";
            let techStack: string[] = repo.topics;

            // --- Keep techstack.md fetching logic ---
            try {
              let techRes = await fetch(
                `https://raw.githubusercontent.com/${repo.full_name}/main/techstack.md`
              );

              if (!techRes.ok) {
                // fallback to master
                techRes = await fetch(
                  `https://raw.githubusercontent.com/${repo.full_name}/master/techstack.md`
                );
              }

              if (techRes.ok) {
                const techText = await techRes.text();
                techStack = techText
                  .split("\n")
                  .map((line) => line.trim())
                  .filter(Boolean);
              } else {
                console.warn(`No techstack.md in ${repo.name}`);
              }
            } catch (e) {
              console.warn(`Error fetching techstack.md for ${repo.name}`, e);
            }

            return {
              id: repo.id,
              name: repo.name,
              full_name: repo.full_name,
              topics: repo.topics,
              html_url: repo.html_url,
              homepage: repo.homepage,
              description, // always from GitHub
              techStack,
            };
          })
        );

        setRepos(enrichedRepos);
      } catch (err) {
        console.error("Error fetching repos:", err);
      }
    };

    fetchRepos();
  }, []);

  // Step 4: Filter repos by category
  const filteredProjects =
    selectedCategory === 'All'
      ? repos
      : repos.filter((repo) =>
          repo.topics?.map((t) => t.toLowerCase()).includes(selectedCategory.toLowerCase())
        );

  return (
    <Layout>
      <Section>
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold mb-6">
            <span className="gradient-text">My Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            This Page is Automated to Fetch Projects from Github. 
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-gradient-primary text-white shadow-glow"
                    : "hover:bg-muted/50"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
          {filteredProjects.map((repo, index) => (
            <div
              key={repo.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard
                title={repo.name}
                description={repo.description}
                image={`https://opengraph.githubassets.com/1/${repo.full_name}`}
                technologies={repo.techStack}
                githubUrl={repo.html_url}
                liveUrl={repo.homepage || ""}
                category={repo.topics?.[0] || "General"}
              />
            </div>
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default Projects;
