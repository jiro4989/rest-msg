/**
 * bindClockは指定のIDの要素を現在時刻を出力する時計にします。
 *
 * example:
 *   bindClock("elementId");
 *
 * @param id 時計に設定する要素のID
 */
function bindClock(id) {
  let pad = (n) => ('0' + n).slice(-2);
  let countTime = function() {
    let date     = new Date();
    let timeText = formatTime(date);
    document.getElementById(id).innerHTML = timeText;
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
