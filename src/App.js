import Header from "./Components/Header";
import FeedbackItem from "./Components/FeedbackItem";
import Nav from "./Components/Navigation";
import Corousel from "./Components/Corousel";
const App = () => {
  return (
    <>
    <Header />
    <Nav/>
    <div className="container">
    <FeedbackItem />
    <Corousel/>
    </div>
    </>
  );
};
export default App;
