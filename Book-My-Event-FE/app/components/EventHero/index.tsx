import { EventHeroProps } from "~/components/EventHero/Schema";

export default function EventHero({
  backgroundImage,
  image,
  name,
  organizationName,
}: EventHeroProps) {
  return (
    <div className="w-full h-fit relative bg-dark-primary text-white">
      <div
        className="bg-cover bg-center h-56 md:h-96 border-t-2 border-b-2 border-dark-secondary"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full flex flex-col gap-6 md:gap-12 justify-start items-center pt-6 md:pt-12">
          <div>
            <img className="w-28 md:w-44 rounded-full" src={image} alt={name} />
          </div>
          <div className="w-full h-fit justify-center items-center flex flex-col md:gap-5">
            <div>
              <h1 className="text-lg md:text-3xl font-bold">{name}</h1>
            </div>
            <div>
              <h1 className="text-sm md:text-lg whitespace-nowrap">
                {organizationName}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
