const { createApp } = Vue

createApp({
    data() {
        return {
            mailList: [],
            mailNumber: 10,
            check : true
        }
    },
    methods: {
        generateMail() {
            this.mailList = [];
            for (let i = 1; i <= this.mailNumber; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((element) => {
                    let mail = element.data.response;
                    this.mailList.push(mail);
                })
            }
        },
        changeCheckboxValue() {
            this.check = !this.check;
        }
    }
}).mount('#app')