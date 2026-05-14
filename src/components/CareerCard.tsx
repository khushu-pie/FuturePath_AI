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
      whileHover={{ y: -8, scale: 1.02 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative flex flex-col h-full overflow-hidden rounded-[2.5rem] bg-white p-8 shadow-sm ring-1 ring-zinc-200 transition-all hover:shadow-2xl dark:bg-zinc-900 dark:ring-zinc-800"
    >
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

      {/* Background Accent */}
      <div
        className="absolute -right-4 -top-4 h-24 w-24 rounded-full opacity-[0.03] transition-transform group-hover:scale-150"
        style={{ backgroundColor: career.color }}
      />
    </motion.div>
  );
}
