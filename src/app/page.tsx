"use client";

import { careers } from "@/data/careers";
import { CareerCard } from "@/components/CareerCard";
import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">

      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container relative z-10 mx-auto px-6">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            className="flex flex-col items-center text-center"
          >
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="mb-6 flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-50/50 px-5 py-2 text-sm font-bold text-blue-600 backdrop-blur-md dark:bg-blue-900/20 dark:text-blue-400"
            >
              <Icons.Sparkles size={16} className="animate-pulse" />
              <span>Next-Gen Career Intelligence</span>
            </motion.div>

            <motion.h1 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="mb-6 max-w-5xl text-6xl font-black leading-[1.1] tracking-tight text-zinc-900 dark:text-white md:text-8xl"
            >
              Master Your <span className="relative inline-block text-blue-600">
                Future
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.00003 6.99999C44.3334 2.16666 142.4 -4.20001 198 6.99999" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span> Before It Starts.
            </motion.h1>

            <motion.p 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="mb-10 max-w-2xl text-xl font-medium text-zinc-500 dark:text-zinc-400 md:text-2xl"
            >
              Immersive simulations and real-world insights for India's most competitive career paths.
            </motion.p>

            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <button className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-blue-600 px-8 py-4 text-lg font-black text-white shadow-[0_0_40px_rgba(37,99,235,0.4)] transition-all hover:scale-105 hover:bg-blue-700 hover:shadow-[0_0_60px_rgba(37,99,235,0.6)]">
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                  <div className="relative h-full w-8 bg-white/20" />
                </div>
                <span className="relative z-10">Start Free Assessment</span>
                <Icons.ArrowRight className="relative z-10 transition-transform group-hover:translate-x-1" size={20} />
              </button>
              <Link href="/dashboard" className="flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-black text-zinc-900 shadow-sm ring-1 ring-zinc-200 transition-all hover:scale-105 hover:bg-zinc-50 dark:bg-zinc-900 dark:text-white dark:ring-zinc-800">
                <Icons.LayoutDashboard size={20} />
                View Dashboard
              </Link>
            </motion.div>
          </motion.div>
        </div>


        {/* Dynamic Orbs */}
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-500/20 blur-[100px] dark:bg-blue-500/10" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-indigo-500/20 blur-[100px] dark:bg-indigo-500/10" />
      </section>

      {/* Stats Bar */}
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-8 rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-800 md:grid-cols-4 md:p-12"
        >
          {[
            { label: "Daily Simulations", value: "10K+" },
            { label: "Career Paths", value: "500+" },
            { label: "Expert Mentors", value: "1.2K" },
            { label: "User Success", value: "98%" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-black text-zinc-900 dark:text-white">{stat.value}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-zinc-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Careers Grid */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="mb-16 flex flex-col items-center text-center">
            <h2 className="mb-4 text-4xl font-black text-zinc-900 dark:text-white md:text-5xl">Curated Career Hub</h2>
            <p className="max-w-xl text-lg font-medium text-zinc-500 dark:text-zinc-400">Everything you need to know about your dream job, from salary to daily challenges.</p>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {careers.map((career) => (
              <CareerCard key={career.slug} career={career} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto mb-24 px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[3rem] bg-zinc-900 p-12 text-center text-white dark:bg-zinc-950 md:p-24"
        >
          <h2 className="mb-6 text-4xl font-black md:text-6xl">Ready to find your path?</h2>
          <p className="mb-10 text-xl text-zinc-400">Join 50,000+ students navigating their futures with AI.</p>
          <button className="rounded-2xl bg-white px-10 py-5 text-xl font-black text-black transition-all hover:scale-105">
            Get Started Now
          </button>
        </motion.div>
      </section>

      <footer className="border-t border-zinc-200 py-12 dark:border-zinc-800">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-6 flex justify-center gap-2">
            <div className="h-6 w-6 rounded-md bg-zinc-200 dark:bg-zinc-800" />
            <span className="font-bold text-zinc-400">FUTUREPATH</span>
          </div>
          <p className="text-sm text-zinc-400">© 2024 FuturePath AI. Built for the dreamers.</p>
        </div>
      </footer>
    </div>
  );
}
