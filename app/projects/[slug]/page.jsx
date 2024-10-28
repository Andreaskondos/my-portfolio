import { notFound } from "next/navigation";
// import { allProjects } from "contentlayer/generated";
import { allProjects } from "@/app/projects/page.jsx";
// import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import "@/app/projects/[slug]/mdx.css";
// import { ReportView } from "./view";

export const revalidate = 60;

export async function generateMetadata({ params }) {
  const slug = params?.slug;
  const project = allProjects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  return {
    title: project.title,
  };
}

export default async function PostPage({ params }) {
  const slug = params?.slug;
  const project = allProjects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }
  // const views =
  //   (await redis.get) < number > ["pageviews", "projects", slug].join(":") ?? 0;

  return (
    <div className="bg-zinc-50 min-h-screen">
      {/* <Header project={project} views={views} /> */}
      <Header project={project} />
      {/* <ReportView slug={project.slug} /> */}

      <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless w-screen">
        <iframe
          className="rounded-md border mx-auto prose prose-zinc prose-quoteless w-full h-lvh border-zinc-200"
          loading="lazy"
          src={project.url}
          frameborder="0"
        ></iframe>
        {/* <Mdx code={project?.body?.code} /> */}
      </article>
    </div>
  );
}
