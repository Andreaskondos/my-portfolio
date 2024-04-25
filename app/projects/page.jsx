import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
// import { Eye } from "lucide-react";

export const allProjects = [
  {
    published: true,
    slug: "all-about-moms",
    title: "All About Moms",
    description: `A blog about parenthood, mothership and kids. Created for my wife who asked for it and never used it though 🤷‍♂️ 🥲`,
    url: "https://allaboutmoms.vercel.app",
    date: "2024-04-22T00:00:00.000Z",
  },
  {
    published: true,
    slug: "the-wild-oasis",
    title: "The Wild Oasis",
    description:
      "A webapp for managing cabins and guests. A project I created with the guidance of Jonas Schmedtmann, while attending his lessons in Udemy",
    url: "https://the-wild-oasis-ledgic.netlify.app/",
    date: "2024-01-12T00:00:00.000Z",
  },
  {
    published: true,
    slug: "natours-fullstack",
    title: "Natours",
    description:
      "A web-store about trips in the wild nature.  A project I created with the guidance of Jonas Schmedtmann, while attending his lessons in Udemy. Be patient with load cause i deployed it on render and with free tier it goes auto-sleep.",
    url: "https://natours-ledgic.vercel.app/",
    date: "2023-04-10T00:00:00.000Z",
  },
  {
    published: true,
    slug: "wedding-invitation",
    title: "E-Invite",
    description:
      "My friend's wedding e-invitation, with a guest database for yes and no.",
    url: "https://wedding-braoudakis.vercel.app/",
    date: "2024-03-10T00:00:00.000Z",
  },
  {
    published: true,
    slug: "nextjs-dashboard-tutorial",
    title: "Nextjs dashboard",
    description: "A dashboard made with the guidance of Next.js-14 tutorial",
    url: "https://ledgic-nextjs-dashboard.vercel.app/",
    date: "2024-01-30T00:00:00.000Z",
  },
  {
    published: true,
    slug: "fast-pizza-co",
    title: "Fast Pizza Co.",
    description:
      "A website for pizzeria. A project I created with the guidance of Jonas Schmedtmann, while attending his lessons in Udemy",
    url: "https://fast-pizza-co-ledgic.netlify.app/",
    date: "2023-12-24T00:00:00.000Z",
  },
  {
    published: true,
    slug: "use-popcorn",
    title: "usePopcorn",
    description:
      "A webapp for managing your movies that you have watched, rating them and more. A project I created with the guidance of Jonas Schmedtmann, while attending his lessons in Udemy",
    url: "https://use-popcorn-ledgic.netlify.app/",
    date: "2023-12-09T00:00:00.000Z",
  },
  {
    published: true,
    slug: "eat-n-split",
    title: "Eat 'n Split",
    description:
      "A webapp for spliting the expenses with your friend/s after going out. A project I created with the guidance of Jonas Schmedtmann, while attending his lessons in Udemy",
    url: "https://eat-n-split-ledgic.netlify.app/",
    date: "2023-11-20T00:00:00.000Z",
  },
  {
    published: true,
    slug: "travel-list",
    title: "Travel List",
    description:
      "A webapp to manage your items and get ready your luggages before a trip. A project I created with the guidance of Jonas Schmedtmann, while attending his lessons in Udemy",
    url: "https://travel-list-ledgic.netlify.app/",
    date: "2023-11-16T00:00:00.000Z",
  },
  {
    published: true,
    slug: "nexter",
    title: "Nexter",
    description:
      "A website for real estates. A project I created with the guidance of Jonas Schmedtmann, while attending his lessons in Udemy",
    url: "https://nexter-ledgic.netlify.app/",
    date: "2023-01-10T00:00:00.000Z",
  },
  {
    published: true,
    slug: "trillo",
    title: "Trillo",
    description:
      "A landpage of a webapp for booking and rating hotels. A project I created with the guidance of Jonas Schmedtmann, while attending his lessons in Udemy",
    url: "https://trillo-ledgic.netlify.app/",
    date: "2023-01-04T00:00:00.000Z",
  },
  {
    published: true,
    slug: "react-quiz",
    title: "React Quiz",
    description:
      "A react quiz, let's do some refreshing? A project I created with the guidance of Jonas Schmedtmann, while attending his lessons in Udemy",
    url: "https://react-quiz-ledgic.netlify.app/",
    date: "2023-12-24T00:00:00.000Z",
  },
  {
    published: true,
    slug: "natours-frontend",
    title: "Natours Landpage",
    description:
      "The landpage of Natours. A project I created with the guidance of Jonas Schmedtmann, while attending his lessons in Udemy",
    url: "https://natours-frontend-ledgic.netlify.app/",
    date: "2022-12-29T00:00:00.000Z",
  },
  {
    published: true,
    slug: "forkify",
    title: "Forkify",
    description:
      "A website for creating and search food recipes. A project I created with the guidance of Jonas Schmedtmann, while attending his lessons in Udemy",
    url: "https://forkify-ledgic.netlify.app/",
    date: "2022-11-12T00:00:00.000Z",
  },
  {
    published: true,
    slug: "twisted-luck",
    title: "Twisted Luck",
    description: "A funny game of luck for Two-players",
    url: "https://twisted-luck-ledgic.netlify.app/",
    date: "2022-08-23T00:00:00.000Z",
  },
  {
    published: true,
    slug: "guess-my-number",
    title: "Guess My Number",
    description: "A funny solo game of luck",
    url: "https://guess-my-number-ledgic.netlify.app/",
    date: "2022-08-20T00:00:00.000Z",
  },
  {
    published: true,
    slug: "omnifood",
    title: "OmniFood",
    description:
      "A webapp for a 365-days-per-year food subscription that will make you eat healthy again. Tailored to your personal tastes and nutritional needs. A project I created with the guidance of Jonas Schmedtmann, while attending his lessons in Udemy",
    url: "https://omnifood-ledgic.netlify.app/",
    date: "2022-07-23T00:00:00.000Z",
  },
];

