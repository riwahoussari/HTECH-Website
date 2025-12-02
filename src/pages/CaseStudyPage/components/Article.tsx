import Markdown from "react-markdown";

export default function Article({ content }: { content: string }) {
  return (
    <section className="my-container side-padding">
      <article className="prose lg:prose-xl mx-auto">
        <Markdown>{content}</Markdown>
      </article>
    </section>
  );
}