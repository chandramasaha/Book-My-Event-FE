import type { ProfileCardProps } from "../Schema";

export default function ProfileCard({
  image,
  organization,
  location,
  name,
  tags,
}: ProfileCardProps) {
  return (
    <div className="bg-dark-secondary relative text-white border-dark-border-primary border-opacity-50 border rounded-2xl w-[374px] flex flex-col items-center">
      <div className="flex flex-col items-center text-center py-10">
        <img
          src={`/Dashboard/ProfileCard/${image}`}
          className="rounded-full w-[140px] h-[140px]"
          alt={image}
        />
        <div className="text-2xl py-5">{name}</div>
        <div className="mb-2">{organization}</div>
        <div className="text-xs mb-5">{location}</div>
        <div className="text-[10px]">
          {tags && tags.length > 0 && (
            <div className="flex flex-row gap-2">
              {tags.map((tag, idx) => (
                <div key={idx} className="py-1 px-3 bg-dark-tertiary rounded-full">
                  {tag}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="absolute top-0 right-0 w-10 h-10 mr-5 mt-5 rounded-full bg-dark-tertiary flex justify-center items-center">
        <img src="/Dashboard/ProfileCard/Edit.svg" alt="Edit" />
      </div>
    </div>
  );
}
