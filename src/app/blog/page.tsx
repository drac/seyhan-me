import PostPreview from "@/components/PostPreview";

export default function Blog() {
  return (
    <section>
      <PostPreview title="Looking to the Past, Seeing the Future: Discovering Plan 9" date="12.12.2023" tags={['technology', 'operatingSystems', 'innovation']} path="/blog/post/plan9" content="Plan 9 from Bell Labs is this really cool, somewhat under-the-radar operating system that started in the late '80s. Imagine a group of tech wizards at Bell Labs, including Ken Thompson (same guy who co-created Unix), brainstorming and then bringing to life a system that's both familiar and wonderfully strange." />
    </section>
  )
}