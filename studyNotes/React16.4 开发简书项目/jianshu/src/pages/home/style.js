import styled from "styled-components"

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
`

export const HomeLeft = styled.div`
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  .banner-img{
    width: 625px;
    height: 270px;
  }
`

export const HomeRight = styled.div`
  padding-top: 30px;  
  width: 280px;
`

export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = styled.div`
  background: #f7f7f7;
  height: 32px;
  font-size: 14px;
  padding-right: 10px;
  margin-bottom: 18px;
  margin-left: 18px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  display: flex;
  align-items: center;
  .topic-pic{
    width: 32px;
    height: 32px;
    display: block;
    margin-right: 10px;
  }
`

export const TopicItemMore = styled.div`
  font-size: 12px;
  color: #969696;
  height: 32px;
  line-height: 32px;
  margin-left: 18px;
  margin-bottom: 18px;
  cursor: pointer;
`

export const ListItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .pic{
    width: 150px;
    height: 100px;
    display: block;
    border-radius: 10px;
    cursor: pointer;
  }
`

export const ListDiscuss = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  color: #d4d4d4;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  .iconfont{
    font-size: 14px;
  }
`

export const ListDiscussItem = styled.div`
  margin-right: 10px;
  display: flex;
    align-items: center;
  &.jewel{
    color: #ea6f5a;
  }
`

export const ListInfo = styled.div`
  width: 458px;
  .title{
    font-size: 18px;
    line-height: 1.5;
    font-weight: bold;
    color: #333;
    margin: -7px 0 4px;
    cursor: pointer;
  }
  .desc{
    font-size: 13px;
    line-height: 24px;
    color: #999;
    margin-bottom: 8px;
  }
`

export const LoadMore = styled.div`
  width: 100%;
  border-radius: 20px;
  background-color: #9b9b9b;
  margin: 30px auto;
  padding: 10px 15px;
  text-align: center;
  font-size: 15px;
  line-height: 22px;
  color: #fff;
  box-sizing: border-box;
  cursor: pointer;
`

export const RecommendInfo = styled.div`
  width: 100%;
  margin-top: -4px;
  padding-bottom: 4px;
`

export const RecommendInfoItem = styled.a`
  cursor: pointer;
  text-decoration: none;
  .recommend-pic{
    width: 100%;
    min-height: 50px;
    margin-bottom: 6px;
    border-radius: 4px;
  }
`

export const Download = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  padding: 10px 0;
  width: 100%;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background-color: #fff;
  cursor: pointer;
  box-sizing: border-box;
  position: relative;
  .qrcode{
    width: 60px;
    height: 60px;
    opacity: .85;
    display: block;
  }
`

export const DownloadInfo = styled.div`
  margin-left: 14px;
`

export const DownloadTitle = styled.div`
  font-size: 15px;
  color: #333;
`

export const DownloadDesc = styled.div`
  margin-top: 4px;
  font-size: 13px;
  color: #999;
`

export const DownloadCode = styled.div`
  position: absolute;
  height: 150px;
  width: 150px;
  top: -185px;
  padding: 10px;
  background: #fff;
  border: 1px solid #777;
  .qrcode{
    width: 150px;
    height: 150px;
    opacity: .85;
    display: block;
  }
`

export const WriterInfo = styled.div`
  width: 100%;
`

export const WriterTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  div{
    font-size: 14px;
    color: #969696;
  }
  .batch{
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .spin{
    display: block;
    float: left;
    font-size: 12px;
    margin-right: 2px;
    transition: all .4s ease-in;
    transform-origin: center center;
  }
`

export const WriterItem = styled.div`
  margin-top: 15px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`

export const WriterPic = styled.img.attrs({
  alt: ""
})`
  display: block;
  width: 48px;
  height: 48px;
  border: 1px solid #ddd;
  border-radius: 50%;
  margin-right: 10px;
`

export const WriterItemRight = styled.div`
  flex: 1
`

export const WriterItemTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const WriterItemBottom = styled.span`
  margin-top: 5px;
  font-size: 12px;
  color: #969696;
  display: block;
`

export const WriterItemTopLeft = styled.div`
  font-size: 14px;
  line-height: 20px;
`

export const WriterItemTopRight = styled.div`
  font-size: 13px;
  color: #42c02e;
  cursor: pointer;
`

export const WriterAll = styled.div`
  padding: 7px 7px 7px 12px;
  width: 100%;
  font-size: 13px;
  color: #787878;
  background-color: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  line-height: 19px;
  margin-top: 20px;
`

export const BackTop = styled.div`
  position: fixed;
  right: 40px;
  bottom: 40px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #dcdcdc;
  background-color: #fff;
  .iconfont{
    font-size: 20px;
  }
`

export const ShowHint = styled.div`
  position: absolute;
  left: -75px;
  width: 60px;
  font-size: 14px;
  padding: 5px;
  background: #333;
  color: #fff;
  border-radius: 6px;
  text-align: center;
`