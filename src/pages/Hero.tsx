export default function Hero() {
  return (
    <section className="top-0 w-full text-white sm:sticky sm:~py-12/[5rem] sm:~pl-12/[5rem]">
      <div className="card-neumorphism ~p-4/8">
        {/* INFORMATION */}
        <div className="~pb-8/12">
          <p className="oswald-medium ~text-4xl/7xl">Lorenz Jedd</p>
          <p className="marvel-regular ~text-xl/4xl ~pb-4/8">
            Junior Programmer
          </p>
          <p className="antic-regular w-3/4 leading-6 ~text-base/lg">
            Adipisicing nostrud sit voluptate dolor consequat magna adipisicing
            nisi do laboris id qui non pariatur.
          </p>
        </div>

        {/* ACCOUNTS */}
        <div className="">
          <p className="~text-xs/sm">Linkedin</p>
        </div>
      </div>
    </section>
  );
}
