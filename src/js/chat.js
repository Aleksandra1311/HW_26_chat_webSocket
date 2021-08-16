const userNameEl = document.getElementById("username");
const messageEl = document.getElementById("message");
const btnSubmitEl = document.getElementById("btn-submit");
const chatBox = document.getElementById("chatBox");

btnSubmitEl.addEventListener("click", onBtnSubmitClick);

function onBtnSubmitClick(e) {    
    if (!isValid(userNameEl.value) || !isValid(messageEl.value)) {
        return;
    }

    send({
    type: "message",
    payload: {
        username: userNameEl.value,
        message: messageEl.value,
        },
    });
    resetForm();
}

function showChatBoxMsg(data) {
    return chatBox.insertAdjacentHTML('beforeend',
      `<p> ${data.payload.username}: <span class="text">${data.payload.message}</span></p>`
    );
  }

function isValid(str) {
  return str.trim() !== `` && str.trim() !== null;
}

function resetForm() {
    messageEl.value = ``;
}

// const circleEl = document.getElementById('circle');

// circleEl.addEventListener('mousedown', onMouseDown);

// function onMouseDown() {
//   circleEl.addEventListener('mousemove', onMouseMove);
//   circleEl.addEventListener('mouseup', onMouseUp);
// }

// function onMouseUp() {
//   circleEl.removeEventListener('mousemove', onMouseMove);
//   circleEl.removeEventListener('mouseup', onMouseUp);
// }

// function onMouseMove(e) {
//   move(e.x, e.y);
//   send({
//     type: 'move', // 'massage'
//       payload: {
//           x: e.x,
//           y: e.y
//       },
//   });
// }

// // {
// //   type: 'message',
// //   payload:
// //   {
// //     username: 'Alex',
// //     message: 'Hello world' 
// //   }
// // }

// function move(x, y) {
//   circleEl.style.left = x - 50 + 'px';
//   circleEl.style.top = y - 50 + 'px';
// }