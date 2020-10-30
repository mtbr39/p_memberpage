const profile_wrapper = new Vue({
    el: '#profile_wrapper',
    data: {
        show_profile: 0
    },
    methods: {
        profile_click: function () {
            this.show_profile = (this.show_profile + 1) % 2 //0->1, 1->0
        }
    }
})