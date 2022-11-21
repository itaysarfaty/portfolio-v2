import styled from "styled-components";
import { useState } from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md/index.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";

import { Container } from "../common/Container.mjs";
import { ProjectCard } from "./ProjectCard.mjs";
import { Box } from "../common/Box.mjs";
import { Button } from "../common/Button.mjs";
import { smScreen } from "../../themes/theme.mjs";
import { myProjects } from "../../common/content.mjs";

export const Projects = () => {
  const [my_swiper, set_my_swiper] = useState({});
  const [slideState, setSlideState] = useState(0);

  const nextSlide = () => {
    my_swiper.slideNext();
  };

  const prevSlide = () => {
    my_swiper.slidePrev();
  };

  return (
    <Wrapper>
      <Container>
        <Box className="swiper-controller">
          <div className="swiper-controller-content">
            <h1>Projects</h1>
            <p id="swipe-text">Swipe</p>
            <div className="swiper-controller-controls">
              <Button
                className="control-btn"
                onClick={prevSlide}
                disabled={slideState === 0}
              >
                <MdArrowBack style={arrowStyle} />
              </Button>
              <Button
                className="control-btn"
                onClick={nextSlide}
                disabled={slideState === myProjects.length - 1}
              >
                <MdArrowForward style={arrowStyle} />
              </Button>
            </div>
          </div>
        </Box>
        <div className="swiper-card-outline">
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={50}
            slidesPerView={1}
            cssMode={true}
            loop={false}
            onSlideChange={() => setSlideState(my_swiper.activeIndex)}
            onInit={(ev) => {
              set_my_swiper(ev);
            }}
          >
            {myProjects.map((project, i) => (
              <SwiperSlide key={i}>
                <ProjectCard
                  title={project.title}
                  tags={project.tags}
                  action={project.action}
                />
              </SwiperSlide>
            ))}
          </Swiper>
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

  .swiper-card-outline {
    border: var(--light-border);
    border-top: none;
    border-radius: 0 0 15px 15px;
  }

  .swiper-controller {
    border-radius: 15px 15px 0 0;
    background-color: ${({ theme }) => theme.secondaryColor};
    border: ${({ theme }) => theme.darkBorder};
  }

  .swiper-controller-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  .swiper-controller-controls {
    display: none;

    gap: 15px;
  }

  #swipe-text {
    font-weight: 200;
  }

  .control-btn {
    height: var(--btn-size);
    width: var(--btn-size);
    display: grid;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 360px) {
    .swiper-controller-content {
      flex-direction: column;
      gap: 20px;
    }
  }

  @media (min-width: ${smScreen}) {
    .swiper-controller {
      padding-left: 50px;
      padding-right: 58px;
    }

    .swiper-controller-controls {
      display: flex;
    }
    #swipe-text {
      display: none;
    }
  }
`;
