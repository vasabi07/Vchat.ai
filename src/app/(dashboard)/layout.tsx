import Dashboard from "@/components/dashboard";
import { SidebarProvider } from "@/components/ui/sidebar";

interface Props {
    children: React.ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
    return (
        <div >
        <div >
            <SidebarProvider>
            <Dashboard/>
            {children}
            </SidebarProvider>
        </div>  
        </div>

    )
}

export default DashboardLayout