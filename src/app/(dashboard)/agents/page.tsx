import { getAgents } from "@/actions/agent-queries";
import AgentListWithDialogs from "@/components/agent-list-dialogs";

import { Agent } from "@prisma/client";


export default async function Agents() {
  const agents: Agent[] = await getAgents();

  return <AgentListWithDialogs agents={agents} />;
}
