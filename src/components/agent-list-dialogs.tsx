
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import AgentDialog from "./agent-dialog";


import type { Agent } from "@prisma/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface AgentListWithDialogsProps {
  agents: Agent[];
}

export default function AgentListWithDialogs({ agents }: AgentListWithDialogsProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between p-6 bg-white shadow-sm">
        <h1 className="text-2xl font-bold">Agents</h1>
        <Button onClick={() => setOpen(true)}>
          <PlusIcon /> New Agent
        </Button>
      </div>
      <div>
        {agents.length !== 0 ? (
          agents.map((agent) => (
            <Card key={agent.id} className="hover:shadow-xl transition-shadow border border-gray-200 bg-white dark:bg-zinc-900">
              <CardHeader>
                <CardTitle className="text-3xl">{agent.name.toUpperCase()}</CardTitle>
                <CardDescription>{agent.instructions}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm">View Details</Button>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="p-4 text-center text-gray-500">
            No agents found. Please create an agent.
          </div>
        )}
      </div>
      <AgentDialog open={open} onOpenChange={setOpen} />
    </>
  );
}
