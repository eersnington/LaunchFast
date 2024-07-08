import { PreviewImage } from "@/config/landing";
import Image from "next/image";
import { ContainerScroll } from "../container-scroll";
/*
  This component renders the Preview Image below the Hero Section of the landing page.
  Follow the aspect ratio of the image to maintain the quality of the image.
  Also keep the file as .jpg to reduce the size of the image.
  Best practice is to keep the image size below 90KB and the dimensions as 2000x1000.
*/

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              The only Boilerplate <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                You&apos;ll Ever Need
              </span>
            </h1>
          </>
        }
      >
        <Image
          className="size-full object-cover object-center"
          src={PreviewImage.src}
          alt={PreviewImage.alt}
          width={PreviewImage.width}
          height={PreviewImage.height}
          priority={true}
        />
      </ContainerScroll>
    </div>
  );
}
