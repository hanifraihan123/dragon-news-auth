import SocialLogin from './SocialLogin';
import FindUsOn from './FindUsOn';
import Qzone from './Qzone';
import AdSection from './AdSection';

const RightNavbar = () => {
    return (
        <div className='space-y-5'>
            <SocialLogin></SocialLogin>
            <FindUsOn></FindUsOn>
            <Qzone></Qzone>
        </div>
    );
};

export default RightNavbar;