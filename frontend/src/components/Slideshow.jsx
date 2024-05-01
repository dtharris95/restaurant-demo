// import React from 'react'
// import './Slideshow.css'
// import 'react-slideshow-image/dist/styles.css'
// import { Slide } from 'react-slideshow-image'
// import 'bootstrap/dist/css/bootstrap.min.css'

// const Slideshow = () => {
//   const images = [
//     'https://live.staticflickr.com/1536/23630605473_50a2aab42c_b.jpg',
//     'https://live.staticflickr.com/8810/28933246666_a7e9cec7c8_b.jpg',
//     'https://live.staticflickr.com/3712/12237257276_65ff7c7c86_b.jpg',
//   ];

//   return (
//     <Slide>
//       <div className='each-slide-effect'>
//         <div style={{ 'backgroundImage': `url(${images[0]})` }}>
//           {/* <span>Slide 1</span> */}
//         </div>
//       </div>
//       <div className='each-slide-effect'>
//         <div style={{ 'backgroundImage': `url(${images[1]})` }}>
//           {/* <span>Slide 2</span> */}
//         </div>
//       </div>
//       <div className='each-slide-effect'>
//         <div style={{ 'backgroundImage': `url(${images[2]})` }}>
//           {/* <span>Slide 3</span> */}
//         </div>
//       </div>
//     </Slide>
//   );
// };

// export default Slideshow

import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
