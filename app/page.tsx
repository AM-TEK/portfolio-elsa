import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import Services from "@/components/services";
import skyline from "@/public/austin-skyline.jpg";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full max-w-full px-4">
      <Intro />
      <SectionDivider />
      <Services />
      <About />
      <section className="relative flex flex-col items-center justify-center w-full min-h-screen bg-center bg-no-repeat bg-cover experience overlay" style={{ backgroundImage: `url(${skyline.src})`}}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center w-full max-w-6xl p-8">
          <Experience />
          <Contact />
        </div>
      </section>
      <Footer />
    </main>
  )
}
