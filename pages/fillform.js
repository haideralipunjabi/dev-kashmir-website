import Navbar from "../components/navbar";
import { NextSeo } from "next-seo";
import Footer from "../components/footer";
import NominationForm from "../components/nominationform";
export default function Nominate() {
  return (
    <>
      <NextSeo
        title="Fill Form - Kashmiri Devs"
        canonical="https://kashmiri.dev/fillform"
        openGraph={{
          title: "Fiil Form - Kashmiri Devs",
          url: "https://kashmiri.dev/fillform",
        }}
      />
      <Navbar />
      <div className="section">
        <div className="container">
          <NominationForm />
        </div>
      </div>
      <Footer />
    </>
  );
}
