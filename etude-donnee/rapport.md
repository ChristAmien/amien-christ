# Étude de données — Analyse des avis utilisateurs

## 1. Présentation du projet

Ce projet consiste à analyser un jeu de données contenant des avis laissés par des utilisateurs sur une plateforme.

L'objectif principal est d'étudier le niveau de satisfaction des utilisateurs à travers les notes attribuées, d'analyser les commentaires disponibles et d'observer l'évolution de la satisfaction au cours du temps.

L'analyse a été réalisée avec **Python**, principalement avec la bibliothèque **Pandas**, ainsi qu'avec **Matplotlib** pour les visualisations.

---

## 2. Objectifs de l'étude

Cette étude vise à :

- explorer la structure du jeu de données ;
- identifier les éventuelles valeurs manquantes ;
- analyser la répartition des notes ;
- calculer les principales statistiques descriptives ;
- analyser les commentaires disponibles ;
- étudier l'évolution de la note moyenne selon les dates ;
- interpréter les résultats ;
- identifier les limites de l'analyse.

---

## 3. Description des données

Le jeu de données contient les variables suivantes :

| Variable | Description |
|---|---|
| `id` | Identifiant unique de l'avis |
| `rating` | Note attribuée par l'utilisateur |
| `comment` | Commentaire laissé par l'utilisateur |
| `created_at` | Date de création de l'avis |

Le jeu de données contient **6 avis**.

---

## 4. Exploration des données

### 4.1 Valeurs manquantes

L'analyse des valeurs manquantes a donné les résultats suivants :

| Variable | Valeurs manquantes |
|---|---:|
| `id` | 0 |
| `rating` | 0 |
| `comment` | 4 |
| `created_at` | 0 |

On constate que les variables `id`, `rating` et `created_at` sont complètement renseignées.

En revanche, la variable `comment` contient **4 valeurs manquantes sur 6**, soit environ **66,7 %** des commentaires.

Cette situation constitue une limite pour l'analyse qualitative des commentaires.

### Code utilisé

```python
df.isnull().sum()