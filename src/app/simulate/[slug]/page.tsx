import { careers } from "@/data/careers";
import { scenarios } from "@/data/scenarios";
import { SimulationEngine } from "@/components/SimulationEngine";
import { notFound } from "next/navigation";
import * as Icons from "lucide-react";
import Link from "next/link";

export default async function SimulatePage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const career = careers.find((c) => c.slug === slug);

  if (!career) {
    notFound();
  }

  const careerScenarios = scenarios.filter((s) => s.career === slug);

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#020617]">
      {/* Simulation Header */}
      <header className="border-b border-zinc-200 bg-white px-6 py-4 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href={`/career/${slug}`} className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
              <Icons.X size={24} />
            </Link>
            <div>
              <h1 className="text-lg font-bold text-zinc-900 dark:text-white">
                Simulation: {career.title}
              </h1>
              <p className="text-xs font-medium text-zinc-500">Interactive Career Experience</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600 dark:bg-blue-900/20">
            <Icons.Zap size={14} />
            <span>AI Mentor Active</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 md:py-20">
        <SimulationEngine scenarios={careerScenarios} careerTitle={career.title} />
      </main>
    </div>
  );
}
