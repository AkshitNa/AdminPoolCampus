import { Link } from "react-router-dom";
import NovaNectarBlueBlack from "../../assets/NovaNectorLogo.svg";

const NovaNector = () => {
  return (
    <>
      <div className="flex items-center">
        <div>
          <Link to="/">
            <img
              src={NovaNectarBlueBlack}
              alt="NovaNectar"
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
            />
          </Link>
        </div>
        <div>
          <p className="font-semibold text-nova-blue ml-2 text-base sm:text-lg">
            NOVANECTAR
          </p>
          <p className="font-kumbh font-semibold ml-2 text-xs sm:text-sm">
            SERVICESPVT.LTD.
          </p>
        </div>
      </div>
    </>
  );
};

export default NovaNector;
