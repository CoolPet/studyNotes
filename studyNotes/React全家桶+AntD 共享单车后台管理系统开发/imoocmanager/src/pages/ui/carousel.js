import React from "react"
import { 
  Card,
  Carousel
} from "antd"
import "./index.less"

class Carousels extends React.Component{
  state = {
    fontCarousel: [
      "Ant Motion Banner - Vue",
      "Ant Motion Banner - React",
      "Ant Motion Banner - Angular"
    ],
    imgCarousel: [
      "./assets/carousel-img/carousel-1.jpg",
      "./assets/carousel-img/carousel-2.jpg",
      "./assets/carousel-img/carousel-3.jpg"
    ]
  }

  render(){
    const { fontCarousel, imgCarousel } = this.state
    return(
      <div>
        <Card title="文字背景轮播">
          <Carousel autoplay>
            {
              fontCarousel.map((item, index) => (
                <div key={index}>
                  <h3>{item}</h3>
                </div>
              ))
            }
          </Carousel>
        </Card>
        <Card title="图片轮播">
          <Carousel autoplay className="img">
            {
              imgCarousel.map((item, index) => (
                <div key={index}>
                  <img src={item} alt=""/>
                </div>
              ))
            }
          </Carousel>
        </Card>
      </div>
    )
  }
}

export default Carousels