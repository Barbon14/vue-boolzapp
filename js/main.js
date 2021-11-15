// istanza Vue
var app = new Vue({
    el: "#app",
    data: { 
        contacts: [
            {
                name: 'Michele',
                avatar: 'img/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 1 5:30:55',
                        text: 'Hai p ortato a s passo i l c ane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 1 5:50:00',
                        text: 'Ricordati d i d argli d a m angiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 1 6:15:22',
                        text: 'Tutto f atto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: 'img/avatar_2.jpg',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 1 6:30:00',
                        text: 'Ciao c ome s tai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 1 6:30:55',
                        text: 'Bene g razie! S tasera c i v ediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 1 6:35:00',
                        text: 'Mi p iacerebbe m a d evo a ndare a f are l a s pesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: 'img/avatar_3.jpg',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 1 0:10:40',
                        text: 'La M arianna v a i n c ampagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 1 0:20:10',
                        text: 'Sicuro d i n on a ver s bagliato c hat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 1 6:15:22',
                        text: 'Ah s cusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: 'img/avatar_4.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 1 5:30:55',
                        text: 'Lo s ai c he h a a perto u na n uova p izzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 1 5:50:00',
                        text: 'Si, m a p referirei a ndare a l c inema',
                        status: 'received'
                    }
                ],
            },
        ],
    }
});
