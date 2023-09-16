import { SOCIALMEDIA_ICONS } from "~/utils/EventPage/Data";
import { SpeakerCardProps } from "../Schema";

const SpeakerCard = ({ image, name, designation, about }: SpeakerCardProps) => {
  return (
    <div className="bg-dark-secondary flex border rounded-2xl border-dark-border-primary py-4 px-6 md:py-6 md:px-10 items-center space-x-10">
      <div className="w-fit">
        <img src={image} alt="Speaker" />
      </div>
      <div className="w-full text-white">
        <div className="md:flex justify-between">
          <div>
            <div className="text-2xl md:font-semibold pb-2">{name}</div>
            <div className="pb-2 md:font-semibold">{designation}</div>
          </div>
          <div className="flex space-x-4 pt-10 md:pt-0 md:-mt-10">
            <img
              className="cursor-pointer"
              src={SOCIALMEDIA_ICONS.FACEBOOK.ICON}
              alt={SOCIALMEDIA_ICONS.FACEBOOK.ALTTEXT}
            />
            <img
              className="cursor-pointer"
              src={SOCIALMEDIA_ICONS.INSTAGRAM.ICON}
              alt={SOCIALMEDIA_ICONS.INSTAGRAM.ALTTEXT}
            />
            <img
              className="cursor-pointer"
              src={SOCIALMEDIA_ICONS.LINKEDIN.ICON}
              alt={SOCIALMEDIA_ICONS.LINKEDIN.ALTTEXT}
            />
            <img
              className="cursor-pointer"
              src={SOCIALMEDIA_ICONS.TWITTER.ICON}
              alt={SOCIALMEDIA_ICONS.TWITTER.ALTTEXT}
            />
          </div>
        </div>
        <div className="hidden md:block">
          {about &&
            about.map((item, index) => {
              return <p key={index}>{item}</p>;
            })}
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;
