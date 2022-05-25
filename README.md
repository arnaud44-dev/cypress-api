# cypress-api-tutorial
Repository created in the article REST API Tests with Cypress

npx cypres open

npx cypress run --browser chrome --spec "cypress/integration/APIS/GET.spec.js"   

npm install mochawesome
npx cypress run --reporter mochawesome  --spec "cypress/integration/APIS/GET.spec.js" 

npx browserslist@latest --update-db