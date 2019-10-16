import {debounce} from "./utils"
import BackTop from "components/content/backTop/BackTop"

export const itemListenerMixin = {
  mounted(){
    const refresh = debounce(this.$refs.scroll.refresh, 100)
    this.itemImgListener = () => {
      refresh()
    }
    this.$bus.$on("itemImageLoad", this.itemImgListener)
  }
}

export const backTopMixin = {
  data(){
    return{
      isShow: false
    }
  },
  components:{
    BackTop
  },
  methods:{
    backClick(){
      this.$refs.scroll.scrollTo(0, 0, 500)
    }
  }
}