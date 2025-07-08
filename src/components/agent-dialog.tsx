import AgentForm from "./agent-form";
import { ResponsiveDialog } from "./dialog"

interface NewAgentDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const AgentDialog = ({
    open,
    onOpenChange
    }: NewAgentDialogProps & {
    children?: React.ReactNode;
}) => {
  return (
    <ResponsiveDialog
      title="New Agent"
      description="Create a new agent to interact with your data."
      open={open}
      onOpenChange={onOpenChange}>
       <AgentForm/>
    </ResponsiveDialog>
  )
}

export default AgentDialog