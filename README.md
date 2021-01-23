# **pagePreloader**
simple page preloader with percentage progress bar and counter of loaded elements / total elements needed to be load.

## Details:
* preloader is collecting to *allHtmlBodyElementsWithSource* array all html elements in `<body>` which have source attribute (`src`) - it's because mostly such elements are long loaded on page
* each of those element is having load listener which is interact with progressBar and progres Info element

## Requirements:
* adding *preloader.js* to your project and linking it from index.html
* adding *div#pagePreloader* to project - it means that *div#pagePreloader* contains elements used and handled by *preloader.js* script (*h3* and *hr*)
* adding css to project - style of "*div#pagePreloader*" and "*div#pagePreloader hr*" is needed to display preloader 

## Goals:
- [ ] Marking elements to be handled by preloader by class - in the pointed element, the preloader will be prepared and displayed only for this element, taking into account the elements it contains
- [ ] Animations - basic looped animation while end user is waiting for progress