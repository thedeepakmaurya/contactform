import Form from "./Form";
import Header from "./pages/Header";
import wave from "./assets/image/wave.svg"

function App() {
  return (
    <div className="flex flex-col items-center justify-center pt-10 bg-no-repeat bg-top" style={{backgroundImage: `url(${wave})`, width:'100%'}}>
      <Header />
      <Form />
    </div>
  );
}

export default App;
