import styled from "styled-components"

export const DetailBox = styled.div`
  padding-top: 10px;
`

export const DetailWrapper = styled.div`
  overflow: hidden;
  width: 730px;
  margin: auto;
  background: #fff;
  padding: 24px;
  box-sizing: border-box;
`

export const Header = styled.div`
  font-size: 30px;
  line-height: 42px;
  color: #333;
  font-weight: bold;
  margin-bottom: 15px;
`

export const Content = styled.div`
  color: #2f2f2f;
  img{
    max-width: 100%;
    display: block;
    margin-bottom: 25px;
  }
  p{
    margin-bottom: 20px;
    font-weight: 400;
    font-size: 16px;
    min-height: 28px;
    line-height: 28px;
  }
  b{
    font-weight: bold;
  }
`