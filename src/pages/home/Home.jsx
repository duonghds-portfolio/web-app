import Intro from "./Intro";
import Intro2 from "./Intro2";
const Home = () => {
    return (
        <div className="container-content">
            <Intro id="content-1" />
            <Intro2 id="content-2" />
            <Intro id="content-3" />
            <Intro2 id="content-4" />
        </div>
    )
};
  
export default Home;