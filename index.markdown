---
layout: page
title: VoIPDown
---
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis [nostrud exercitation](http://alexcarpenter.me) ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.

## Obtenir le compteur VoIPDown

Il suffit de copier le code suivant n'importe où dans la page (de préférence après l'ouverture du tag *&lt;body&gt;*.)

La mise à jour des jours écoulés depuis le blocage du VoIP se fait automatiquement.

<img src="/assets/images/ribbon-example.png" alt="Compteur VoIPDown" width="100" height="79">

{% highlight html %}
  <script>
  (function(d, s) {
    var h = d.getElementsByTagName('head')[0];
    var js = d.createElement(s);
    js.type = 'text/javascript';
    js.src = 'http://voipdown.com/assets/js/voipdown.min.js';
    h.appendChild(js);
  }(document, 'script'));
  </script>
{% endhighlight %}

## Sites partenaires

Les sites et marques suivantes protestent contre le blocage de la VoIP au Maroc.

Afin de figurer dans la liste, intégrez le compteur VoIPDown puis envoyez un e-mail avec le lien de votre site à **allo[AT]voipdown[DOT]com**

{% for brand in site.data.supporters %}
  <a href="{{brand.url}}" target="_blank">{{ brand.name }}</a>
{% endfor %}