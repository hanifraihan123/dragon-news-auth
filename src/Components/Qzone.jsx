import swim from "../assets/swimming.png";
import clas from "../assets/class.png";
import pground from "../assets/playground.png";

const Qzone = () => {
    return (
        <div className="bg-base-200 p-1 m-3">
            <div className="flex flex-col gap-2">
                <h3 className="font-semibold m-2">Q-Zone</h3>
                <div>
                    <img src={swim} alt="" />
                    <img src={clas} alt="" />
                    <img src={pground} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Qzone;