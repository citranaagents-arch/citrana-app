import { create } from "zustand";

export type AgentType =
  | "defi"
  | "trading"
  | "treasury"
  | "cross-chain"
  | "research"
  | "scheduler";

export type AgentStatus = "active" | "paused" | "error";

export interface Agent {
  id: string;
  name: string;
  type: AgentType;
  status: AgentStatus;
  executionFrequency: string;
  riskLevel: "low" | "medium" | "high";
  lastActionAt: string;
  metrics?: { profit?: string; outcome?: string };
}

export interface ExecutionLogEntry {
  id: string;
  agentId: string;
  action: string;
  status: "pending" | "completed" | "failed";
  timestamp: string;
  txHash?: string;
  zkVerified?: boolean;
}

export interface DashboardStats {
  totalAssetsUnderAutomation: string;
  activeAgents: number;
  runningTasks: number;
  executionSuccessRate: string;
  gasSaved: string;
}

const defaultStats: DashboardStats = {
  totalAssetsUnderAutomation: "$124,580",
  activeAgents: 3,
  runningTasks: 5,
  executionSuccessRate: "98.2%",
  gasSaved: "0.42 ETH",
};

/* Deterministic timestamps (no Date.now) to avoid hydration mismatch between server and client */
const BASE_MS = 1709251200000; // Fixed epoch for consistent SSR/client output
const defaultAgents: Agent[] = [
  {
    id: "1",
    name: "ETH Yield Optimizer",
    type: "defi",
    status: "active",
    executionFrequency: "Every 6h",
    riskLevel: "medium",
    lastActionAt: new Date(BASE_MS - 1000 * 60 * 12).toISOString(),
    metrics: { profit: "+2.4%", outcome: "Rebalanced" },
  },
  {
    id: "2",
    name: "DEX Monitor",
    type: "trading",
    status: "active",
    executionFrequency: "On trigger",
    riskLevel: "low",
    lastActionAt: new Date(BASE_MS - 1000 * 60 * 2).toISOString(),
    metrics: { outcome: "Swap executed" },
  },
  {
    id: "3",
    name: "Treasury Keeper",
    type: "treasury",
    status: "paused",
    executionFrequency: "Daily",
    riskLevel: "low",
    lastActionAt: new Date(BASE_MS - 1000 * 60 * 60 * 24).toISOString(),
  },
];

const defaultLogs: ExecutionLogEntry[] = [
  {
    id: "log-1",
    agentId: "2",
    action: "Swap 0.5 ETH → USDC",
    status: "completed",
    timestamp: new Date(BASE_MS - 1000 * 60 * 2).toISOString(),
    txHash: "0x…a1b2",
    zkVerified: true,
  },
  {
    id: "log-2",
    agentId: "1",
    action: "Rebalance liquidity positions",
    status: "completed",
    timestamp: new Date(BASE_MS - 1000 * 60 * 12).toISOString(),
    txHash: "0x…c3d4",
    zkVerified: true,
  },
  {
    id: "log-3",
    agentId: "1",
    action: "Claim staking rewards",
    status: "completed",
    timestamp: new Date(BASE_MS - 1000 * 60 * 45).toISOString(),
    zkVerified: true,
  },
];

interface AgentsState {
  stats: DashboardStats;
  agents: Agent[];
  logs: ExecutionLogEntry[];
  activityEvents: Array<{
    id: string;
    type: "pending" | "completed" | "failed" | "info";
    message: string;
    timestamp: string;
    agentId?: string;
    zkVerified?: boolean;
    gasEstimate?: string;
  }>;
  setStats: (stats: Partial<DashboardStats>) => void;
  setAgents: (agents: Agent[]) => void;
  addLog: (entry: ExecutionLogEntry) => void;
  addActivityEvent: (
    event: AgentsState["activityEvents"][number]
  ) => void;
  getAgentById: (id: string) => Agent | undefined;
}

export const useAgentsStore = create<AgentsState>((set, get) => ({
  stats: defaultStats,
  agents: defaultAgents,
  logs: defaultLogs,
  activityEvents: [],
  setStats: (stats) =>
    set((s) => ({ stats: { ...s.stats, ...stats } })),
  setAgents: (agents) => set({ agents }),
  addLog: (entry) =>
    set((s) => ({ logs: [entry, ...s.logs].slice(0, 50) })),
  addActivityEvent: (event) =>
    set((s) => ({
      activityEvents: [event, ...s.activityEvents].slice(0, 100),
    })),
  getAgentById: (id) => get().agents.find((a) => a.id === id),
}));
