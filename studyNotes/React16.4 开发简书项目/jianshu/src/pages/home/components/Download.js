import React,{ Component } from "react"
import {
  Download,
  DownloadInfo,
  DownloadTitle,
  DownloadDesc,
  DownloadCode
} from "../style"
import { connect } from "react-redux"

class Writer extends Component{
  render(){
    return(
      <Download>
        <img className="qrcode" src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt=""/>
        <DownloadInfo>
          <DownloadTitle>下载简书手机App></DownloadTitle>
          <DownloadDesc>随时随地发现和创作内容</DownloadDesc>
        </DownloadInfo>
        <DownloadCode>
          <img className="qrcode" src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt=""/>
        </DownloadCode>
        {
          this.showQRcode()
        }
      </Download>
    )
  }

  showQRcode(){
    const { QRcode } = this.props
    console.log(QRcode)
  }
}

const mapStateToProps = (state) => {
  return{
    QRcode: state.getIn(["home", "QRcode"])
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Writer)