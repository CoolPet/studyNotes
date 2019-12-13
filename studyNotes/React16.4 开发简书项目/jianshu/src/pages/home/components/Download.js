import React,{ PureComponent } from "react"
import {
  Download,
  DownloadInfo,
  DownloadTitle,
  DownloadDesc,
  DownloadCode
} from "../style"
import { connect } from "react-redux"
import { showQrcode, hiddenQrcode } from "../store"

class Writer extends PureComponent{
  render(){
    const { mouseEnter, mouseLeave } = this.props
    return(
      <Download 
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        <img className="qrcode" src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt=""/>
        <DownloadInfo>
          <DownloadTitle>下载简书手机App></DownloadTitle>
          <DownloadDesc>随时随地发现和创作内容</DownloadDesc>
        </DownloadInfo>
        {
          this.showQRcode()
        }
      </Download>
    )
  }

  showQRcode(){
    const { QRcode } = this.props
    if (QRcode) {
      return(
        <DownloadCode>
          <img className="qrcode" src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt=""/>
          <span className="triangle"></span>
        </DownloadCode>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return{
    QRcode: state.getIn(["home", "QRcode"])
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    mouseEnter(){
      dispatch(showQrcode())
    },
    mouseLeave(){
      dispatch(hiddenQrcode())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Writer)