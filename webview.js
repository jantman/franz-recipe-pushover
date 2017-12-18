module.exports = (Franz) => {
  function getMessages() {
    const count = document.querySelector('.app_counter').innerHTML;
    if (count) {
		  Franz.setBadge(count);
    }
  }

  Franz.loop(getMessages);
}
