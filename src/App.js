import Content from "./components/content";
import ContentFooter from "./components/ContentFooter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { UrlContextProvider } from "./context/UrlContext";

function App() {
  return (
    <div>
      <UrlContextProvider>
        <section className="todoapp">
          <Header />
          <Content />
          <ContentFooter />/
        </section>
        <Footer />
      </UrlContextProvider>
    </div>
  );
}

export default App;
