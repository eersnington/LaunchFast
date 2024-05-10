import { PreviewImage } from "@/config/landing";
import Image from "next/image";
/*
  This component renders the Preview Image below the Hero Section of the landing page.
  Follow the aspect ratio of the image to maintain the quality of the image.
  Also keep the file as .jpg to reduce the size of the image.
  Best practice is to keep the image size below 90KB and the dimensions as 2000x1000.
*/

export function PreviewLanding() {
  return (
    <div className="pb-6 sm:pb-16">
      <div className="container max-w-7xl">
        <div className="rounded-xl md:bg-muted/30 md:p-3.5 md:ring-1 md:ring-inset md:ring-border">
          <div className="relative aspect-video overflow-hidden rounded-xl border md:rounded-lg">
            <Image
              className="size-full object-cover object-center"
              src={PreviewImage.src}
              alt={PreviewImage.alt}
              width={PreviewImage.width}
              height={PreviewImage.height}
              priority={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
