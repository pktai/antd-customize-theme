_Yarn v1.22.17_
_Node v14.18.1_

**CLI run mode development**
```
yarn
yarn start
```

**run mode production**

.env by default
```
NODE_ENV=production
REACT_APP_NODE_ENV=production
GENERATE_SOURCEMAP=false
```
__CLI run production__
```
yarn build
npm i -g serve
serve -s build
```r