var appLightbox = Vue.component('appLightbox', {
    template: "<div id='overlay' @click='close'>" +
    "<img :src='imgsource.imgUrl' alt='' />" +
    "<span>{{ imgsource.caption }}</span>" +
    "</div>",
    props: {
        imgsource: Object,
        close: Function
    },
  mounted: function() {
    var overlay = document.getElementById('overlay');
    overlay.setAttribute('style', 'height:' + window.innerHeight + 'px; ' + 'width:' + window.innerWidth + 'px');
    console.log(window.innerWidth);
  }
});


var app = new Vue({
    el: '#app',
    components: {
        appLightbox: appLightbox
    },
    data: {
        picdata: [
            {
                id: 1,
                caption: 'Magnificient Butterfly',
                imgUrl: 'https://images.pexels.com/photos/122829/pexels-photo-122829.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
            },
            {
                id: 2,
                caption: 'View the Wonder',
                imgUrl: 'https://images.pexels.com/photos/808910/pexels-photo-808910.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
            },
            {
                id: 3,
                caption: 'Golden Sunsets',
                imgUrl: 'https://images.pexels.com/photos/914821/pexels-photo-914821.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
            },
            {
                id: 4,
                caption: 'Rose on a pose',
                imgUrl: 'https://images.pexels.com/photos/951539/pexels-photo-951539.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260    '
            },
            {
                id: 4,
                caption: 'Cannot get any cuter',
                imgUrl: 'https://images.pexels.com/photos/13966/pexels-photo-13966.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
            },
            {
                id: 5,
                caption: 'The looking cat',
                imgUrl: 'https://images.pexels.com/photos/635609/pexels-photo-635609.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
            },
             {
                id: 6,
                caption: 'The looking cat',
                imgUrl: 'https://images.pexels.com/photos/1261191/pexels-photo-1261191.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
            },
             {
                id: 7,
                caption: 'The looking cat',
                imgUrl: 'https://images.pexels.com/photos/1260827/pexels-photo-1260827.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
            }
            ],
        currentPic: '',
        lightBoxToggle: false
    },
    methods: {
        openBox: function(d) {
            this.currentPic = d;
            this.lightBoxToggle = !this.lightBoxToggle;
        },
        closeBox: function() {
            this.lightBoxToggle = false;
        }
    }
});

