<template>
    <div>
        <h1 class="h1-title">{{ $t("messages.title",{'day': '1'}) }}</h1>
        <group>
            <selector :title="$t('messages.language')" :options="langList" v-model="langValue" @on-change="changeLang"></selector>
        </group>
    </div>
</template>

<script>
      import { Selector, Group } from 'vux'
      export default {
          components: {
              Selector,
              Group
          },
          data () {
              return {
                  langValue: 'zh',
                  langList: [{key: 'zh', value: '中文'}, {key: 'en', value: 'English'}],
              }
          },
          created() {
              this.getUserLanguage()
          },
          methods: {
              changeLang(value) {
                  this.$i18n.locale = value
              },
              // 获取浏览器语言
              getBrownseLanguage() {
                  if(navigator.appName == "Netscape"){
                      let navLanguage = navigator.language;
                      return navLanguage.substr(0,2);
                  }
                  return false;
              },
              //根据浏览器默认语言加载
              getUserLanguage() {
                  let _this = this
                  let navLanguage = _this.langValue
                  if(_this.$cookies.get('userLanguage')) {
                      navLanguage = _this.$cookies.get('userLanguage')
                  }else {
                      navLanguage = _this.getBrownseLanguage()
                      console.log(navLanguage)
                      if(navLanguage) {
                          let isLangExist = _this.langList.some((value)=>{
                              return value.key == navLanguage
                          })
                          if(isLangExist) {
                              _this.langValue = navLanguage
                              _this.$cookies.set('userLanguage',navLanguage)
                          }else {
                            return false;
                          }
                      }
                  }
              }
          }
      }
</script>

<style scoped>

</style>
