'use strict'

const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const TextCommand = Telegram.TextCommand
const chatbot = new Telegram.Telegram('fuba_events')

class Eventscontroller extends TelegramBaseController {
    allEventsAction(scope) {
        let msg = `QCon SP - 24-25-26/04/2017 - qconsp.com\nFrontInSampa - 01/07/2017 - frontinsampa.com.br`

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