import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "VietnamBible — The quintessential Vietnam travel guide" },
      {
        name: "description",
        content:
          "VietnamBible is the quintessential travel guide and growing food & travel brand for foreign tourists visiting Vietnam.",
      },
      { property: "og:title", content: "VietnamBible" },
      {
        property: "og:description",
        content:
          "The quintessential Vietnam travel guide — food, culture, and travel for visitors.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="bg-black">
      <Hero />
    </main>
  );
}
