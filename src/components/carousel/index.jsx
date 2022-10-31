import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";

function ReactCarousel() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: "center",
            background: "black",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: "center",
            background: "black",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 2,
            itemsToScroll: 2,
            minWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        <div className="bg-white border w-96 h-96 p-4 m-4">
          <div className="pt-12">
            <h1 className="text-2xl font-bold">Tashkent</h1>
            <p>
              755 Commerce Dr. Suite 600 Decatur, GA 30030 Phone: 800.572.2665
            </p>
          </div>
        </div>
        <div className="bg-white border w-96 h-96 p-4 m-4">
          <div className="pt-12">
            <h1 className="text-2xl font-bold">Tashkent</h1>
            <p>
              755 Commerce Dr. Suite 600 Decatur, GA 30030 Phone: 800.572.2665
            </p>
          </div>
        </div>
        <div className="bg-white border w-96 h-96 p-4 m-4">
          <div className="pt-12">
            <h1 className="text-2xl font-bold">Tashkent</h1>
            <p>
              755 Commerce Dr. Suite 600 Decatur, GA 30030 Phone: 800.572.2665
            </p>
          </div>
        </div>
        <div className="bg-white border w-96 h-96 p-4 m-4">
          <div className="pt-12">
            <h1 className="text-2xl font-bold">Tashkent</h1>
            <p>
              755 Commerce Dr. Suite 600 Decatur, GA 30030 Phone: 800.572.2665
            </p>
          </div>
        </div>
      </ReactSimplyCarousel>
    </div>
  );
}

export default ReactCarousel;
