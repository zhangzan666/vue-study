export default {
  install: (app,opitons)=>{
    app.config.globalProperties.$translate = (key) => {
      return key.split('.')
        .reduce((o, i) => { if (o) return o[i] })
    }

    app.provide('i18n', opitons)
  }
}