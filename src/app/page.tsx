/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getBlogPosts, getJSONData } from "@/lib/serverUtils";
import Link from "next/link";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  GlobeIcon,
} from "@radix-ui/react-icons";
import { Avatar } from "@/components/ui/avatar";
import Image from "next/image";

export default async function Home() {
  const data = await getJSONData();
  const posts = await getBlogPosts();

  return (
    <main>
      {/* Banner Section */}
      <section
        id="home"
        className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
      >
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <div className="w-1/2 mx-auto lg:w-1/3">
            <Image
              src="/assets/profile.jpg"
              width={280}
              height={280}
              alt="Developer"
              
className="mx-auto aspect-square overflow-hidden object-cover object-[center_30%] rounded-full"            />
          </div>
          <div className="w-full lg:w-2/3 space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter ">
                Hey 👋, I&apos;m {data.personalInfo.name}
              </h1>
            </div>
            <p className="max-w-[600px] lg:text-lg text-gray-500 dark:text-gray-400">
              {data.personalInfo.bio}
            </p>
            <div className="space-x-4">
              <Link
                href={data.contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
              >

                <Button variant="secondary" size="icon">
                  <GitHubLogoIcon className="h-4 w-4" />
                </Button>
              </Link>
              <Link
  href={data.contactInfo.twitter}
  target="_blank"
  rel="noopener noreferrer"
  prefetch={false}
>
                <Button variant="secondary" size="icon">
                  <TwitterLogoIcon className="h-4 w-4" />
                </Button>
              </Link>

            <Link
  href={data.contactInfo.linkedin}
  target="_blank"
  rel="noopener noreferrer"
  prefetch={false}
>
                <Button variant="secondary" size="icon">
                  <LinkedInLogoIcon className="h-4 w-4" />
                </Button>
              </Link>

              <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=coder.harsh45@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button variant="secondary" size="icon">
    <EnvelopeClosedIcon className="h-4 w-4" />
  </Button>
</a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
      >
        <h2 className="font-bold text-3xl md:text-5xl mb-12">
          Work Experience
        </h2>
        <div className="relative pl-6 after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-gray-500/20 dark:after:bg-gray-400/20 grid gap-10">
          {data.workExperience.map((exp) => (
            <div key={exp.id} className="grid gap-1 relative">
              <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-2 dark:bg-gray-50" />

              <h4 className="text-xl font-medium">
                {exp.role} @
                <Link
                  href={exp.companyWebsite}
                  className="ml-2 text-primary"
                >
                  {exp.company}
                </Link>
              </h4>
              <div className="text-gray-500 dark:text-gray-400">
                {exp.startDate} - {exp.endDate}
              </div>
              <div className="mt-2">
                <h6 className="font-medium">Key Responsibilities:</h6>
                <ul className="text-gray-500 text-sm list-disc pl-4">
                  {exp.keyResponsibilities.map((resp) => (
                    <li key={resp}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
      >
        <h2 className="font-bold text-3xl md:text-5xl mb-12">My Projects</h2>
        <div className="grid grid-cols-1 gap-4 lg:gap-6">
          {data.projects.map((project) => (
            <Card key={project.title} className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/3 p-2 flex items-center">
                <Image
                  src={project.cover}
                  alt="Project 1"
                  height={200}
                  width={300}
                  className="rounded-md object-cover"
                />
              </div>

              <div className="w-full lg:w-2/3">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <div className="flex space-x-3">
                    <Link
                      href={project.live_url}
                      prefetch={false}
                    >
                      <Button size="sm">
                        <GlobeIcon className="h-3 w-3 mr-2" />
                        Live Demo
                      </Button>
                    </Link>
                    <Link
                      href={project.code_repo_url}
                      prefetch={false}
                    >
                      <Button size="sm" variant="outline">
                        <GitHubLogoIcon className="h-3 w-3 mr-2" />
                        Open Repository
                      </Button>
                    </Link>
                  </div>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
      >
        <h2 className="font-bold text-3xl md:text-5xl mb-12">Education</h2>
        <div className="relative pl-6 after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-gray-500/20 dark:after:bg-gray-400/20 grid gap-10">
          {data.education.map((ed) => (
            <div key={ed.id} className="grid gap-1 relative">
              <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-2 dark:bg-gray-50" />

              <h4 className="text-xl font-medium">{ed.degree}</h4>
              <h5 className="font-medium">{ed.institution}</h5>
              <div className="text-gray-500 dark:text-gray-400">
                {ed.startDate} - {ed.endDate}
              </div>
              <p className="mt-2 text-sm text-gray-500">{ed.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section
  id="skills"
  className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
>
  <h2 className="font-bold text-3xl md:text-5xl mb-12">
    Skills & Technologies
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-3">Languages</h3>

      <div className="flex flex-wrap gap-2">
        {data.skills.languages.map((skill) => (
          <Badge key={skill} variant="secondary">
            {skill}
          </Badge>
        ))}
      </div>
    </Card>

    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-3">Frameworks</h3>

      <div className="flex flex-wrap gap-2">
        {data.skills.frameworks.map((skill) => (
          <Badge key={skill} variant="secondary">
            {skill}
          </Badge>
        ))}
      </div>
    </Card>

    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-3">Databases</h3>

      <div className="flex flex-wrap gap-2">
        {data.skills.databases.map((skill) => (
          <Badge key={skill} variant="secondary">
            {skill}
          </Badge>
        ))}
      </div>
    </Card>

    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-3">Tools & Technologies</h3>

      <div className="flex flex-wrap gap-2">
        {data.skills.tools.map((skill) => (
          <Badge key={skill} variant="secondary">
            {skill}
          </Badge>
        ))}
      </div>
    </Card>
  </div>
</section>

      {/* Contact Section */}
     <section
  id="Contact"
  className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
>
  <h2 className="font-bold text-3xl md:text-5xl mb-12">
    Connect With Me
  </h2>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
    <div>
      <h3 className="text-2xl font-semibold mb-4">
        Let&apos;s Work Together
      </h3>

      <p className="text-gray-500 dark:text-gray-400 mb-6">
        Have a project, opportunity, or just want to say hello? Feel free to
        send me a message. I&apos;ll get back to you as soon as possible.
      </p>

      <div className="space-y-3 text-sm">
        <p>
          <strong>Email:</strong>{" "}
          <a
            href={`mailto:${data.contactInfo.email}`}
            className="text-primary ml-1"
          >
            {data.contactInfo.email}
          </a>
        </p>

      </div>
    </div>

    <form
      action="https://formspree.io/f/YOUR_FORM_ID"
      method="POST"
      className="space-y-4"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="w-full rounded-md border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="w-full rounded-md border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary"
      />

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        required
        className="w-full rounded-md border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        rows={6}
        required
        className="w-full rounded-md border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary"
      />

      <Button type="submit" className="w-full">
        Send Message
      </Button>
    </form>
  </div>
</section>

      {/* Blogs Section */}
   
   
    </main>
  );
}
