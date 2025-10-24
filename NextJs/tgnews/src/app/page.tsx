import MainBody from "@/components/mainbody/MainBody";
import MainFooter from "@/components/mainfooter/MainFooter";
import MainHeader from "@/components/mainheader/MainHeader";
import Image from "next/image";

export default function Home() {
  return (
    <><MainHeader></MainHeader>
    <MainBody></MainBody>
    <MainFooter></MainFooter>
  </>
  );
}
