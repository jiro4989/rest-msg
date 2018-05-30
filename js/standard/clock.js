/**
 * bindClockは指定のIDの要素を現在時刻を出力する時計にします。
 *
 * example:
 *   bindClock("elementId");
 *
 * @param id 時計に設定する要素のID
 */
function bindClock(id) {
  const pad = (n) => ('0' + n).slice(-2);
  const countTime = function() {
    const date     = new Date();
    const timeText = formatTime(date);
    document.getElementById(id).innerHTML = timeText;
    setTimeout(countTime, 500);
  }
  countTime();
}

/**
 * 指定の時間にf関数を実行する。
 * 検査間隔は0.5秒に一度
 * @param targetDate 関数を実行させたい時間
 * @param f 実行させたい関数
 */
function alertClock(targetDate, f) {
  const countTime = function() {
    const date = new Date();
    if (targetDate.getTime() < date.getTime()) {
      f();
      return;
    }
    setTimeout(countTime, 500);
  }
  countTime();
}

function formatTime(date) {
  const pad = (n) => ('0' + n).slice(-2);
  const hours    = date.getHours();
  const minutes  = date.getMinutes();
  const seconds  = date.getSeconds();
  const timeText = pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
  return timeText;
}
