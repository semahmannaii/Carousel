import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs"
import { data } from "./data";

function App() {
  const left = () => {
    const carousel = document.getElementById("carousel")!
    carousel.scrollLeft = carousel.scrollLeft - 500
  }

  const right = () => {
    const carousel = document.getElementById("carousel")!
    carousel.scrollLeft = carousel.scrollLeft + 500
  }

  return (
    <div className="flex relative items-center">
      <BsArrowLeftSquareFill onClick={left} className="opacity-50 hover:opacity-100 cursor-pointer" size={40} />
      <div id="carousel" className="w-full h-full overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide ">
        {data.map((cover) => (
          <img key={cover.id} src={cover.imgUrl} alt="" className="w-[400px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" />
        ))}
      </div>
      <BsArrowRightSquareFill onClick={right} className="opacity-50 hover:opacity-100 cursor-pointer" size={40} />
    </div>
  );
}

export default App;
