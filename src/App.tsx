import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <main className="space-y-4 bg-dark-900 overflow-hidden">
      <Header />
      <HomePage />
      <Footer />
    </main>
  );
};

export default App;
