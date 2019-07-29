import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { Parallax } from "react-spring/renderprops-addons.cjs";
import Collapsible from "react-collapsible";

// Components
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";

// Elements
import Inner from "../elements/Inner";
import { Title, GradientTitle, BigTitle, Subtitle } from "../elements/Titles";

// Views
import Hero from "../views/Hero";
import BlueSection from "../views/BlueSection";
import FAQ from "../views/FAQ";
import Contact from "../views/Contact";
import About from "../views/About";

import styles from "./temp.css";

import hack3 from "../images/Hack3_Bare.png";
import OurTeam from "../views/OurTeam";

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const FAQContent = styled.div`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-mono pt-6 md:pt-12 text-justify`};

  dt {
    font-weight: bold;
  }
`;

const ContactContent = styled.div`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
  text-align: center;
`;

const ContactButton = styled.a`
  display: inline-block;
  color: white;
  cursor: pointer;
  padding: 16px;
  overflow: hidden;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
  background: linear-gradient(90deg, #8a88dc, #45cbfc);
  border-radius: 8px;
  -webkit-text-fill-color: initial;
`;

const AboutContent = styled.div`
  ${tw`text-xl lg:text-2xl font-mono mt-8 xxl:w-3/4`};
  color: white;
`;

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`;

const logoStyle = {
  width: "50%"
};

const subtitleStyle = {};

const Index = () => (
  <>
    <Layout />
    <Parallax pages={8}>
      <Hero offset={0}>
        <BigTitle>
          <img src={hack3} style={logoStyle} />
        </BigTitle>
        <Subtitle style={subtitleStyle}>
          <p>
            Experience Innovation <br />A new hackathon in the Boston area
          </p>
          <p>
            <ContactButton href="https://hack3boston.typeform.com/to/OMh8VL">
              Pre-register now!
            </ContactButton>
            <br />
            <ContactButton href="https://discord.gg/jcvTJpn">
              Join Discord
            </ContactButton>
          </p>
        </Subtitle>
      </Hero>
      <About offset={1}>
        <GradientTitle>What is Hack3</GradientTitle>
        <AboutContent>
          <p>
            Hack3 is a fun, 24-48 hour hackathon made for high school students,
            both new and experienced. During this time you will develop and
            present a project for cool prizes. Most importantly, you will learn
            new and useful skills that will help you on your computer science
            journey.
          </p>
        </AboutContent>
        <GradientTitle>Our Goal</GradientTitle>
        <AboutContent>
          In the palm of their hands, students hold a computer a thousand times
          faster than the Apollo Guidance Computer used to land men on the moon.
          Yet, this incredible power remains mostly untapped. Most students use
          technology solely to consume, not create. Meanwhile, instead of
          bringing positive change, tech companies and governments have abused
          these advances to eliminate consumer independence and avoid giving
          back to the coding community. We need to nurture a new generation of
          ethic-conscious and determined programmers and give them the ability
          to make change for good. Our aim is to provide an opportunity for
          aspiring leaders of the tech world to bring their own ideas to
          fruition and create a better world for future generations.
        </AboutContent>
        <GradientTitle>Tracks</GradientTitle>
        <AboutContent>
          <ol>
            <li>
              <p>
                <strong>Recreation</strong>: build a virtual world better than
                the real one. Program games or multimedia experiences.
              </p>
            </li>
            <li>
              <p>
                <strong>Hype Tech</strong>: use the latest in cutting-edge
                technologies to create a cool application. Use blockchain or
                machine learning.
              </p>
            </li>
            <li>
              <p>
                <strong>Real World</strong>: use technology to affect the real
                world! E.g. medicine or globalization.
              </p>
            </li>
          </ol>
        </AboutContent>
      </About>
      <BlueSection offset={2}>
        <Title>Important Info</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="October 2019"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            Exact date will be determined
          </ProjectCard>
          <ProjectCard
            title="Boston Area"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            Exact location to be determined
          </ProjectCard>
          <ProjectCard
            title=">150 Hackers"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            Live headcount will be posted
          </ProjectCard>
          <ProjectCard
            title="$X of Prizes"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            Prizes willl be posted
          </ProjectCard>
        </ProjectsWrapper>
      </BlueSection>
      <FAQ offset={4}>
        <Title>FAQ</Title>
        <FAQContent>
          <Collapsible
            trigger="What is a Hackathon?"
            className="faq"
            openedClassName="faqOpen"
            contentOuterClassName="faqOuter"
            contentInnerClassName="faqInner"
          >
            <p className="faqGradientText">
              A hackathon is a 24-48 hour long event where teams of people come
              together to design and build something involving a novel use of
              technology, usually centered around some theme.
            </p>
          </Collapsible>
          <Collapsible
            trigger="Who should come to Hack3?"
            className="faq"
            openedClassName="faqOpen"
            contentOuterClassName="faqOuter"
            contentInnerClassName="faqInner"
          >
            <p className="faqGradientText">
              High school students with an interest in technology or
              programming.
            </p>
          </Collapsible>
          <Collapsible
            trigger="What should I bring?"
            className="faq"
            openedClassName="faqOpen"
            contentOuterClassName="faqOuter"
            contentInnerClassName="faqInner"
          >
            <p className="faqGradientText">
              Your laptop, charger and a sleeping bag. We'll provide everything
              else!
            </p>
          </Collapsible>
          <Collapsible
            trigger="Is there a place to sleep/eat?"
            className="faq"
            openedClassName="faqOpen"
            contentOuterClassName="faqOuter"
            contentInnerClassName="faqInner"
          >
            <p className="faqGradientText">
              There will be a separate room for sleeping, and meals for the
              weekend (including snacks and drinks) will be provided free of
              charge!
            </p>
          </Collapsible>
          <Collapsible
            trigger="How much experience do I need?"
            className="faq"
            openedClassName="faqOpen"
            contentOuterClassName="faqOuter"
            contentInnerClassName="faqInner"
          >
            <p className="faqGradientText">
              No experience is needed! Anyone with an interest in the field can
              come and participate.
            </p>
          </Collapsible>
          <Collapsible
            trigger="How do I form a team?"
            className="faq"
            openedClassName="faqOpen"
            contentOuterClassName="faqOuter"
            contentInnerClassName="faqInner"
          >
            <p className="faqGradientText">
              We encourage you to form a team prior to the event itself.
              However, it is possible to find a team at the event or even take
              on the challenge on your own.
            </p>
          </Collapsible>
          <Collapsible
            trigger="How many people can be in a team?"
            className="faq"
            openedClassName="faqOpen"
            contentOuterClassName="faqOuter"
            contentInnerClassName="faqInner"
          >
            <p className="faqGradientText">4.</p>
          </Collapsible>
          <Collapsible
            trigger="Are there prizes?"
            className="faq"
            openedClassName="faqOpen"
            contentOuterClassName="faqOuter"
            contentInnerClassName="faqInner"
          >
            <p className="faqGradientText">
              Yes! There are prizes for first, second and third place for each
              of the three tracks, but you can only participate in one track.
            </p>
          </Collapsible>
          <Collapsible
            trigger="How is the winner determined?"
            className="faq"
            openedClassName="faqOpen"
            contentOuterClassName="faqOuter"
            contentInnerClassName="faqInner"
          >
            <p className="faqGradientText">
              You will present your final product to a panel of judges who will
              determine winners based on creativity, how technically challenging
              it was to create, and how much it fits the theme.
            </p>
          </Collapsible>
        </FAQContent>
      </FAQ>
      <OurTeam offset={5} />
      <Contact offset={7}>
        <Inner>
          <Title>Contact</Title>
          <ContactContent>
            <p>
              Got questions? Say <a href="mailto:head@hack3.co">hi via email</a>
              .
            </p>

            <p>
              Also remember to join our{" "}
              <a href="https://discord.gg/jcvTJpn">Discord server</a>!
            </p>
          </ContactContent>
        </Inner>
        <Footer>&copy; 2019 Hack3 Team</Footer>
      </Contact>
    </Parallax>
  </>
);

export default Index;
