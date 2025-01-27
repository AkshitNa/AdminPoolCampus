import NovaWhiteImg from "../../assets/NovaNectorLogoWhite.svg";

const NovaNectorWhite = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
        <img
          src={NovaWhiteImg}
          alt="Nova Nectar"
          className="w-12 h-12 sm:w-14 sm:h-14"
        />
        <div className="text-center sm:text-left">
          <p className="text-nova-blue font-semibold text-lg sm:text-xl">
            NOVANECTAR
          </p>
          <p className="text-white font-semibold text-base sm:text-lg lg:text-xl whitespace-nowrap">
            SERVICES PVT. LTD.
          </p>
        </div>
      </div>
    </>
  );
};

export default NovaNectorWhite;
