import { socialsData } from "@/data/socialsData";
import Image from "next/image";
import Link from "next/link";
import Copyright from "../Copyright/Copyright";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between px-12 py-2 main-background-color">
      <div>
        <Image
          src={"/assets/whiteLogo.svg"}
          alt="logo"
          width={0}
          height={0}
          className="object-cover w-32 h-full"
        />
      </div>
      <Copyright />
      <div className="flex item-center justify-center gap-6">
        {socialsData.map((socialIcon) => {
          return (
            <Link key={socialIcon.id} href={"#"}>
              <Image
                src={socialIcon.image}
                alt={socialIcon.alt}
                width={0}
                height={0}
                className="object-cover w-full h-full"
              />
            </Link>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
