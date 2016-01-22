---
layout: page
title: VoIPDown
---
> VoIPDown est une opération qui a pour but de rassembler le plus grand nombre de sites marocains pour protester contre le blocage de la VoIP, et ceci en intégrant un compteur en bas de leurs pages (*procédure expliquée ci-dessous.)*

Pour rappel, les communications VoIP *(Skype, Viber, Whatsapp, Facetime, ...)* on été bloquées par tous les opérateurs marocains (en 3G/4G en ce moment, ADSL dans quelques jours selon [Telquel.ma](http://telquel.ma/2016/01/12/plus-quelques-reglages-blocage-total-voip-maroc_1477504){:target="_blank"}), et ce, suite à une décision de l'Agence Nationale de des Télécommunications, datant de 2004. Voir le [communiqué de presse](http://anrt.ma/sites/default/files/CP-Telephonie-IP-fr.pdf){:target="_blank"}.

<img src="/assets/images/failed-calls-screenshots.jpg" alt="VoIP Bloqué au Maroc">

## Obtenir le compteur VoIPDown

Il suffit de copier le code suivant n'importe où dans la page (de préférence après l'ouverture du tag *&lt;body&gt;*.)

La mise à jour des jours écoulés depuis le blocage du VoIP se fait automatiquement.

#### Code:

{% highlight html %}
<script>
  (function(d, s) {
    var h = d.getElementsByTagName('head')[0];
    var js = d.createElement(s);
    js.type = 'text/javascript';
    js.src = '//voipdown.com/assets/js/voipdown.min.js';
    h.appendChild(js);
  }(document, 'script'));
</script>
{% endhighlight %}

> *Exemple* <img src="/assets/images/ribbon-example.png" alt="Compteur VoIPDown" width="100" height="80">

## Sites participants

Afin de figurer dans la liste, intégrez le compteur VoIPDown puis envoyez un e-mail avec le lien de votre site à **allo[AT]voipdown[DOT]com**

Les sites suivants protestent contre le blocage de la VoIP au Maroc.

{% for brand in site.data.supporters %}
  <a href="{{brand.link}}" target="_blank">{{ brand.name }}</a>
{% endfor %}