export default {
  formateDate(time){
    if(!time) return ""
    let date = new Date(time)
    let obj = {
      Y: date.getFullYear(),
      M: date.getMonth() + 1,
      D: date.getDate(),
      H: date.getHours(),
      Mi: date.getMinutes(),
      S: date.getSeconds()
    }
    let strTime = obj.Y + '-' + this.supplement(obj.M) + '-' + this.supplement(obj.D) + " " + this.supplement(obj.H) + ':' + this.supplement(obj.Mi) + ':' + this.supplement(obj.S)
    return strTime
  },
  // 位数不足两位的补全 0
  supplement(nn){
    return nn = nn < 10 ? '0' + nn : nn;
  } 
}