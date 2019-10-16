<template>
  <div class="wrapper">
    <ul class="content">
      <input type="button" value="点击" @click="btnClick">
      <li>这是1</li>
      <li>这是2</li>
      <li>这是3</li>
      <li>这是4</li>
      <li>这是5</li>
      <li>这是6</li>
      <li>这是7</li>
      <li>这是8</li>
      <li>这是9</li>
      <li>这是10</li>
      <li>这是11</li>
      <li>这是12</li>
      <li>这是13</li>
      <li>这是14</li>
      <li>这是15</li>
      <li>这是16</li>
      <li>这是17</li>
      <li>这是18</li>
      <li>这是19</li>
      <li>这是20</li>
      <li>这是21</li>
      <li>这是22</li>
      <li>这是23</li>
      <li>这是24</li>
      <li>这是25</li>
      <li>这是26</li>
      <li>这是27</li>
      <li>这是28</li>
      <li>这是29</li>
      <li>这是30</li>
      <li>这是31</li>
      <li>这是32</li>
      <li>这是33</li>
      <li>这是34</li>
      <li>这是35</li>
      <li>这是36</li>
      <li>这是37</li>
      <li>这是38</li>
      <li>这是39</li>
      <li>这是40</li>
      <li>这是41</li>
      <li>这是42</li>
      <li>这是43</li>
      <li>这是44</li>
      <li>这是45</li>
      <li>这是46</li>
      <li>这是47</li>
      <li>这是48</li>
      <li>这是49</li>
      <li>这是50</li>
    </ul>
  </div>
</template>

<script>


  import BScroll from '@better-scroll/core'
  import Pullup from '@better-scroll/pull-up'
  BScroll.use(Pullup)

  export default {
    name:"Category",
    data(){
      return {
        scroll:null
      }
    },
    methods :{
      btnClick(){
        console.log('---------')
      }
    },
    mounted() {
      this.scroll  = new BScroll('.wrapper',{
        scrollY: true,
        probeType:3,
        pullUpLoad: true

      })
      this.scroll.on('scroll',(position) => {
        // console.log(position)
      })
      this.scroll.on('pullingUp',() => {
        console.log('加载更多')
        setTimeout(() => {
          this.scroll.finishPullUp()
        },1000)
      })
    },
    
  }

</script>

<style scoped>
  .wrapper {
    height: 200px;
    background: var(--color-tint);
    overflow: hidden;
  }
</style>
