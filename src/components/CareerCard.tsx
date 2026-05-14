"use client";

import { Career } from "@/types";
import { motion } from "framer-motion";
import Link from "next/link";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";

interface CareerCardProps {
  career: Career;
}

export function CareerCard({ career }: CareerCardProps) {
  const Icon = (Icons as any)[career.icon] as LucideIcon;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative flex flex-col h-full overflow-hidden rounded-[2.5rem] bg-white p-8 shadow-[0_0_0_1px_rgba(0,0,0,0.05)] transition-all hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:bg-zinc-900 dark:shadow-[0_0_0_1px_rgba(255,255,255,0.05)]"
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-white to-zinc-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-zinc-900 dark:to-black" />
      <div className="relative z-10 flex-1 flex flex-col">
      <div
        className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl shadow-inner transition-transform group-hover:rotate-6"
        style={{ backgroundColor: `${career.color}15`, color: career.color }}
      >
        {Icon ? <Icon size={28} /> : <Icons.HelpCircle size={28} />}
      </div>
      
      <div className="flex-1">
        <h3 className="mb-2 text-2xl font-black tracking-tight text-zinc-900 dark:text-white">
          {career.title}
        </h3>
        <p className="mb-6 text-base font-medium leading-relaxed text-zinc-500 dark:text-zinc-400">
          {career.tagline}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {career.skills.technical.slice(0, 3).map((skill) => (
            <span
              key={skill}
              className="rounded-lg bg-zinc-50 px-3 py-1 text-xs font-bold text-zinc-500 ring-1 ring-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:ring-zinc-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Link
          href={`/career/${career.slug}`}
          className="flex-1 rounded-2xl bg-zinc-100 py-4 text-center text-sm font-black text-zinc-900 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
        >
          View Path
        </Link>
        <Link
          href={`/simulate/${career.slug}`}
          className="flex-1 group/btn relative overflow-hidden rounded-2xl bg-blue-600 py-4 text-center text-sm font-black text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-700"
        >
          <div className="relative z-10 flex items-center justify-center gap-2">
            <Icons.Play size={14} fill="currentColor" />
            <span>Simulate</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
        </Link>
      </div>

      </div>

      {/* Premium Glow Effect */}
      <div
        className="absolute -right-20 -top-20 z-0 h-40 w-40 rounded-full opacity-0 blur-3xl transition-all duration-700 group-hover:opacity-20"
        style={{ backgroundColor: career.color }}
      />
    </motion.div>
  );
}
