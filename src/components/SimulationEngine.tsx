"use client";

import { Scenario, Decision } from "@/types";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Icons from "lucide-react";
import Link from "next/link";

interface SimulationEngineProps {
  scenarios: Scenario[];
  careerTitle: string;
}

export function SimulationEngine({ scenarios, careerTitle }: SimulationEngineProps) {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [selectedDecision, setSelectedDecision] = useState<Decision | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [stress, setStress] = useState(20);
  const [impact, setImpact] = useState(50);
  const [feedbackType, setFeedbackType] = useState<"positive" | "negative" | null>(null);

  const currentScenario = scenarios[currentScenarioIndex];

  const handleDecisionSelect = (decision: Decision) => {
    setSelectedDecision(decision);
    if (decision.isCorrect) {
      setScore(score + 1);
      setImpact(Math.min(impact + 15, 100));
      setStress(Math.max(stress - 10, 0));
      setFeedbackType("positive");
    } else {
      setImpact(Math.max(impact - 20, 0));
      setStress(Math.min(stress + 25, 100));
      setFeedbackType("negative");
    }
  };

  const handleNext = () => {
    if (currentScenarioIndex < scenarios.length - 1) {
      setCurrentScenarioIndex(currentScenarioIndex + 1);
      setSelectedDecision(null);
      setFeedbackType(null);
    } else {
      setIsCompleted(true);
    }
  };

  if (!currentScenario && !isCompleted) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <Icons.Inbox size={64} className="mb-4 text-zinc-300" />
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Simulation Offline</h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">Our AI mentors are currently drafting more scenarios for this path.</p>
        <Link href="/" className="mt-8 font-bold text-blue-600 hover:underline">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4">
      {/* Simulation Dashboard */}
      {!isCompleted && (
        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-zinc-200 dark:bg-zinc-900 dark:ring-zinc-800">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-bold uppercase text-zinc-500">Stress Level</span>
              <Icons.Activity size={14} className={stress > 70 ? "text-red-500 animate-pulse" : "text-zinc-400"} />
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
              <motion.div 
                animate={{ width: `${stress}%` }}
                className={`h-full transition-colors ${stress > 70 ? "bg-red-500" : "bg-blue-500"}`}
              />
            </div>
          </div>
          <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-zinc-200 dark:bg-zinc-900 dark:ring-zinc-800">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-bold uppercase text-zinc-500">Professional Impact</span>
              <Icons.Target size={14} className="text-zinc-400" />
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
              <motion.div 
                animate={{ width: `${impact}%` }}
                className="h-full bg-green-500"
              />
            </div>
          </div>
          <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-zinc-200 dark:bg-zinc-900 dark:ring-zinc-800">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-bold uppercase text-zinc-500">Progress</span>
              <Icons.Zap size={14} className="text-yellow-500" />
            </div>
            <div className="text-sm font-bold text-zinc-900 dark:text-white">
              {currentScenarioIndex + 1} / {scenarios.length} Scenarios
            </div>
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        {!isCompleted ? (
          <motion.div
            key={currentScenario.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-2xl ring-1 ring-zinc-200 dark:bg-zinc-950 dark:ring-zinc-800 md:p-12"
          >
            {/* Visual indicator for feedback */}
            <AnimatePresence>
              {feedbackType && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 0.1, scale: 1.5 }}
                  exit={{ opacity: 0 }}
                  className={`absolute inset-0 z-0 flex items-center justify-center rounded-full pointer-events-none ${
                    feedbackType === "positive" ? "bg-green-500" : "bg-red-500"
                  }`}
                />
              )}
            </AnimatePresence>

            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1 text-xs font-bold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                <Icons.Brain size={14} />
                <span>Skill Tested: {currentScenario.skillTested}</span>
              </div>

              <h2 className="mb-10 text-2xl font-extrabold leading-tight text-zinc-900 dark:text-white md:text-3xl">
                {currentScenario.situation}
              </h2>

              <div className="grid grid-cols-1 gap-4">
                {currentScenario.decisions.map((decision) => (
                  <button
                    key={decision.id}
                    onClick={() => handleDecisionSelect(decision)}
                    disabled={!!selectedDecision}
                    className={`group relative overflow-hidden rounded-2xl p-6 text-left transition-all duration-300 ${
                      selectedDecision?.id === decision.id
                        ? decision.isCorrect
                          ? "bg-green-50 ring-2 ring-green-500 dark:bg-green-900/20"
                          : "bg-red-50 ring-2 ring-red-500 dark:bg-red-900/20"
                        : "bg-zinc-50 hover:bg-zinc-100 hover:shadow-md dark:bg-zinc-900 dark:hover:bg-zinc-800"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 transition-all ${
                        selectedDecision?.id === decision.id
                          ? decision.isCorrect
                            ? "border-green-500 bg-green-500 text-white"
                            : "border-red-500 bg-red-500 text-white"
                          : "border-zinc-300 group-hover:border-zinc-900 dark:border-zinc-700 dark:group-hover:border-white"
                      }`}>
                        {selectedDecision?.id === decision.id ? (
                          decision.isCorrect ? <Icons.Check size={16} /> : <Icons.X size={16} />
                        ) : (
                          <div className="h-2 w-2 rounded-full bg-transparent group-hover:bg-zinc-900 dark:group-hover:bg-white" />
                        )}
                      </div>
                      <span className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
                        {decision.text}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {selectedDecision && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-10 overflow-hidden"
                >
                  <div className={`rounded-2xl p-6 ${
                    selectedDecision.isCorrect 
                      ? "bg-green-600 text-white shadow-lg shadow-green-900/20" 
                      : "bg-zinc-900 text-white shadow-lg shadow-black/20"
                  }`}>
                    <div className="mb-3 flex items-center gap-2 text-lg font-bold">
                      {selectedDecision.isCorrect ? (
                        <Icons.Sparkles className="text-yellow-300" />
                      ) : (
                        <Icons.AlertCircle className="text-red-400" />
                      )}
                      <span>{selectedDecision.isCorrect ? "Strategic Excellence!" : "A Valuable Lesson"}</span>
                    </div>
                    <p className="text-sm leading-relaxed opacity-90 md:text-base">
                      {selectedDecision.explanation}
                    </p>
                    <button
                      onClick={handleNext}
                      className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-white/20 py-4 font-bold backdrop-blur-sm transition-all hover:bg-white/30"
                    >
                      <span>{currentScenarioIndex < scenarios.length - 1 ? "Next Challenge" : "See My Performance"}</span>
                      <Icons.ChevronRight size={18} />
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="overflow-hidden rounded-3xl bg-zinc-950 p-1 md:p-1"
          >
            <div className="rounded-[2.5rem] bg-gradient-to-br from-zinc-900 to-black p-12 text-center text-white shadow-2xl">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-blue-600 shadow-xl shadow-blue-500/20"
              >
                <Icons.Award size={48} />
              </motion.div>
              
              <h2 className="mb-2 text-4xl font-black md:text-5xl">Simulation Result</h2>
              <p className="mb-12 text-xl text-zinc-400">
                You've completed the {careerTitle} training module.
              </p>
              
              <div className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
                  <div className="mb-1 text-3xl font-black text-blue-400">
                    {Math.round((score / scenarios.length) * 100)}%
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">Success Rate</div>
                </div>
                <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
                  <div className="mb-1 text-3xl font-black text-green-400">{impact}</div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">Global Impact</div>
                </div>
                <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
                  <div className="mb-1 text-3xl font-black text-red-400">{100 - stress}</div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">Mental Resilience</div>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/"
                  className="flex-1 rounded-2xl bg-white py-5 text-lg font-black text-black transition-all hover:scale-105"
                >
                  Return to Hub
                </Link>
                <button
                  onClick={() => {
                    setCurrentScenarioIndex(0);
                    setIsCompleted(false);
                    setScore(0);
                    setStress(20);
                    setImpact(50);
                    setSelectedDecision(null);
                  }}
                  className="flex-1 rounded-2xl border-2 border-white/10 py-5 text-lg font-black transition-all hover:bg-white/5"
                >
                  Restart Module
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
