"use client"
import {Dialog,DialogContent,DialogHeader,DialogTitle,DialogDescription} from "@/components/ui/dialog"
import {Drawer,DrawerContent,DrawerHeader,DrawerTitle,DrawerDescription} from "@/components/ui/drawer"
import { useIsMobile } from "@/hooks/use-mobile";

interface DialogProps {
    title: string;
    description:string;
    children: React.ReactNode;
    open: boolean;
    onOpenChange: (open: boolean) => void;
};

export const ResponsiveDialog = ({
    title,
    description,
    children,
    open,
    onOpenChange
}: DialogProps) => {
    const isMobile = useIsMobile()
    if (isMobile) {
        return (
            <Drawer open={open} onOpenChange={onOpenChange}>
                <DrawerContent className="sm:max-w-[425px]">
                    <DrawerHeader>
                        <DrawerTitle>{title}</DrawerTitle>
                        <DrawerDescription>{description}</DrawerDescription>
                    </DrawerHeader>
                    {children}
                </DrawerContent>
            </Drawer>
        );
    }
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>
                {children}
            </DialogContent>
        </Dialog>
    );
}