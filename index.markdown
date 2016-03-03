---
layout: page
title: VoIPDown
---
> VoIPDown est une opération qui a pour but de rassembler le plus grand nombre de sites marocains pour protester contre le blocage de la VoIP, et ceci en intégrant un compteur en bas de leurs pages (*procédure expliquée ci-dessous.)*

{:dir="rtl"}
> VoIPDown مبادرة تستهدف حشد أكبر عدد من المواقع الإلكترونية المغربية على اختلاف توجهاتها و ذلك قصد الاحتجاج على قرار الوكالة الوطنية لتقنين الاتصالات ANRT و القاضي بحظر الاتصال عبر التطبيقات العاملة ببروتوكول VoIP، وذلك عبر إضافة عداد إلى أسفل الصفحات (كيفية الإستعمال أسفله).

Pour rappel, les communications VoIP *(Skype, Viber, Whatsapp, Facetime, ...)* on été bloquées par tous les opérateurs marocains (en 3G/4G et en ADSL) suite à une décision de l'Agence Nationale de des Télécommunications, datant de 2004. Voir le [communiqué de presse](http://anrt.ma/sites/default/files/CP-Telephonie-IP-fr.pdf){:target="_blank"}.

<img src="/assets/images/failed-calls-screenshots.jpg" alt="VoIP Bloqué au Maroc">

## Obtenir le compteur VoIPDown

Il suffit de rajouter le code suivant à vos pages HTML (de préférence après l'ouverture du tag *&lt;body&gt;*.)

La mise à jour des jours écoulés depuis le blocage du VoIP se fait automatiquement.

{:dir="rtl"}
## كيفية إضافة العداد

{:dir="rtl"}
ما عليك سوى نسخ الكود أسفله إلى موقعك.


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

*(ou, directement utiliser le plugin [https://wordpress.org/plugins/badge-for-voipdown/](https://wordpress.org/plugins/badge-for-voipdown/){:target="_blank"} pour Wordpress.)*

> *Exemple* <img src="/assets/images/ribbon-example.png" alt="Compteur VoIPDown" width="100" height="80">

## Sites participants

Afin de figurer dans la liste, intégrez le compteur VoIPDown puis envoyez un e-mail avec le lien de votre site à **allo[AT]voipdown[DOT]com**

*Les sites suivants protestent contre le blocage de la VoIP au Maroc.*

{:dir="rtl"}
## المواقع المشاركة

{:dir="rtl"}
للظهور على لائحة المواقع المشاركة، ما عليك سوى إرسال رابط موقعك، بعد ادماج العداد، على البريد الإلكتروني **allo[AT]voipdown[DOT]com**

{:dir="rtl"}
*المواقع التالية تحتج ضد قرار الوكالة الوطنية لتقنين الاتصالات ANRT الخاص بحجب خدمة الاتصال عبر بروتوكول VoIP.*

{% assign companies = site.data.supporters | where: 'type', 'company' %}
{% assign blogs = site.data.supporters | where: 'type', 'blog' %}

### Entreprises / Marques
{% for company in companies %}
  <a href="{{company.link}}" target="_blank">{{ company.name }}</a>
{% endfor %}

### Sites de presse / Sites perso / Blogs
{% for blog in blogs %}
  <a href="{{blog.link}}" target="_blank">{{ blog.name }}</a>
{% endfor %}
