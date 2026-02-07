import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@/lib/router-shim";
import React from "react";

const queryClient = new QueryClient();

export const AppWrapper = ({ children, params }: { children: React.ReactNode; params?: Record<string, string> }) => (
    <QueryClientProvider client={queryClient}>
        <TooltipProvider>
            <RouterProvider params={params}>
                {children}
                <Toaster />
                <Sonner />
            </RouterProvider>
        </TooltipProvider>
    </QueryClientProvider>
);
