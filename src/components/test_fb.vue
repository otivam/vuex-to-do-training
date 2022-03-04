<template>
  <div class="container">
    <div class="row justify-content-center">
      <h4 class="col-8 title-block">{{ title }}</h4>
      <p class="col-8 title-info">{{ info }}</p>

      <div class="col-8">
        <div class="row">
          <img :src="'/src/assets/facebook/'+img">
        </div>

        <div class="row icons-block">
          <div class="col-6">
            <i class="material-icons" @click="add_icons_value(0)">favorite</i>
            <i class="material-icons" @click="add_icons_value(1)">thumb_up</i>
            <i class="material-icons" @click="add_icons_value(2)">thumb_down</i>
            <i class="material-icons" @click="add_icons_value(3)">sentiment_very_satisfied</i>
            <i class="material-icons" @click="add_icons_value(4)">sentiment_very_dissatisfied</i>
          </div>
        </div>

        <div class="row comment-block">
            <input @click="save_OE_time" @keyup.enter="add_comment(comment_text)" type="text" id="comment" placeholder="Your comment..." v-model="comment_text">
            <br><br>
            <ol>
                <li v-for="(comment) in comments" :key="comment">
                    <span v-html="comment">{{ comment }}</span>
                </li>
            </ol>
            <h4>Icons value is: {{ icons_val }}</h4>
            <h4>Time entered: {{ time_entered }}</h4>
            <h4>Current time: {{ current_time }}</h4>
            <h4>Time spend on page 1: {{ time_spend }}</h4>
            <h4>Time spend before OE was clicked: {{ OE_time_comp }}</h4>
            <h4>Time spend before icons ware clicked: {{ icons_time_comp }}</h4>
            <h4>Is OE clicked: {{ OE_clicked_comp }}</h4>

            <button type="button" @click="save_overall_time()">Continue</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
        return {
            icons_value: '',
            comment_text: '',
            current_time: '',
            time_entered: '',
            time_spend_page1: '',
            OE_time: '',
            icons_time: '',
            OE_clicked: ''
        }
    },
  props: 
    ['img','title','info']
  ,
  computed: {
    icons_val() {
      return this.$store.state.icons_value;
    },
    comments() {
      return this.$store.state.comments;
    },
    time_spend() {
      return this.$store.state.time_spend_page1;
    },
    icons_time_comp() {
      return this.$store.state.icons_time;
    },
    OE_time_comp() {
      return this.$store.state.OE_time;
    },
    OE_clicked_comp() {
      return this.$store.state.OE_clicked;
    }
  },
  created() {
    setInterval(this.time_now, 1000);
  },
  mounted() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    this.time_entered = t;

    let externalScript = document.createElement('script')
    externalScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.28.0/moment.min.js')
    document.head.appendChild(externalScript)
  },
  methods: {
    time_diff() {
      var startTime=moment(this.time_entered, "HH:mm:ss a");
      var endTime=moment(this.current_time, "HH:mm:ss a");
      var duration = moment.duration(endTime.diff(startTime));
      var hours = parseInt(duration.asHours());
      var minutes = parseInt(duration.asMinutes())-hours*60;
      var seconds = parseInt(duration.asSeconds())-minutes*60;

      return `${hours}:${minutes}:${seconds}`;
    },
    save_OE_time() {
      if(this.OE_clicked_comp == 'no') {
        this.$store.dispatch('save_OE_time',['yes',this.time_diff()]);
      };
    },
    save_overall_time() {
      this.$store.dispatch('save_overall_time',this.time_diff());
    },
    time_now() {
      var d = new Date();
      var t = d.toLocaleTimeString();
      this.current_time = t;
    },
    add_icons_value(val) {
      this.$store.dispatch('add_icons_value',[val,this.time_diff()]);

      $('.material-icons').css('color','');
      switch(val) {
        case 0:
          $('.material-icons').eq(val).css('color','rgb(224, 28, 28)');
          break;
        case 1:
          $('.material-icons').eq(val).css('color','rgb(64, 226, 43)');
          break;
        case 2:
          $('.material-icons').eq(val).css('color','rgb(8, 202, 236)');
          break;
        case 3:
          $('.material-icons').eq(val).css('color','rgb(150, 189, 42)');
          break;
        case 4:
          $('.material-icons').eq(val).css('color','rgb(212, 125, 230)');
          break;
        default:
          console.log('hello world')
      }
    },
    add_comment(x) {
      this.$store.dispatch('add_comment',x);
      this.comment_text = "";
    }
  }
}



</script>

<style>
.title-info {
  text-align: justify;
}
.comment-block {
  padding: 5px;
}
#comment {
  border-radius: 20px;
  border: none;
  background: lightgray;
  width: 100%;
  outline: none;
  height: 2em;
}
.icons-block {
  border-bottom: 1px solid lightgray;
}
.icons-block i {
  margin: 10px;
  text-shadow:2px 2px 4px gray;
}
.icons-block i:hover {
  cursor: pointer;
}
i:nth-child(1):hover {
  color:rgb(224, 28, 28);
}
i:nth-child(2):hover {
  color:rgb(64, 226, 43);
}
i:nth-child(3):hover {
  color:rgb(8, 202, 236);
}
i:nth-child(4):hover {
  color:rgb(150, 189, 42);
}
i:nth-child(5):hover {
  color:rgb(212, 125, 230);
}
</style>