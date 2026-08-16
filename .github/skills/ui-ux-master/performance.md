# UI PERFORMANCE MASTER

## Goal

Une interface premium doit également être rapide.

---

# ANIMATIONS

Prioriser :

```css
transform
opacity
```

Limiter les animations de propriétés provoquant des recalculs de layout.

---

# IMAGES

Utiliser :

* formats modernes ;
* compression ;
* lazy loading ;
* responsive images.

---

# VIDEO

Ne pas charger automatiquement des vidéos lourdes sans nécessité.

Prévoir une stratégie mobile.

---

# FONTS

Limiter les familles et poids inutiles.

---

# JAVASCRIPT

Éviter les dépendances inutiles.

Ne pas utiliser une librairie entière pour une fonctionnalité triviale.

---

# REACT

Éviter :

* re-renders inutiles ;
* effets mal contrôlés ;
* états globaux inutiles ;
* composants gigantesques.

---

# MOTION

Ne pas créer des centaines d'animations simultanées.

Utiliser l'animation uniquement lorsque sa valeur UX est réelle.

---

# IMAGES ET SCROLL

Les expériences scroll doivent rester fluides.

Éviter les calculs lourds exécutés à chaque événement scroll.

Privilégier les APIs adaptées comme Motion ou IntersectionObserver.

---

# VALIDATION

Après une modification importante :

```bash
npm run build
```

Puis vérifier :

* console ;
* responsive ;
* animations ;
* interactions ;
* performance.
