<template lang="pug">
.about
  span#about.anchor-tag
  v-container.main.background(fluid)
    p.f-title.text-center {{ $t('title') }}
    v-row.mt-4
      v-col(md=5, offset-md=0, offset=2, cols=8)
        v-img.default(src="@/assets/images/Kunle.jpg")
      v-col(offset-md=1, md=6, offset=0, cols=12)
        span.f-main {{ $t('description-main') }}
        .y-spacer
        .y-spacer
        span.f-sub-bold(v-html="$t('description')")
        .y-spacer
        v-btn(download, :href="'/documents/' + $t('resume-file')") {{ $t('resume') }}
          v-icon mdi-download
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "About",
});
</script>

<style lang="scss">


.about {
 .background {
    //background-image: url("");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

}


.theme--dark {
  .about {
    .background {
      background: linear-gradient(
        to bottom,
       rgba(0, 0, 0, 0.5),
        rgba(0,0,0, 0.5)
      ), url("");;
    }
  }
}

.theme--light {
  .about {
   .background {
      background: linear-gradient(
        to bottom,
       rgba(256, 256, 256, 0.3),
       rgba(256, 256, 256, 0.3)
      ), url("");;
    }
  }
}
</style>

<i18n>
{
  "en": {
    "title": "About Me",
    "description-main": "My name is Olakunle Salami and I am a 4th Year American transfer student",
    "description": "At heart I am a digital artist who has a big interest in business marketing. I am fascinated with User interface and user experience which led me to push my craft. Whether its designing different web applications, recording videos, and promoting other businesses my ideas are limited by creativity. <br><br>If you're interested in my work please feel free to contact me. I love tackeling on different projects!",
    "resume-file": "Resume.pdf",
    "resume": "Resume"
  },
  "es" : {
    "title": "Sobre Mi",
    "resume-file": "Resume.pdf"
  },
  "zh" :{
    "title": "关于我" 
  },
  "ja": {
    "title": "自己紹介"
  }
}
</i18n>
