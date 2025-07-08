import { getAgents } from "@/actions/agent-queries";
import { Agent } from "@prisma/client";

export default async function Agents() {
  const agents: Agent[] = await getAgents();

  return (
    <div>
      {agents.length !== 0 ? (
        agents.map((agent) => (
          <div key={agent.id} className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold">{agent.name}</h2>
            <p className="text-sm text-gray-600">{agent.instructions}</p>
          </div>
        ))
      ) : (
        <div className="p-4 text-center text-gray-500">
          No agents found. Please create an agent.
        </div>
      )}
    </div>
  );
}
