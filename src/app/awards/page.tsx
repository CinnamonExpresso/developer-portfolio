import React from 'react'
import AwardHeaderSection from "../../componets/Awards/awardHeaderSection";
import { Metadata } from 'next';
import '../styles/about-globals.scss'

export const metadata: Metadata = {
  title: "Awards & Honors",
  description: "List of my Honors & Awards",
};

function AboutPage() {
  return (
    <div>
      <AwardHeaderSection />
    </div>
  )
}

export default AboutPage