# Sequery
Sequery is an interactive tool for querying, optimizing, and analyzing your SQL data.

### live-demo
https://sequery.vercel.app/

## Frameworks and plugins used

* Vue3
* Quasar
* Vite

## Page load time (Google PageSpeed Insights)

![pagespeed](https://raw.githubusercontent.com/indrajaala/sequery/main/images/page-speed.png)


## optimisations

* used vue's `defineAsyncComponent` to Lazy load components, which is best used on features that are not immediately needed after initial page load.

* used `virtual scrolling` to render a large number of table rows performantly. They only render the minimum number of DOM nodes necessary. Tested with over 1 million rows.

* used `infinite scroll` to fetch more rows as you scroll, instead of loading all rows at once.



