const { createApp } = Vue

createApp({
    data() {
        return {
            mailList: []
        }
    },
    methods: {
        generateMail() {
            this.mailList = [];
            for (let i = 1; i <= 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((element) => {
                    let mail = element.data.response;
                    this.mailList.push(mail);
                })
            }
        }
    }
}).mount('#app')