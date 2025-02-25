import React, { memo, useRef } from "react";
import data from "../../../../assets/data/testimonial.json";
import bgImg from "../../../../assets/images/steps/bgImg.webp";
import { ArrowLeft, ArrowRight } from "phosphor-react";

//  changes for swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import type { Swiper as SwiperInstance } from "swiper";

import "swiper/css";

import { MDBCard, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";

interface TestimonialProps {
  isBg: string;
}

const TestimonialsDataArray = [
  {
    image: "",
    description:
      "I got my LLP registered through RegisterKaro. Really an amazaing team to work along. Thanks a lot to Bhuvan, Sidharath and Gaurav who were happy to help with anything. Special thanks to Bhuvan for his patience in correcting the LLp agreement multiple times wihout hesitation.",
    name: "Vijayendra Mudigal",
  },
  {
    image: "",
    description:
      "I got my LLP registered through RegisterKaro. Really an amazaing team to work along. Thanks a lot to Bhuvan, Sidharath and Gaurav who were happy to help with anything. Special thanks to Bhuvan for his patience in correcting the LLp agreement multiple times wihout hesitation.",
    name: "Vijayendra Mudigal",
  },
  {
    image: "",
    description:
      "I got my LLP registered through RegisterKaro. Really an amazaing team to work along. Thanks a lot to Bhuvan, Sidharath and Gaurav who were happy to help with anything. Special thanks to Bhuvan for his patience in correcting the LLp agreement multiple times wihout hesitation.",
    name: "Vijayendra Mudigal",
  },
  {
    image: "",
    description:
      "I got my LLP registered through RegisterKaro. Really an amazaing team to work along. Thanks a lot to Bhuvan, Sidharath and Gaurav who were happy to help with anything. Special thanks to Bhuvan for his patience in correcting the LLp agreement multiple times wihout hesitation.",
    name: "Vijayendra Mudigal",
  },
];

const TestimonialBlogComponent = ({ image, description, name, key }: any) => {
  return (
    <MDBCard className="testimonial-card">
      <MDBCardBody className="testimonial-card-body">
        <div className="testimonial-card-image-container">
          <MDBCardImage
            src="https://media.gettyimages.com/id/1303539316/photo/one-beautiful-woman-looking-at-the-camera-in-profile.jpg?s=612x612&w=0&k=20&c=zzAlaDFbbaVuRG3he04Jk7ul7uRcgZMWU65yRfImA94="
            position="top"
            alt="..."
            className="testimonial-card-image"
            draggable={false}
          />
        </div>
        <div className="testimonial-card-content">
          <MDBCardImage
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
            position="top"
            alt="google_logo"
            className="google-logo-image"
            draggable={false}
          />
          <span>{description}</span>
          <h4>{name}</h4>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
};

const Testimonial: React.FC<TestimonialProps> = ({ isBg }) => {
  const sliderRef = useRef<SwiperInstance | null>(null);

  // const handleMove = (direction: string, ref: any) => {
  //   if (ref.current) {
  //     const cardElement = ref.current.querySelector(".blog-container");
  //     const cardWidth = cardElement?.clientWidth || 779;
  //     const gap = 30;
  //     const padding = 10;

  //     const scrollOffset = cardWidth + gap;

  //     const currentScrollPosition = ref.current.scrollLeft;

  //     if (direction === "left") {
  //       const newScrollPosition = Math.max(
  //         currentScrollPosition - scrollOffset,
  //         0
  //       );
  //       ref.current.scrollTo({
  //         left: newScrollPosition,
  //         behavior: "smooth",
  //       });
  //     } else if (direction === "right") {
  //       const visibleSpace = ref.current.clientWidth - padding * 2;
  //       const maxScroll = ref.current.scrollWidth - visibleSpace;
  //       const newScrollPosition = Math.min(
  //         currentScrollPosition + scrollOffset,
  //         maxScroll
  //       );
  //       ref.current.scrollTo({
  //         left: newScrollPosition,
  //         behavior: "smooth",
  //       });
  //     }
  //   }
  // };

  const handleMove = (direction: string) => {
    if (direction === "left") {
      sliderRef.current?.swiper.slidePrev();
    } else {
      sliderRef.current?.swiper.slideNext();
    }
  };

  const { testimonial } = data;
  const { description, review } = testimonial;
  const bgImage = {
    backgroundImage: `url(${bgImg.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "5500",
    width: "8000",
  };

  return (
    <section style={bgImage} className="testimonial-section">
      <div className="main-testimonial-plcr">
        <div className="section-testimonial-title-left">
          <p className="titleFirm">RegisterKaro</p>
          <h2 className="titleClient">What Our Clients Say</h2>
          <p className="titleDescription">{description}</p>
          <div className="title-arrow-left">
            <span onClick={() => handleMove("left")}>
              <ArrowLeft />
            </span>
            <span onClick={() => handleMove("right")}>
              <ArrowRight />
            </span>
          </div>
        </div>
        <div className="section-testimonial-title-right">
          <Swiper
            ref={sliderRef}
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={false}
          >
            {TestimonialsDataArray.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialBlogComponent {...testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="absolute-color-gradient"></div>
      <div className="absolute-color-red-gradient"></div>
    </section>
  );
};

export default memo(Testimonial);
