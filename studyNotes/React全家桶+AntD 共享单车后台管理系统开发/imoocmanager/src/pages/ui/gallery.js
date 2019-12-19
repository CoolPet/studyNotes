import React from "react"
import { 
  Card, 
  Row, 
  Col 
} from "antd"
import "./index.less"

const { Meta } = Card
class Gallery extends React.Component{
  state = {
    galleryImg: [
      [
        "/assets/gallery/1.png",
        "/assets/gallery/2.png",
        "/assets/gallery/3.png",
        "/assets/gallery/4.png",
        "/assets/gallery/5.png"
      ],
      [
        "/assets/gallery/6.png",
        "/assets/gallery/7.png",
        "/assets/gallery/8.png",
        "/assets/gallery/9.png",
        "/assets/gallery/10.png"
      ],
      [
        "/assets/gallery/11.png",
        "/assets/gallery/12.png",
        "/assets/gallery/13.png",
        "/assets/gallery/14.png",
        "/assets/gallery/15.png"
      ],
      [
        "/assets/gallery/16.png",
        "/assets/gallery/17.png",
        "/assets/gallery/18.png",
        "/assets/gallery/19.png",
        "/assets/gallery/20.png"
      ],
      [
        "/assets/gallery/21.png",
        "/assets/gallery/22.png",
        "/assets/gallery/23.png",
        "/assets/gallery/24.png",
        "/assets/gallery/25.png"
      ]
    ]
  }

  render(){
    const { galleryImg } = this.state
    return(
      <Row>
        <Col span={5} className="col-padding">
          {
            galleryImg[0].map((item, index) => (
                <Card 
                  cover={<img alt="example" src={item}/>}
                  key={index}
                >
                  <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
            ))
          }
        </Col>
        <Col span={5} className="col-padding">
          {
            galleryImg[1].map((item, index) => (
                <Card 
                  cover={<img alt="example" src={item}/>}
                  key={index}
                >
                  <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
            ))
          }
        </Col>
        <Col span={5} className="col-padding">
          {
            galleryImg[2].map((item, index) => (
                <Card 
                  cover={<img alt="example" src={item}/>}
                  key={index}
                >
                  <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
            ))
          }
        </Col>
        <Col span={5} className="col-padding">
          {
            galleryImg[3].map((item, index) => (
                <Card 
                  cover={<img alt="example" src={item}/>}
                  key={index}
                >
                  <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
            ))
          }
        </Col>
        <Col span={4} className="col-padding">
          {
            galleryImg[4].map((item, index) => (
                <Card 
                  cover={<img alt="example" src={item}/>}
                  key={index}
                >
                  <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
            ))
          }
        </Col>
      </Row>
    )
  }
}

export default Gallery