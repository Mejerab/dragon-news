import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";


const News = () => {
    const { id } = useParams();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="flex justify-between">
                <div>
                    <h2 className="text-6xl">News Details</h2>
                    <p>{id}</p>
                </div>
                <RightSideNav></RightSideNav>
            </div>

        </div>
    );
};

export default News;