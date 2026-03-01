"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Vote, Lock, ChevronRight, X, ThumbsUp, ThumbsDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { KpiCard } from "@/components/citrana/KpiCard";
import { cn } from "@/lib/utils";

const proposals = [
  {
    id: "1",
    title: "Increase agent deployment fee to 0.1%",
    description: "Proposal to adjust protocol fee for sustainability.",
    votesFor: 12450,
    votesAgainst: 2100,
    endDate: "Mar 15, 2026",
    status: "active",
  },
  {
    id: "2",
    title: "Add Base chain to supported networks",
    description: "Enable Citrana agents on Base mainnet.",
    votesFor: 8920,
    votesAgainst: 1200,
    endDate: "Mar 12, 2026",
    status: "active",
  },
  {
    id: "3",
    title: "Treasury diversification into stables",
    description: "Allocate 20% of treasury to USDC for operations.",
    votesFor: 15200,
    votesAgainst: 800,
    endDate: "Mar 10, 2026",
    status: "passed",
  },
];

export default function GovernancePage() {
  const [votingProposal, setVotingProposal] = useState<typeof proposals[0] | null>(null);
  const [voteChoice, setVoteChoice] = useState<"for" | "against" | null>(null);
  const [voted, setVoted] = useState(false);

  const handleOpenVote = (p: typeof proposals[0]) => {
    setVotingProposal(p);
    setVoteChoice(null);
    setVoted(false);
  };
  const handleConfirmVote = () => {
    if (!votingProposal || !voteChoice) return;
    setVoted(true);
    setTimeout(() => {
      setVotingProposal(null);
      setVoteChoice(null);
    }, 1500);
  };

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-semibold tracking-tight text-[hsl(var(--foreground))] md:text-3xl">
          Governance
        </h1>
        <p className="mt-1 text-[hsl(var(--foreground-muted))]">
          $CITRA token governance and proposals.
        </p>
      </header>

      <section>
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[hsl(var(--foreground-muted))]">
          Your governance
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <KpiCard label="Voting power" value="12,400 CITRA" index={0} />
          <KpiCard label="Staked" value="8,000 CITRA" sublabel="Staking rewards active" index={1} />
          <KpiCard label="Pending rewards" value="+124 CITRA" sublabel="Claimable" index={2} />
          <KpiCard label="Proposals voted" value="7" sublabel="This epoch" index={3} />
        </div>
      </section>

      <section>
        <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[hsl(var(--foreground-muted))]">
          <Lock className="size-4" />
          Staking
        </h2>
        <motion.div
          initial={{ opacity: 1, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="glass-panel flex flex-wrap items-center justify-between gap-4 rounded-xl p-5"
        >
          <div>
            <p className="text-sm text-[hsl(var(--foreground-muted))]">Staked balance</p>
            <p className="text-2xl font-semibold text-[hsl(var(--foreground))]">8,000 CITRA</p>
            <p className="text-xs text-[hsl(var(--success))]">~12% APY · Locked until Apr 1, 2026</p>
          </div>
          <Button variant="secondary">Manage staking</Button>
        </motion.div>
      </section>

      <section>
        <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[hsl(var(--foreground-muted))]">
          <Vote className="size-4" />
          Active proposals
        </h2>
        <div className="space-y-4">
          {proposals.map((p, i) => {
            const total = p.votesFor + p.votesAgainst;
            const forPct = total ? Math.round((p.votesFor / total) * 100) : 0;
            return (
              <motion.article
                key={p.id}
                initial={{ opacity: 1, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: i * 0.05 }}
                className="glass-panel rounded-xl p-5 transition-shadow hover:shadow-lg hover:shadow-[hsl(var(--primary))]/5"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-[hsl(var(--foreground))]">{p.title}</h3>
                      <span
                        className={cn(
                          "rounded-full px-2 py-0.5 text-xs font-medium",
                          p.status === "active" && "bg-[hsl(var(--accent))]/20 text-[hsl(var(--accent))]",
                          p.status === "passed" && "bg-[hsl(var(--success))]/20 text-[hsl(var(--success))]"
                        )}
                      >
                        {p.status}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-[hsl(var(--foreground-muted))]">{p.description}</p>
                    <p className="mt-2 text-xs text-[hsl(var(--foreground-subtle))]">Ends {p.endDate}</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="shrink-0 gap-1"
                    onClick={() => p.status === "active" && handleOpenVote(p)}
                    disabled={p.status !== "active"}
                  >
                    Vote
                    <ChevronRight className="size-4" />
                  </Button>
                </div>
                <div className="mt-4">
                  <div className="flex h-2 w-full overflow-hidden rounded-full bg-[hsl(var(--surface))]">
                    <div
                      className="h-full rounded-l-full bg-[hsl(var(--success))]/60"
                      style={{ width: forPct + "%" }}
                    />
                  </div>
                  <div className="mt-2 flex justify-between text-xs text-[hsl(var(--foreground-muted))]">
                    <span>For {p.votesFor.toLocaleString()}</span>
                    <span>Against {p.votesAgainst.toLocaleString()}</span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <AnimatePresence>
        {votingProposal && (
          <>
            <div
              className="fixed inset-0 z-50 bg-black/60"
              onClick={() => !voted && setVotingProposal(null)}
              aria-hidden
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background-card))] p-6 shadow-xl"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-[hsl(var(--foreground))]">Vote on proposal</h3>
                <button
                  type="button"
                  onClick={() => !voted && setVotingProposal(null)}
                  className="rounded-lg p-1 text-[hsl(var(--foreground-muted))] hover:bg-[hsl(var(--surface-hover))] hover:text-[hsl(var(--foreground))]"
                  aria-label="Close"
                >
                  <X className="size-5" />
                </button>
              </div>
              <p className="mt-2 text-sm text-[hsl(var(--foreground-muted))]">{votingProposal.title}</p>
              {!voted ? (
                <>
                  <p className="mt-4 text-sm font-medium text-[hsl(var(--foreground))]">Your vote</p>
                  <div className="mt-2 flex gap-3">
                    <button
                      type="button"
                      onClick={() => setVoteChoice("for")}
                      className={cn(
                        "flex flex-1 items-center justify-center gap-2 rounded-lg border-2 py-3 font-medium transition-colors",
                        voteChoice === "for"
                          ? "border-[hsl(var(--success))] bg-[hsl(var(--success))]/15 text-[hsl(var(--success))]"
                          : "border-[hsl(var(--border))] bg-transparent text-[hsl(var(--foreground-muted))] hover:border-[hsl(var(--success))]/50"
                      )}
                    >
                      <ThumbsUp className="size-5" />
                      For
                    </button>
                    <button
                      type="button"
                      onClick={() => setVoteChoice("against")}
                      className={cn(
                        "flex flex-1 items-center justify-center gap-2 rounded-lg border-2 py-3 font-medium transition-colors",
                        voteChoice === "against"
                          ? "border-[hsl(var(--error))] bg-[hsl(var(--error))]/15 text-[hsl(var(--error))]"
                          : "border-[hsl(var(--border))] bg-transparent text-[hsl(var(--foreground-muted))] hover:border-[hsl(var(--error))]/50"
                      )}
                    >
                      <ThumbsDown className="size-5" />
                      Against
                    </button>
                  </div>
                  <Button
                    className="mt-4 w-full"
                    onClick={handleConfirmVote}
                    disabled={!voteChoice}
                  >
                    Confirm vote
                  </Button>
                </>
              ) : (
                <p className="mt-4 text-center text-[hsl(var(--success))]">Vote recorded. Thank you.</p>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
