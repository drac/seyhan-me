import PostPreview from "@/components/PostPreview";

export default function Blog() {
  return (
    <section>
      <PostPreview title="Cyborgs" date="01.12.2023" content="Cyborgs are often misunderstood as mere humans with metallic skin or head-up displays in their visions. However, the true essence of cyborgs lies in embedding tools within oneself, thereby augmenting and influencing personal skills. Surprisingly enough, humans have been unknowingly embracing cyborganization for millennia through basic inventions such as clothing, serving as individual shelters against harsh weather conditions." tags={["tag1", "tag2"]} />

      <PostPreview title="Post 2" date="03.11.2023" content="Cyborgs are often misunderstood as mere humans with metallic skin or head-up displays in their visions. However, the true essence of cyborgs lies in embedding tools within oneself, thereby augmenting and influencing personal skills. Surprisingly enough, humans have been unknowingly embracing cyborganization for millennia through basic inventions such as clothing, serving as individual shelters against harsh weather conditions." tags={["tag1", "tag2", "tag3"]} />

      <PostPreview title="Post 3" date="16.10.2023" content="Cyborgs are often misunderstood as mere humans with metallic skin or head-up displays in their visions. However, the true essence of cyborgs lies in embedding tools within oneself, thereby augmenting and influencing personal skills. Surprisingly enough, humans have been unknowingly embracing cyborganization for millennia through basic inventions such as clothing, serving as individual shelters against harsh weather conditions." tags={["tag1"]} />
    </section>
  )
}