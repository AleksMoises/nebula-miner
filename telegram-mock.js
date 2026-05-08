// Эмуляция Telegram WebApp для работы в браузере и как подстраховка внутри Telegram
if (!window.Telegram) window.Telegram = {};
if (!window.Telegram.WebApp) {
  window.Telegram.WebApp = {
    initData: '',
    initDataUnsafe: { user: { id: 123456, username: 'test_user' } },
    ready: function() { console.log('Telegram WebApp ready (mock)'); },
    expand: function() {},
    close: function() {},
    MainButton: {
      show: function() {},
      hide: function() {},
      setText: function() {},
      onClick: function() {}
    },
    HapticFeedback: {
      impactOccurred: function() {}
    },
    sendData: function() {}
  };
}