import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;

      &:before {
        opacity: 1;
      }

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: grayscale(100%) contrast(1);
        mix-blend-mode: multiply;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: normal;
      filter: none;
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
      opacity: 0;
      transition: var(--transition);
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(sourceInstanceName: { eq: "images" }, relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, traceSVG: { color: "#64ffda" }) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['Linux', 'Ansible', 'Bash', 'Python', 'JavaScript', 'Java'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hi, I’m{' '}
              <a href="https://sonuimages.vercel.app/" target="_blank" rel="noopener noreferrer">
                Sonu Kumar Kushwaha
              </a>
              , a Linux System Administrator at{' '}
              <a
                href="https://singlebucks.blogspot.com/2024/01/wipro.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wipro Technologies
              </a>{' '}
              from Gopalganj, Bihar, India.
            </p>

            <p>
              I hold a{' '}
              <a
                href="https://singlebucks.blogspot.com/p/bits-pilani.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Master of Technology
              </a>{' '}
              in Computing Systems and Infrastructure from{' '}
              <a
                href="https://singlebucks.blogspot.com/2023/06/education.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                BITS Pilani
              </a>
              , with an 8.3 CGPA
            </p>

            <p>
              I completed my{' '}
              <a
                href="https://singlebucks.blogspot.com/2023/07/bachelors-degree-in-computer-application.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bachelor of Computer Applications
              </a>{' '}
              from L. N. Mishra Institute, Patna, affiliated with Aryabhatta Knowledge University,
              with 79%
            </p>

            <p>
              I also completed a{' '}
              <a
                href="https://singlebucks.blogspot.com/2023/06/education.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Diploma in Computer Applications
              </a>{' '}
              with 81%
            </p>

            <p>
              I completed my Higher Secondary education at{' '}
              <a
                href="https://singlebucks.blogspot.com/p/ips_28.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Imperial Public School, Hathwa
              </a>
              , under the CBSE board, securing 85% in Class 12 and a 10 CGPA in Class 10.
            </p>

            <p>
              During school, I served as{' '}
              <a
                href="https://singlebucks.blogspot.com/p/ips_28.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                School Captain
              </a>{' '}
              for more than a year.
            </p>

            <p>
              I build technical projects, share them on my{' '}
              <a
                href="https://github.com/iamsonukushwaha"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              , write about my work on my{' '}
              <a href="https://singlebucks.blogspot.com" target="_blank" rel="noopener noreferrer">
                blog website
              </a>
              , and you can view my{' '}
              <a href="https://sonuimages.vercel.app/" target="_blank" rel="noopener noreferrer">
                photos here
              </a>
              .
            </p>

            <p>
              Connect with me on{' '}
              <a
                href="https://www.linkedin.com/in/sonukumarkushwaha"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              , or view my{' '}
              <a
                href="https://iamsonukushwaha.github.io/resume/"
                target="_blank"
                rel="noopener noreferrer"
              >
                resume here
              </a>
              .
            </p>

            <p>That's me, today. I'll be different tomorrow, hopefully better.</p>

            <p>Here are a few technologies I've been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <Img
              fluid={data.avatar.childImageSharp.fluid}
              alt="Sonu Kumar Kushwaha"
              className="img"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
