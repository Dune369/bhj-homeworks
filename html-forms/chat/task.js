const chatWidget = document.querySelector('.chat-widget');
const input = document.querySelector('.chat-widget__input');
const messages = document.querySelector( '.chat-widget__messages')

chatWidget.addEventListener("click", () => {chatWidget.classList.add('chat-widget_active')})

input.addEventListener("change", () => {
    let Data = new Date();
    if(input.value == ''){
        return null  
    } else if(input.value.includes("розы" )){
       messages.innerHTML += `
        Сообщение от клиента
        <div class="message message_client">
            <div class="message__time">${Data.getHours() + ":" + Data.getMinutes()}</div>
            <div class="message__text">
            ${input.value}
            </div>
        </div>
            Сообщение от робота
            <div class="message">
            <div class="message__time">${Data.getHours() + ":" + Data.getMinutes()}</div>
            <div class="message__text">Все розы закончились.</div>
        </div>
    `;
        return input.value = "";
    } else {
       messages.innerHTML += `
        Сообщение от робота
        <div class="message">
            <div class="message__time">${Data.getHours() + ":" + Data.getMinutes()}</div>
            <div class="message__text">Добрый день!</div>
        </div>
        Сообщение от клиента
            <div class="message message_client">
            <div class="message__time">${Data.getHours() + ":" + Data.getMinutes()}</div>
            <div class="message__text">
                ${input.value}
            </div>
        </div>
        `;
        return input.value = "";
    }
})

