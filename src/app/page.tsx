import Hero from "@/sections/Hero/Hero";
import Posts from "@/sections/Post/Posts";
import DeleteItemContainer from "@/components/DeleteItemContainer/DeleteItemContainer";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Posts />
      <DeleteItemContainer />
    </main>
  );
}
