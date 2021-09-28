'use strict'

const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const TextCommand = Telegram.TextCommand
const chatbot = new Telegram.Telegram('2037096782:AAEJmjn63PqCyy3oKLX0Udooa632zs7clnI')

class Eventscontroller extends TelegramBaseController {
    allEventsAction(scope) {
        let msg = `Hello World`

        scope.sendMessage(msg)
    }

    get routes() {
        return {
            'allEvents': 'allEventsAction'
        }
    }
}

chatbot.router.when(
    new TextCommand('/allevents', 'allEvents'), new Eventscontroller()
)