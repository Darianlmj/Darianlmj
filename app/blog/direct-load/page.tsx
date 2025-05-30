export default async function DirectLoadTest() {
  const { default: BlogBody } = await import(`@/app/_posts/test.mdx`);

  return <BlogBody />;
}
