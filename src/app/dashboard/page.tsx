"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import Link from "next/link";
import { careers } from "@/data/careers";

export default function DashboardPage() {
  const recommendedCareers = careers.slice(0, 2);

  return (
    <div className="container mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <h1 className="text-4xl font-black text-zinc-900 dark:text-white md:text-5xl">
          Welcome back, Explorer.
        </h1>
        <p className="mt-2 text-lg text-zinc-500 dark:text-zinc-400">
          Here is your career progression overview.
        </p>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main Progress Area */}
        <div className="space-y-8 lg:col-span-2">
          {/* Progress Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-800"
          >
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Active Simulations</h2>
              <button className="text-sm font-bold text-blue-600 hover:underline dark:text-blue-400">
                View All
              </button>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-950">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                      <Icons.Code2 size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-zinc-900 dark:text-white">Software Engineer</h3>
                      <p className="text-sm text-zinc-500">Junior Level Simulation</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-zinc-900 dark:text-white">65%</div>
                    <div className="text-xs text-zinc-500">Completed</div>
                  </div>
                </div>
                {/* Progress bar */}
                <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "65%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full rounded-full bg-blue-600"
                  />
                </div>
                <div className="mt-4 flex justify-end">
                  <Link href={`/simulate/software-engineer`} className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-bold text-white transition-transform hover:scale-105 dark:bg-white dark:text-black">
                    Continue
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Assessment Stats */}
          <div className="grid gap-6 sm:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4 rounded-[2rem] bg-indigo-50 p-6 dark:bg-indigo-900/20"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-500/30">
                <Icons.Target size={28} />
              </div>
              <div>
                <div className="text-3xl font-black text-indigo-900 dark:text-indigo-100">850</div>
                <div className="text-sm font-bold text-indigo-700/70 dark:text-indigo-300/70">Aptitude Score</div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4 rounded-[2rem] bg-emerald-50 p-6 dark:bg-emerald-900/20"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-500/30">
                <Icons.Trophy size={28} />
              </div>
              <div>
                <div className="text-3xl font-black text-emerald-900 dark:text-emerald-100">12</div>
                <div className="text-sm font-bold text-emerald-700/70 dark:text-emerald-300/70">Skills Mastered</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-800"
          >
            <h2 className="mb-6 text-xl font-bold text-zinc-900 dark:text-white">Recommended for You</h2>
            <div className="space-y-4">
              {recommendedCareers.map((career, i) => (
                <Link key={i} href={`/career/${career.slug}`} className="group flex items-center gap-4 rounded-xl p-2 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800/50">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                    {/* Simplified icon logic for mock */}
                    <Icons.Briefcase size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                      {career.title}
                    </h3>
                    <p className="line-clamp-1 text-xs text-zinc-500">{career.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
