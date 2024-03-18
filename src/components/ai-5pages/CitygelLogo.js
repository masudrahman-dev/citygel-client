const CitygelLogo = () => {
  return (
    <footer className="self-stretch h-[307px] bg-whitesmoke-100 flex flex-col items-center justify-start py-[37px] px-5 box-border gap-[10px] max-w-full text-left text-xl text-gray-1200 font-poppins">
      <img
        className="w-[390px] h-[193px] relative object-cover max-w-full"
        loading="lazy"
        alt=""
        src="/citygel2@2x.png"
      />
      <div className="flex flex-row items-start justify-start py-0 px-[7px] box-border max-w-full">
        <div className="relative mq450:text-base">
          ©CityGel.com 2024, All rights Reseved
        </div>
      </div>
    </footer>
  );
};

export default CitygelLogo;
