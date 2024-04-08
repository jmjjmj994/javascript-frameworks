import { Helmet } from 'react-helmet-async';
import Content from './Content';
function App() {
  return (
    <>
      <Helmet>
        <meta name="description" content="" />
        <title>Home</title>
      </Helmet>

      <div className=" wrapper md:max-w-[80%] m-auto py-[40px]">
        <Content />
      </div>
    </>
  );
}
export default App;
