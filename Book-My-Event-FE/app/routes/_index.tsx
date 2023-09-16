import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Book My Event | Events" },
    { name: "description", content: "Book My Event! Browse all the events" },
  ];
};

export default function Index() {
  return (
    <div className="flex min-h-screen justify-center items-center text-xl font-bold">
      Book My Event
    </div>
  );
}
