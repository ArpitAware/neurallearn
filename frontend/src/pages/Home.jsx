import Hero from "../components/Hero";
import Features from "../components/Features";
import CourseCarousel from "../components/CourseCarousel";
import Stats from "../components/Stats";
import FeatureShowcase from "../components/FeatureShowcase";
import CoursePreview from "../components/CoursePreview";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">

      {/* HERO */}
      <Hero />

      <div className="max-w-7xl mx-auto px-6 space-y-24">

        {/* FEATURES */}
        <Features />

        {/* 🔥 TRENDING COURSES */}
        <CourseCarousel />

        {/* STATS */}
        <Stats />

        {/* FEATURE SHOWCASE */}
        <FeatureShowcase />

        {/* 🔥 GRID COURSES */}
        <CoursePreview />

        {/* TESTIMONIALS */}
        <Testimonials />

        {/* CTA */}
        <CTA />

      </div>

      <Footer />
    </div>
  );
}