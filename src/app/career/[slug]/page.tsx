import { careers } from "@/data/careers";
import { notFound } from "next/navigation";
import * as Icons from "lucide-react";
import Link from "next/link";

export default async function CareerDetail({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const career = careers.find((c) => c.slug === slug);

  if (!career) {
    notFound();
  }

  const Icon = (Icons as any)[career.icon] || Icons.HelpCircle;

  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#050505]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/70 backdrop-blur-xl dark:border-zinc-800 dark:bg-black/70">
        <div className="container mx-auto flex h-20 items-center justify-between px-6">
          <Link href="/" className="group flex items-center gap-3 text-lg font-black text-zinc-900 dark:text-white">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 transition-colors group-hover:bg-zinc-200 dark:bg-zinc-800 dark:group-hover:bg-zinc-700">
              <Icons.ArrowLeft size={20} />
            </div>
            <span>Explorer</span>
          </Link>
          <Link
            href={`/simulate/${career.slug}`}
            className="flex items-center gap-2 rounded-2xl bg-blue-600 px-8 py-3 text-sm font-black text-white shadow-xl shadow-blue-500/20 transition-all hover:bg-blue-700 hover:scale-105"
          >
            <Icons.Zap size={16} fill="currentColor" />
            <span>Launch Simulation</span>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-center">
              <div
                className="flex h-24 w-24 items-center justify-center rounded-[2rem] shadow-2xl"
                style={{ backgroundColor: career.color, color: 'white' }}
              >
                <Icon size={48} strokeWidth={2.5} />
              </div>
              <div>
                <h1 className="mb-2 text-5xl font-black tracking-tight text-zinc-900 dark:text-white md:text-7xl">
                  {career.title}
                </h1>
                <p className="text-2xl font-medium text-zinc-500 dark:text-zinc-400">{career.tagline}</p>
              </div>
            </div>

            <section className="mb-20">
              <div className="mb-8 flex items-center gap-4">
                <div className="h-1 w-12 bg-blue-600 rounded-full" />
                <h2 className="text-3xl font-black text-zinc-900 dark:text-white">The Professional Landscape</h2>
              </div>
              <p className="text-xl leading-relaxed font-medium text-zinc-600 dark:text-zinc-400">
                {career.overview}
              </p>
            </section>

            <section className="mb-20">
              <div className="mb-12 flex items-center justify-between">
                <h2 className="text-3xl font-black text-zinc-900 dark:text-white">Educational Roadmap</h2>
                <div className="rounded-full bg-blue-50 px-4 py-1 text-xs font-black text-blue-600 dark:bg-blue-900/20">
                  {career.roadmap.length} STAGES
                </div>
              </div>
              <div className="relative space-y-12">
                <div className="absolute left-6 top-2 h-[calc(100%-1rem)] w-0.5 bg-zinc-200 dark:bg-zinc-800" />
                {career.roadmap.map((step, index) => (
                  <div key={index} className="relative flex gap-10">
                    <div className="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-zinc-900 text-lg font-black text-white shadow-xl dark:bg-white dark:text-black">
                      {index + 1}
                    </div>
                    <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-zinc-100 transition-all hover:shadow-md dark:bg-zinc-900 dark:ring-zinc-800">
                      <div className="mb-2 flex items-center justify-between">
                        <h3 className="text-2xl font-black text-zinc-900 dark:text-white">{step.stage}</h3>
                        <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-bold text-zinc-500 dark:bg-zinc-800">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-lg font-medium text-zinc-500 dark:text-zinc-400">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-8 text-3xl font-black text-zinc-900 dark:text-white">A Day in the Life</h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {career.dailyWorkflow.map((task, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-5 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-zinc-100 transition-all hover:scale-[1.02] hover:shadow-xl dark:bg-zinc-900 dark:ring-zinc-800"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-900/20">
                      <Icons.Clock size={20} />
                    </div>
                    <span className="text-lg font-bold text-zinc-700 dark:text-zinc-300">{task}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              <div className="rounded-[2.5rem] bg-zinc-900 p-10 text-white shadow-2xl dark:bg-zinc-950">
                <div className="mb-8 flex items-center gap-4">
                  <Icons.BarChart3 className="text-blue-400" size={32} />
                  <h2 className="text-2xl font-black">Financial Potential</h2>
                </div>
                <div className="space-y-8">
                  {career.salary.map((s, index) => (
                    <div key={index}>
                      <div className="mb-3 flex justify-between items-end">
                        <span className="text-sm font-bold uppercase tracking-widest text-zinc-500">{s.level}</span>
                        <span className="text-2xl font-black">₹{(s.amount / 100000).toFixed(1)}L+</span>
                      </div>
                      <div className="h-3 w-full overflow-hidden rounded-full bg-white/5">
                        <div
                          className="h-full bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-1000"
                          style={{ width: `${(s.amount / 6000000) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-10 rounded-2xl bg-white/5 p-5 text-sm font-medium text-zinc-400 ring-1 ring-white/10">
                  <Icons.Info size={16} className="mb-2 text-blue-400" />
                  Estimated annual compensation based on Tier-1 city benchmarks.
                </div>
              </div>

              <div className="rounded-[2.5rem] border border-zinc-200 bg-white p-10 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <h2 className="mb-8 text-2xl font-black text-zinc-900 dark:text-white">Core Skillset</h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-zinc-400">Hard Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {career.skills.technical.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-xl bg-zinc-50 px-4 py-2 text-sm font-bold text-zinc-700 ring-1 ring-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:ring-zinc-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-zinc-400">Soft Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {career.skills.soft.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-xl bg-blue-50 px-4 py-2 text-sm font-bold text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-[2.5rem] bg-blue-600 p-10 text-white shadow-2xl shadow-blue-500/40">
                <Icons.TrendingUp className="mb-6 opacity-50 group-hover:scale-110 transition-transform" size={48} />
                <h2 className="mb-3 text-2xl font-black">Future Outlook</h2>
                <p className="text-lg font-medium text-blue-100 leading-relaxed">{career.futureScope}</p>
                <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
