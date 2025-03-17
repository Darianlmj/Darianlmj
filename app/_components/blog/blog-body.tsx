type Props = {
  content: string;
};

const BlogBody = ({ content }: Props) => {
  return (
    <section className="py-8 mx-auto">
      <div
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </section>
  );
}

export default BlogBody;