// istanza Vue
var app = new Vue({
    el: "#app",
    data: { 
        
        // chat attiva
        activeChat : 0,

        // info utente
        user : {
            name : 'Nome Utente',
            avatar: 'img/avatar_io.jpg'
        },
        
        // testo nuovo messaggio
        newMsgText : '',

        // ricerca contatti
        searchContact: '',

        // contatti e relativi messaggi
        contacts : [
            {
                name : 'Michele',
                avatar : 'img/avatar_1.jpg',
                visible : true,
                messages : [
                    {
                        date : '10/01/2020 15:30:55',
                        text : 'Hai portato a spasso il cane?',
                        status : 'sent'
                    },
                    {
                        date : '10/01/2020 15:50:00',
                        text : 'Ricordati di dargli da mangiare',
                        status : 'sent'
                    },
                    {
                        date : '10/01/2020 16:15:22',
                        text : 'Tutto fatto!',
                        status : 'received'
                    }
                ],
            },
            {
                name : 'Fabio',
                avatar : 'img/avatar_2.jpg',
                visible : true,
                messages : [
                    {
                        date : '20/03/2020 16:30:00',
                        text : 'Ciao come stai?',
                        status : 'sent'
                    },
                    {
                        date : '20/03/2020 16:30:55',
                        text : 'Bene grazie! Stasera ci vediamo?',
                        status : 'received'
                    },
                    {
                        date : '20/03/2020 16:35:00',
                        text : 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status : 'sent'
                    }
                ],
            },
            {
                name : 'Samuele',
                avatar : 'img/avatar_3.jpg',
                visible : true,
                messages : [
                    {
                        date : '28/03/2020 10:10:40',
                        text : 'La Marianna va in campagna',
                        status : 'received'
                    },
                    {
                        date : '28/03/2020 10:20:10',
                        text : 'Sicuro di non aver sbagliato chat?',
                        status : 'sent'
                    },
                    {
                        date : '28/03/2020 16:15:22',
                        text : 'Ah scusa!',
                        status : 'received'
                    }
                ],
            },
            {
                name : 'Luisa',
                avatar : 'img/avatar_4.jpg',
                visible : true,
                messages : [
                    {
                        date : '10/01/2020 15:30:55',
                        text : 'Lo sai che ha aperto una nuova pizzeria?',
                        status : 'sent'
                    },
                    {
                        date : '10/01/2020 15:50:00',
                        text : 'Si, ma preferirei andare al cinema',
                        status : 'received'
                    }
                ],
            },
        ],
    },

    methods : {

        // chat attiva
        setActiveChat(index) {
            this.activeChat = index;
        },

        // ultimo accesso interlocutore preso dal suo ultimo messaggio inviato
        lastAccess(array) {
            let last = '';
            for (let i = 0; i < array.length; i++) {
                if (array[i].status === 'received') {
                   last = array[i].date;
               } 
            }
            return last;
        },

        // ultimo messaggio della chat
        lastMessage : (array) => array[array.length - 1].text,

        // data e ora ultimo messaggio
        lastMsgTime: (array) => array[array.length - 1].date,
        
        // data e ora 
        nowDateTime: () => dayjs().format('DD/MM/YYYY HH:mm:ss'),

        // nuovo messaggio
        newMsg(chat) {
            if (this.newMsgText !== '') {
                const newMsg = {
                    date: this.nowDateTime(),
                    text: this.newMsgText,
                    status: 'sent'
                };
                console.log(newMsg);
                chat.push(newMsg);
                this.newMsgText = '';
                this.msgReply(chat);
            } 
        },

        // risposta automatica
        msgReply(chat) {
            setTimeout(() => {
                const newMsg = {
                    date: this.nowDateTime(),
                    text: 'Ok',
                    status: 'received'
                };
                console.log(newMsg);
                chat.push(newMsg);
            }, 1000);
        },

        // trova contatti 
        findContact : (array, input) => array.toLowerCase().includes(input),
    },
});