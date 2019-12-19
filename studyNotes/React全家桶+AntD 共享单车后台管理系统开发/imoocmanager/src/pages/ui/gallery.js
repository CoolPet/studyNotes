import React from "react"
import { 
  Card, 
  Row, 
  Col,
  Modal
} from "antd"
import "./index.less"

const { Meta } = Card
class Gallery extends React.Component{
  state = {
    visible: false,
    currentImg: "",
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
    const { galleryImg, visible, currentImg } = this.state
    return(
      <div>
        <Row gutter={10}>
          <Col span={5}>
            {
              galleryImg[0].map((item, index) => (
                  <Card 
                    cover={
                      <img alt="example" src={item}
                        onClick={() => this.openGallery(item)}
                      />
                    }
                    key={index}
                  >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                  </Card>
              ))
            }
          </Col>
          <Col span={5}>
            {
              galleryImg[1].map((item, index) => (
                  <Card 
                    cover={
                      <img alt="example" src={item}
                        onClick={() => this.openGallery(item)}
                      />
                    }
                    key={index}
                  >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                  </Card>
              ))
            }
          </Col>
          <Col span={5}>
            {
              galleryImg[2].map((item, index) => (
                  <Card 
                    cover={
                      <img alt="example" src={item}
                        onClick={() => this.openGallery(item)}
                      />}
                    key={index}
                  >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                  </Card>
              ))
            }
          </Col>
          <Col span={5}>
            {
              galleryImg[3].map((item, index) => (
                  <Card 
                    cover={
                      <img alt="example" src={item}
                        onClick={() => this.openGallery(item)}
                      />}
                    key={index}
                  >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                  </Card>
              ))
            }
          </Col>
          <Col span={4}>
            {
              galleryImg[4].map((item, index) => (
                  <Card 
                    cover={
                      <img alt="example" src={item}
                        onClick={() => this.openGallery(item)}
                      />}
                    key={index}
                  >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                  </Card>
              ))
            }
          </Col>
        </Row>
        <Modal
          visible={visible}
          title="图片画廊"
          onCancel={this.handleCancel}
          footer={null}
          width={300}
        >
          <img src={currentImg} alt="" style={{width: "100%"}}/>
        </Modal>
      </div>
    )
  }

  openGallery = (imgSrc) => {
    this.setState({
      visible: true,
      currentImg: imgSrc
    })
  }

  handleCancel = () => {
    this.setState({
      visible: false
    })
  }
}

export default Gallery