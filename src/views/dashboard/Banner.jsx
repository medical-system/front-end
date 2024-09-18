import BannerImg from "../../assets/banner.avif";
const Banner = () => {
  return (
    <div className="w-full my-6 grid xl:grid-cols-8 grid-cols-1 gap-6">
      <div className="xl:col-span-6  w-full">
        <div className="bg-white rounded-xl border-[1px] border-border relative">
          <img
            src={BannerImg}
            alt="banner-img"
            className="w-full h-72 rounded object-cover"
          />
          <div className="space-y-4 py-5 md:px-12 px-6 absolute top-0 bottom-0 left-0 right-0 bg-subMain bg-opacity-10 flex flex-col justify-center">
            <h1 className="text-xl text-subMain capitalize font-semibold">
              The future of eye care is here
            </h1>
            <p className="text-xs text-textGray max-w-96 leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor asin cididunt ut labore et dolore magna ali qua.
              Lorem ipsum dolor sit amet.
            </p>
            <div>
              <button className="py-3 px-6 rounded bg-subMain text-white flex-colo transitions text-xs">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
