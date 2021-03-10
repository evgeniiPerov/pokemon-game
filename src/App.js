
import './index.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Layout from './components/Layout';
import img from './assets/bg1.jpg'


function App() {

  // urlBg = { img }
  // const layoutBColor = { background: `url(${img})` }

  return (
    <div className="App">
      <Header title='this is title Header' desc='this is descr Header' />
      <Layout urlBg={img} />
      <Layout title='Hello World!' desc='This is pokemon card game!' colorBg />
      <Layout urlBg={img} />
      <Footer />
    </div>
  );
}

export default App;
