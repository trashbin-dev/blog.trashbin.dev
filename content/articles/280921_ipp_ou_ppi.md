---
title: i++ ou ++i ?
description: postfix / prefix war
author: ogromny
---

> Pourquoi deux syntaxes pour ce qui semble être la même chose ?

Le C, C++, ou encore le Javascript permettent l'utilisation de deux opérateurs d'incrémentation/décrémentation **++**/**--**, mais quelle est donc la différence.

À votre avis à quoi **j** est égal ici ?

```c
int i = 1;
int j = i++;
```

Si vous avez répondu **2**, ne vous prenez pas la tête à continuer de lire cet article, je ne vais rien vous apprendre de nouveau, sinon je vous invite à continuer votre lecture.

## i++ (aka) postfix

```c
i++;
```

À première vue on se dit que c'est exactement pareil que
```c
i = i + 1;
// ou
i += 1;
// ou (en K&R)
i =+ 1;
```

Suspense... Eh bien non car, comme son nom l'indique **post**fix, retourne d'abord la valeur, *puis* l'incrémente.

## ++i (aka) prefix

Syntax qu'on ne voit malheuresement pas assez, elle correspond parfaitement à l'interprétation des gens en premier lieu

```c
++i;

i = i + 1;
```

## Pour conclure

Comme vous vous en doutez maintenant (j'éspère) la réponse à la question est **1**.

```c
#include <stdio.h>

int main(void)
{
    int i = 1;
    int j = i++;
    printf("%d\n", j);
    return 0;
}
```

> 1

Pour que **j** soit égal à **2**, il aurait fallu utiliser l'*increment prefix operator* comme ceci:

```c
#include <stdio.h>

int main(void)
{
    int i = 1;
    int j = ++i;
    printf("%d\n", j);
    return 0;
}
```

> 2
