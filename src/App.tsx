import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import PrivacyPolicy from "./pages/policy"; // ✅ Added Privacy Policy
import ReturnPolicy from "./pages/returPolicy"; // ✅ Added Return Policy page
import TermsAndConditions from "./pages/T&C"; // ✅ Added Terms and Conditions page



// Layout and Pages
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Products from "./pages/Products";
import About from "./pages/About";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import CheckoutPage from "./pages/CheckoutPage"; // ✅ Updated to new Checkout page with Revolut integration
import PaymentSuccess from "./pages/PaymentSuccess"; // ✅ Added Payment Success page
import PaymentCancel from "./pages/PaymentCancel"; // ✅ Added Payment Cancel page

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="products" element={<Products />} />
              <Route path="about" element={<About />} />
              <Route path="cart" element={<Cart />} />
              <Route path="checkout" element={<CheckoutPage />} />
              <Route path="payment-success" element={<PaymentSuccess />} />
              <Route path="payment-cancel" element={<PaymentCancel />} />
              <Route path="privacy-policy" element={<PrivacyPolicy />} />
              <Route path="return-policy" element={<ReturnPolicy />} />
              <Route path="terms-and-conditions" element={<TermsAndConditions />} />

              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
