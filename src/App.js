import { useEffect } from 'react';
import './assets/css/style.css'
import Layout from "./component/layout/layout";

function App() {
  useEffect(() => {
    console.clear()
  }, [])
  return (
    <Layout />
  );
}

export default App;
