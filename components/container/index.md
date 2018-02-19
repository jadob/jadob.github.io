---
layout: component
title:  "Container"
date:   2014-10-18 12:58:29
categories: container dependency-injection
component_name: Container
---



<h2>Table of contents</h2>
<ol>
    <li><a href="#basics">Basics</a></li>
</ol>


<h3 id="basics">Basics</h3>
Simple, [PSR-10](https://www.php-fig.org/psr/psr-11/) dependency injection container.
{% highlight php %}
<?php

$container = new Jadob\Container\Container();

//adding new dependency
$container->add('my.service', new App\Services\MyService());

//getting previously added stuff
$service = $container->get('my.service');
 
{% endhighlight %}