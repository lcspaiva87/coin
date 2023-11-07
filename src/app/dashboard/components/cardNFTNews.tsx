import Image from "next/image";

export default function CardNFTNews() {
  return (
    <div className="flex flex-wrap shadow-lg rounded-lg w-1/2 max-sm:min-h-36 bg-white sm:h-28">
      <div className="flex flex-col w-1/2 max-sm:w-full p-4 max-sm:p-2 max-sm:h-20">
        <p className="font-bold text-xs max-sm:text-xs">NFT&#39;s NEWS</p>
        <p className="text-xs text-secondary-500 mt-[5px] mb-4 max-md:mb-0 max-sm:text-xs">
          New ElephantX NFT to be lauched!
        </p>
        <p className="text-small-label text-primary-400 max-sm:hidden">Read more +</p>
      </div>

      <div className="w-1/2 max-sm:w-full rounded-e-lg max-sm:rounded-b-lg md:h-28 flex">
        <Image
          width={0}
          height={0}
          src="/nft.svg"
          alt="Eduphant's picture"
          layout="responsive"
          className="rounded-e-lg max-sm:rounded-b-lg max-sm:rounded-tr-none sm:max-h-28 object-cover"
        />
      </div>
    </div>
  );
}
// <div className="flex  flex-col overflow-hidden rounded-lg shadow-[0px_8px_16px_rgba(0,0,0,0.1)] md:flex-row ">
//   <div className="p-2 md:p-4">
//     <span className="text-small-label font-bold md:text-label">
//       NFT NEWS
//     </span>
//     <p className="mt-[7px] text-small-label text-secondary-500 md:mt-[5px]">
//       New ElephantX NFT to be launched!
//     </p>
//     <p className="mt-4 hidden cursor-pointer text-small-label text-primary-400 hover:underline md:inline-block">
//       Read more +
//     </p>
//   </div>
//   <div className="mt-2 min-h-[77px] w-full overflow-hidden bg-gradient-to-tr from-primary to-quaternary-400 md:mt-0">
//     <img src="/nft.svg" alt="" className="h-full w-full object-cover" />
//   </div>
// </div>
