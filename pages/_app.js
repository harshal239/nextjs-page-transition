import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <div className="relative h-screen overflow-hidden py-12 lg:px-48">
      <Navbar />
      <AnimatePresence initial={false}>
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}
export default MyApp;
