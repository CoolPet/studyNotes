import styled from "styled-components"

export const LoginWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  background: #f1f1f1;
  z-index: 10;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LoginLogo = styled.div`
  position: fixed;
  top: 56px;
  left: 0;
  margin-left: 50px;
  img{
    display: block;
    width: 100px;
  }
`

export const LoginBox = styled.div`
  width: 400px;
  margin: 60px auto 0;
  padding: 50px 50px 30px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
  box-sizing: border-box;
`

export const LoginTitle = styled.div`
  margin: 0 auto 40px;
  padding: 10px;
  font-weight: 400;
  color: #969696;
  font-size: 18px;
  box-sizing: border-box;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`

export const LoginTitleDesc = styled.div`
  padding: 10px;
  margin-right: 5px;
  color: #969696;
  &.active{
    font-weight: 700;
    color: #ea6f5a;
    border-bottom: 2px solid #ea6f5a;
  }
  &:last-child{
    margin-right: 0
  }
  b{
    font-weight: 700;
  }
`

export const LoginBizing = styled.div`
  position: relative;
  width: 100%;
  .icon{
    position: absolute;
    font-size: 18px;
    color: #969696;
    left: 10px;
    top: 14px;
  }
`

export const LoginInput = styled.input`
  display: block;
  width: 100%;
  height: 50px;
  padding: 4px 12px 4px 35px;
  border: 1px solid #c8c8c8;
  border-radius: 0 0 4px 4px;
  background-color: hsla(0,0%,71%,.1);
  box-sizing: border-box;
  outline: none
  &.user{
    border-bottom: none;
    border-radius: 4px 4px 0 0;
  }
`

export const LoginBtn = styled.div`
  background: #3194d0;
  margin-top: 35px;
  width: 100%;
  padding: 9px 18px;
  line-height: 25px;
  font-size: 18px;
  border: none;
  border-radius: 25px;
  color: #fff;
  cursor: pointer;
  outline: none;
  display: block;
  box-sizing: border-box;
`

export const SignInBtn = styled.div`
  background: #42c02e;
  margin-top: 35px;
  width: 100%;
  padding: 9px 18px;
  line-height: 25px;
  font-size: 18px;
  border: none;
  border-radius: 25px;
  color: #fff;
  cursor: pointer;
  outline: none;
  display: block;
  box-sizing: border-box;
`