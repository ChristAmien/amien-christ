# MOTION DESIGN MASTER

## Philosophy

Motion doit expliquer le changement d'état.

Une animation doit répondre à au moins une question :

* Que vient-il de se passer ?
* Où l'utilisateur doit-il regarder ?
* Quel élément vient d'apparaître ?
* Quel élément a changé ?
* Quelle action vient d'être effectuée ?

Si aucune réponse n'existe, l'animation est probablement inutile.

---

# 1. TIMING

Utiliser des durées adaptées.

Micro interaction :

100–200ms

Component transition :

200–400ms

Complex transition :

400–700ms

Storytelling :

700ms+

Ces valeurs sont des références, pas des règles absolues.

---

# 2. EASING

Éviter les mouvements linéaires pour les interfaces humaines.

Privilégier :

* ease-out pour les entrées ;
* ease-in pour les sorties ;
* ease-in-out pour les changements continus ;
* spring pour les interactions physiques.

---

# 3. SPRING

Les animations spring peuvent être utilisées pour :

* drag ;
* cards ;
* menus ;
* toggles ;
* gestures ;
* interactions physiques.

Elles doivent rester contrôlées.

---

# 4. MICRO INTERACTIONS

Exemples :

Button:

hover
→ slight scale
→ color change

Tap:

scale down
→ release

Input:

focus
→ border transition
→ label/state feedback

Icon:

hover
→ subtle movement

Les micro-interactions doivent rester discrètes.

---

# 5. PAGE TRANSITIONS

Utiliser lorsque cela apporte une continuité.

Éviter les transitions longues entre chaque page.

---

# 6. SCROLL ANIMATIONS

Les scroll animations doivent :

* respecter la progression du contenu ;
* être compréhensibles ;
* éviter les mouvements excessifs ;
* fonctionner sur mobile.

Utiliser :

```js
useScroll()
useTransform()
useSpring()
```

lorsque Motion est disponible.

---

# 7. PARALLAX

Utiliser le parallax avec modération.

Il peut créer :

* profondeur ;
* hiérarchie ;
* storytelling.

Éviter plusieurs couches avec des vitesses extrêmes.

---

# 8. REVEAL

Pour les sections :

* opacity ;
* translateY ;
* scale léger ;
* clip-path lorsque pertinent.

Éviter les animations répétitives sur chaque élément sans hiérarchie.

---

# 9. STAGGER

Utiliser le stagger lorsque plusieurs éléments appartiennent à un même groupe.

Exemple :

Heading
→ paragraph
→ CTA

Le stagger doit raconter une hiérarchie.

---

# 10. REDUCED MOTION

Toujours prévoir une alternative.

Pour :

```css
@media (prefers-reduced-motion: reduce)
```

réduire ou supprimer :

* parallax ;
* grandes translations ;
* rotations ;
* animations décoratives.

Conserver les transitions nécessaires au feedback.

---

# 11. PERFORMANCE

Privilégier :

```css
transform
opacity
```

Éviter autant que possible les animations provoquant un layout recalculation important.

Ne pas créer plusieurs centaines d'animations indépendantes inutilement.

---

# 12. MOTION LANGUAGE

Un produit doit avoir une identité motion cohérente.

Définir :

* durée ;
* easing ;
* spring ;
* distance ;
* scale ;
* opacity ;
* stagger.

Ne pas utiliser une animation différente pour chaque composant sans raison.

---

# 13. MOTION HIERARCHY

Priorité :

1. feedback utilisateur ;
2. navigation ;
3. compréhension ;
4. hiérarchie ;
5. storytelling ;
6. décoration.

Le feedback utilisateur est toujours plus important que l'effet visuel.
