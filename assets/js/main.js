(function Voipdown() {
  var ribbonHtml =
      '<div class="Voipdown-ribbon" style="font-family: Arial, Helvetica, sans-serif;position: fixed;bottom: 0;left: 0;">' +
        '<a href="http://voipdown.com" target="_blank" style="color: #fff;text-decoration: none;" onMouseOver="this.style.opacity=0.8" onMouseOut="this.style.opacity=1">' +
          '<img src="http://voipdown.com/assets/images/ribbon.png" width="100" height="79" alt="VoIPDown">' +
          '<span class="Voipdown-counter" style="color: #fff;font-size: 12px;display: block;position: absolute;bottom: 4px;left: 8px;">' +
            '<span id="Voipdown-counter-number">?</span>' +
            '<span> days</span>' +
          '</span>' +
        '</a>' +
      '</div>';

  var voipDownDate = new Date(2016, 1, 5);
  var today = new Date();

  this.dateDiffInDays = function(d1, d2) {
    var t2 = d2.getTime();
    var t1 = d1.getTime();

    return parseInt((t2-t1)/(24*3600*1000));
  };

  this.updateCounter = function() {
    document.getElementById("Voipdown-counter-number").innerHTML = this.dateDiffInDays(today, voipDownDate);
  };

  this.appendCounter = function() {
    var el = document.createElement('div');
    el.innerHTML = ribbonHtml;
    document.body.appendChild(el);
  };

  this.init = function() {
    this.appendCounter();
    this.updateCounter();
  };

  this.init();

  return this;
})();