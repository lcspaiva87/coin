import Button from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import SolutionsCard from "./solutionItem";

export default function Solutions() {
  const cardsData = [
    {
      id: 1,
      icon: Icons.Atom ,
    },
    {
      id: 2,
      icon: Icons.CryptoCurrencyCircle ,
    },
    {
      id: 3,
      icon: Icons.Chart,
    },
    {
      id: 4,
      icon: Icons.Computer ,
    },
  ];

  return (
    <div className="from-white to-secondary-100 lg:bg-gradient-to-b">
      <section className="mt-14 flex flex-col lg:container md:mt-20 lg:flex-row-reverse lg:gap-8">
        <div className="container lg:mx-0 lg:w-[406px] lg:max-w-none lg:flex-shrink-0 lg:self-center lg:px-0">
          <div className="md:ml-[88px] lg:ml-0">
            <h2 className="font-bold text-primary lg:text-h5" id="about-us">
              Lorem ipsum{" "}
            </h2>
            <p className="mt-1 text-h4 font-bold md:text-h3 lg:text-h2">
              Lorem ipsum
            </p>
            <p className="mt-4 text-label lg:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor
            </p>

            <Button
              className="mt-10 hidden px-[1.5rem] py-[0.875rem] text-base lg:block"
              dataTest="button-sign-up-about"
            >
              Sign up now
            </Button>
          </div>
        </div>
        <div
          className="flex w-full flex-nowrap gap-4 self-start overflow-x-scroll px-7 pb-4 md:flex-wrap md:gap-6 md:overflow-visible
      md:px-6 md:pb-4 lg:gap-8 lg:px-0 2xl:w-fit md:[&>*:nth-child(3)]:ml-auto "
        >
         
            {cardsData.map((item) => (
              <SolutionsCard
                key={item.id}
                icon={<item.icon />}
              />
            ))}
      

        
        </div>
      </section>
    </div>
  );
}
