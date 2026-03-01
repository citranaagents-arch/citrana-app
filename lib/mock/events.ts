import { useAgentsStore } from "@/lib/store/agents";

const MESSAGE_TEMPLATES = {
  pending: [
    "Simulating transaction...",
    "Checking conditions...",
    "Waiting for gas threshold...",
  ],
  completed: [
    "Swap executed successfully",
    "Position rebalanced",
    "Rewards claimed",
    "Bridge completed",
  ],
  failed: ["Transaction reverted", "Slippage exceeded", "Insufficient gas"],
  info: ["Agent started", "Conditions met", "Trigger activated"],
};

let intervalId: ReturnType<typeof setInterval> | null = null;

export function startMockEventStream(intervalMs = 4000) {
  if (intervalId) return;
  const store = useAgentsStore.getState();
  const agents = store.agents.filter((a) => a.status === "active");
  if (agents.length === 0) return;

  intervalId = setInterval(() => {
    const types = ["completed", "info", "pending"] as const;
    const type = types[Math.floor(Math.random() * types.length)];
    const templates = MESSAGE_TEMPLATES[type];
    const message =
      templates[Math.floor(Math.random() * templates.length)];
    const agent = agents[Math.floor(Math.random() * agents.length)];
    const gas = type === "completed" ? `0.00${12 + Math.floor(Math.random() * 88)} ETH` : undefined;
    store.addActivityEvent({
      id: `ev-${Date.now()}`,
      type,
      message,
      timestamp: new Date().toISOString(),
      agentId: agent.id,
      zkVerified: type === "completed" ? Math.random() > 0.3 : undefined,
      gasEstimate: gas,
    });
  }, intervalMs);
}

export function stopMockEventStream() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
}
