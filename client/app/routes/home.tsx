import { Toaster } from "@/components/ui/toaster";
import { Toaster } from "sonner"; // ✅ correct use
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";

import Index from "@/pages/Index";
import CreateTicket from "@/pages/CreateTicket";
import TicketDetails from "@/pages/TicketDetails";
import AgentWorkspace from "@/pages/AgentWorkspace";
import ProposeResolution from "@/pages/ProposeResolution";
import ConfirmResolution from "@/pages/ConfirmResolution";
import ClosedTickets from "@/pages/ClosedTickets";
import Analytics from "@/pages/Analytics";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/create-ticket" element={<CreateTicket />} />
          <Route path="/ticket/:id" element={<TicketDetails />} />
          <Route path="/ticket/:id/work" element={<AgentWorkspace />} />
          <Route path="/ticket/:id/resolve" element={<ProposeResolution />} />
          <Route path="/ticket/:id/confirm" element={<ConfirmResolution />} />
          <Route path="/tickets/closed" element={<ClosedTickets />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
