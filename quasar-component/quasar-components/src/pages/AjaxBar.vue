<template>
<q-page>
  <q-ajax-bar/>
  <q-btn label="fake request"  @click="fakeAjaxReq"></q-btn>
<pre>{{ result }}</pre>

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
    }
  },
  data(){
    return{
      result:null,
    }
  }
}

</script>
