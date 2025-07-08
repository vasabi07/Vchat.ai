"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { createAgent } from "@/actions/agent-queries";
import { useState } from "react";

const AgentForm = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const handleSubmit = async ( )=>{
        const response = await createAgent(name, description);
        console.log(response);
        

    }
  return (
    <form className="max-w-sm w-full mx-auto bg-white dark:bg-zinc-950 rounded-xl shadow p-6 space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Agent Name</Label>
        <Input
          id="name"
          name="name"
          placeholder="Enter agent name"
          required
          className="bg-zinc-100 dark:bg-zinc-900"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          rows={3}
          placeholder="Describe this agent's purpose or role"
          className="bg-zinc-100 dark:bg-zinc-900"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <Button type="submit" className="w-full" onClick={handleSubmit}>
        Create Agent
      </Button>
    </form>
  );
};

export default AgentForm;
