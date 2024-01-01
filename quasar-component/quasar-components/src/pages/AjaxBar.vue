<template>
<q-page>
  <q-ajax-bar/>
  <q-btn label="fake request"  @click="fakeAjaxReq"></q-btn>
<pre>{{ result }}</pre>
<div>
    <h1>Scrollable Content</h1>
    <div ref="scrollContainer" @scroll="onScroll" style="height: 300px; overflow-y: scroll;">
      <!-- Your scrollable content goes here -->
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...</p>
    </div>
  </div>
</q-page>
</template>
<script>
import axios from 'axios';


export default{

  methods:{
    fakeAjaxReq(){
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then( (response)=> {
          // handle success
          this.result=response.data
          console.log(response);
        })
        .catch( (error)=> {
          // handle error
          console.log(error);
        })
        .finally( ()=>   {
          // always executed
        });
    },
    onScroll() {
      const position = this.$refs.scrollContainer.scrollTop;
      console.log(`Scrolled to position: ${position}px`);
      // Your logic for handling scroll position goes here
    },
  },
  data(){
    return{
      result:null,
    }
  }
}

</script>
