
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Index from "./pages/Index";
import YourSpace from "./pages/YourSpace";
import Network from "./pages/Network";
import Jobs from "./pages/Jobs";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import CompanyPage from "./pages/CompanyPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/network" element={<Network />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/your-space" element={<YourSpace />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/company/:id" element={<CompanyPage />} />
            <Route path="/news" element={<Index />} />
            <Route path="/hashtag/:tag" element={<Index />} />
            <Route path="/saved/:type" element={<YourSpace />} />
            <Route path="/content/:type" element={<YourSpace />} />
            <Route path="/my-items" element={<YourSpace />} />
            <Route path="/settings" element={<Profile />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
