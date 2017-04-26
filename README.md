# ng-seed

## Main features

* **Webpack**
* **Webpack Dev Server**
* **Angular 1.5**
* **Babel 6** with **ES2015** preset
* **LESS**
* **PostCSS**

## Start development server

```bash
$ npm start
```

## Generate component/factory/provider/service/directive/filter/config

```bash
$ npm run generate
```

## Build project

```bash
$ npm run build
```

## Basic script of CI deployment

```bash
export DEPLOY_HOST=deploy@$TARGET

npm install && npm run build:tar

set -e

scp -o StrictHostKeyChecking=no ./dist.tar.gz "$DEPLOY_HOST:~/dist.tar.gz"
ssh -o StrictHostKeyChecking=no $DEPLOY_HOST "sudo mkdir -p /var/www && sudo rm -rf /var/www/* && sudo tar -zxf dist.tar.gz -C /var/www"
```
