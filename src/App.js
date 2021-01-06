import Book from "./components/Book";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Book
        title="The Power of now"
        img=""
        description="Lorem dolor sit amet, an sea omnis luptaum, ea consul iudicabit duo. Cu enim lucilus vic, ut pri decore nostro patentium. Ne sea summo deleniti Ea 
        omnes nominati pro. At vis propriae consequat torquantos, ex facer oratio mel. Quodsi tritani appareat his ei, atqui facilis quaestio enum eu."
      />
      <Book
        title="The Alchemist"
        img=""
        description="Lorem dolor sit amet, an sea omnis luptaum, ea consul iudicabit duo. Cu enim lucilus vic, ut pri decore 
        nostro patentium. Ne sea summo deleniti Ea omnes nominati pro. At vis propriae consequat torquantos, ex facer oratio mel. Quodsi tritani appareat his ei, atqui facilis quaestio enum eu."
      />
      <Footer />
    </div>
  );
}

export { App };