export const revalidate = 60;
export default async function ProjectsPage() {
  const featured = allProjects.find(
    (project) => project.slug === "all-about-moms"
  );
  const top2 = allProjects.find((project) => project.slug === "the-wild-oasis");
  const top3 = allProjects.find(
    (project) => project.slug === "natours-fullstack"
  );

  const sorted = allProjects
    .filter((p) => p.published)
    .filter(
      (project) =>
        project.slug !== featured.slug &&
        project.slug !== top2.slug &&
        project.slug !== top3.slug
    )
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime()
    );

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Some of the projects are on my own time and some are from campus,
            tutorials and udemy lessons.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          <Card>
            <Link href={`/projects/${featured.slug}`}>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    {featured.date ? (
                      <time dateTime={new Date(featured.date).toISOString()}>
                        {Intl.DateTimeFormat(undefined, {
                          dateStyle: "medium",
                        }).format(new Date(featured.date))}
                      </time>
                    ) : (
                      <span>SOON</span>
                    )}
                  </div>
                  {/* <span className="flex items-center gap-1 text-xs text-zinc-500">
                    <Eye className="w-4 h-4" />{" "}
                    {Intl.NumberFormat("en-US", { notation: "compact" }).format(
                      views[featured.slug] ?? 0
                    )}
                  </span> */}
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  {featured.title}
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {featured.description}
                </p>
                <div className="absolute bottom-4 md:bottom-8">
                  <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>

          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            {[top2, top3].map((project) => (
              <Card key={project.slug}>
                {/* <Article project={project} views={views[project.slug] ?? 0} /> */}
                <Article project={project} />
              </Card>
            ))}
          </div>
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 0)
              .map((project) => (
                <Card key={project.slug}>
                  {/* <Article project={project} views={views[project.slug] ?? 0} /> */}
                  <Article project={project} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 1)
              .map((project) => (
                <Card key={project.slug}>
                  {/* <Article project={project} views={views[project.slug] ?? 0} /> */}
                  <Article project={project} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 2)
              .map((project) => (
                <Card key={project.slug}>
                  {/* <Article project={project} views={views[project.slug] ?? 0} /> */}
                  <Article project={project} />
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
