import { ReactComponent as Ilustrasi } from "../analytics.svg";
import { Link } from "react-router-dom";
import image from "../images/logo.png";
// import { bounce } from 'react-animations'

// const Bounce = styled.div`animations: 2s ${keframes`${bounce}`}infinite`;

export default function Intro({ slide, setSlide }) {
  if (slide !== 0) return null;

  return (
    <div className="bg-blue-200 h-full p-8 text">
      <div className="text-6 font-bold">
        <p className="font-bold underline">Sistem Pengambilan Keputusan</p>
      </div>
      <div className="h-4/5 flex ">
        <div className="w-1/2 text-4xl self-center">
          <p>PENGAMBILAN KEPUTUSAN</p>
          <p className="font-bold">DALAM KONDISI</p>
          <p className="font-bold">BERISIKO</p>
          <div className="flex mt-4">
            <Link to="/calculate">
              <div className="btn-start w-32 text-center text-base rounded-md cursor-pointer py-2">Calculate</div>
            </Link>
          </div>
        </div>
        <div className="w-1/2 flex justify-center self-center">
          <img src={image} alt="tutorial image" />
        </div>
      </div>
      <div className="text-6 font-bold justify-itemds-end">
        <p>Muhammad Rifki Yuda Pratama</p>
        <p>2110191050</p>
        <p>3 D4 IT B</p>
      </div>
    </div>
  );
}
