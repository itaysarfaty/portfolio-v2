// Import Swiper React components
import styled from "styled-components";
import { useState } from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md/index.js";

import { Container } from "../common/Container.mjs";
import { ProjectCard } from "./ProjectCard.mjs";
import { Box } from "../common/Box.mjs";
import { Button } from "../common/Button.mjs";
import { smScreen } from "../../themes/theme.mjs";
import { myProjects } from "../../Content.mjs";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";

export const Projects = () => {
  const [my_swiper, set_my_swiper] = useState({});

  return (
    <Wrapper>
      <Container>
        <div className="gallery">
          <Box className="swiper-controller">
            <div className="controller-content">
              <h1>Projects</h1>
              <p id="swipe-text">Swipe</p>
              <div className="controls">
                <Button
                  className="slide-btn"
                  onClick={() => my_swiper.slidePrev()}
                >
                  <MdArrowBack style={arrowStyle} />
                </Button>
                <Button
                  className="slide-btn"
                  onClick={() => my_swiper.slideNext()}
                >
                  <MdArrowForward style={arrowStyle} />
                </Button>
              </div>
            </div>
          </Box>
          <div className="swiper-pads">
            <Swiper
              modules={[Navigation]}
              navigation
              slideToClickedSlide={true}
              spaceBetween={15}
              slidesPerView={1}
              onSwiper={(swiper) => console.log(swiper)}
              loop={true}
              onInit={(ev) => {
                set_my_swiper(ev);
              }}
            >
              {myProjects.map((project) => (
                <SwiperSlide>
                  <ProjectCard
                    title={project.title}
                    type={project.type}
                    action={project.action}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

const arrowStyle = { fontSize: "1.2em" };
const Wrapper = styled.div`
  margin-top: 50px;
  overflow: hidden;

  --btn-size: 50px;
  --light-border: ${({ theme }) => theme.lightBorder};

  .swiper-pads {
    border: var(--light-border);
    border-top: none;
    border-radius: 0 0 15px 15px;
  }
  .gallery {
    max-width: 100%;
  }

  .swiper-controller {
    border-radius: 15px 15px 0 0;
    background-color: ${({ theme }) => theme.secondaryColor};
    border: ${({ theme }) => theme.darkBorder};
  }

  .controller-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .controls {
    display: none;

    gap: 15px;
  }

  #swipe-text {
    font-weight: 200;
  }

  .slide-btn {
    height: var(--btn-size);
    width: var(--btn-size);
    display: grid;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 360px) {
    .controller-content {
      flex-direction: column;
      gap: 20px;
    }
  }

  @media (min-width: ${smScreen}) {
    .gallery {
      flex-direction: column-reverse;
    }
    .swiper-controller {
      padding-left: 50px;
      padding-right: 58px;
    }

    .controls {
      display: flex;
    }
    #swipe-text {
      display: none;
    }
  }
`;
