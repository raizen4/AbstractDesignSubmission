# abstractDesignSubmission- PLEASE READ

#Notes
  Due to the fact that the preflight flag for CORS fails for some reason, I cannot successfully make the call to make sure the password has been reset. However, I am sure the service is called with the correct headers, using the correct attributes as when I am looking in the network tab for debugging, it is looking exactly like the call in POSTMAN where the call succeds.
  
# How to run
  Please have yarn installed by all means as this is needed by the monorepo. Then just run "yarn install" and after it finishes "yarn abstract and you should see the page" 
  
# Choice of technnologies.
 
## React
  Modern javascript frontend framework, I have fully made use of extremely useful libraries such as YUP for from validation, Fromik for painless forms, MATERIAL-UI for google best practices regaring Fluid design and most importantly hooks. This made development much easier and let me adhere to SOLID principles which I am strongly keen on following as these represent best practice nowadays.

## Monorepo with lerna and yarn worskpaces
  Monorepos are relatively new technogy when it comes to production, but I perfectioned my way of doing this over the last year. I consider they bring in considerable advantages, especially when thinking about how easy is to share different packages, without having to complicate things when using multiple packages (think about using a package in multiple projects and after that the need to update each project to the latest package version) or when we are to share DTOs between front-end and back-end as there is just a matter of importing.
  
  Yarn workspaces is used for hoisting, making it possible to have a library accessible by all the projects in the monorepo and while you will see (if you want) that each project has its own node_modules. These are only symlinks to the libraries installed in the root node_modules (except for the nohoist libraries I enumerated in the root package.json, these mean that those libraries will be unique for each project where I use them (it would be as if I would not use an actual monorepos))
  Lerna is a very good package publisher and monorepo orchestrator making the life working with monorepos so much painless.
  
## Atomic Design (the use of atoms, molecules, organisms and pages)
  ### Have a look here for a proper intro https://bradfrost.com/blog/post/atomic-web-design/
  This kind or architectural decision has been taken by me mostly because of the resusability advantages it produces. This kind of deisgn makes reusing and mixing components extremely easy. On top of this it provides a clear layout when designing UI libraries as well as  a more modular file structure whilst keeping changing different implementations across the website a painless activity. It is quite an industry standard for implementing react using only best practices.
