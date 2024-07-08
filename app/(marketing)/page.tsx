import { infos } from "@/config/landing";
import { BentoGrid } from "@/components/sections/bentogrid";
import { Features } from "@/components/sections/features";
import { HeroLanding } from "@/components/sections/hero-landing";
import { InfoLanding } from "@/components/sections/info-landing";
import { Powered } from "@/components/sections/powered";
import { Testimonials } from "@/components/sections/testimonials";
import { HeroScrollDemo } from "@/components/sections/preview-landing";

export default async function IndexPage() {
  return (
    <>
      <HeroLanding />
      <HeroScrollDemo />
      <Powered />
      <BentoGrid />
      <InfoLanding data={infos[0]} reverse={true} />
      {/* <InfoLanding data={infos[1]} /> */}
      <Features />
      <Testimonials />
    </>
  );
}
