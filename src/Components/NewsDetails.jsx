import { Link, useLoaderData } from "react-router-dom";
import Header from "./Header";
import RightNavbar from "./RightNavbar";
import { FaArrowLeft } from "react-icons/fa";

const NewsDetails = () => {
  const data = useLoaderData();
  const news = data.data[0];
  return (
    <div>
      <Header></Header>
      <div className="w-11/12 mx-auto grid grid-cols-12 gap-5">
        <div className="col-span-9">
          <h2 className="font-semibold mb-2">Dragon News</h2>
          <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={news?.image_url} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{news?.title}</h2>
              <p>{news?.details}</p>
              <div className="card-actions">
                <Link to={`/category/${news?.category_id}`} className="btn btn-primary bg-red-600 text-white">
                  <FaArrowLeft /> All News in this category
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <RightNavbar></RightNavbar>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
