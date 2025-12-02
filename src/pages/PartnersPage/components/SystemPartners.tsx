import { TitleBlock } from "../../../components/ui/Titles";

export default function SystemPartners({
  content,
}: {
  content: {
    title: string;
    text: string;
    partners: { img: { src: string; alt: string } }[];
  };
}) {
  return (
    <section className="my-container side-padding">
      <TitleBlock {...content} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xl:gap-5">
        {content.partners.map((partner, i) => (
          <div
            key={i}
            className={
              "group hover:bg-light-black duration-200 ease-in-out rounded-md xl:rounded-lg bg-blueish-gray/15 flex justify-center items-center w-full py-3 lg:px-20" +
              ((i + 1) % 3 === 0 ? " sm:col-span-2 lg:col-span-1 " : "")
            }
          >
            <img
              className={
                "lg:w-full sm:w-[200px] w-[180px] max-w-full lg:max-w-[225px] group-hover:invert-100 duration-200 ease-in-out "
              }
              {...partner.img}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
