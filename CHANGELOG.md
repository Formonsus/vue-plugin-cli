## 2.0.0 (2021-04-16)

##### Chores

*  prettier ([dfa7eee7](https://github.com/Formonsus/vue-plugin-cli/commit/dfa7eee7aaf678b1ebda6a24e0947a93112736f6))
*  increase printWidth for prettierrc ([e3f3e3b9](https://github.com/Formonsus/vue-plugin-cli/commit/e3f3e3b956b4eeadcb35362b38f93ef00a943ba9))
*  add new component ([15cbb2f1](https://github.com/Formonsus/vue-plugin-cli/commit/15cbb2f1a8720a9348c838a2db9bc0d0a13ea77f))
*  remove old component ([229e7726](https://github.com/Formonsus/vue-plugin-cli/commit/229e7726e2dacf953f4e71022d1f3c3c77283c07))
*  typo ([02c48d2c](https://github.com/Formonsus/vue-plugin-cli/commit/02c48d2cebe3303eb5aab3e051d28f2ade873127))

##### New Features

*  preprocess css ([a297c9b0](https://github.com/Formonsus/vue-plugin-cli/commit/a297c9b0ff848c59fd61eb74f60acab6008d4603))
*  add readme to plugin project ([ceeeef9b](https://github.com/Formonsus/vue-plugin-cli/commit/ceeeef9b5d3f124262e61b7c678fa8ff84c2d7ae))
*  add sass & sass-loader ([60f36b9e](https://github.com/Formonsus/vue-plugin-cli/commit/60f36b9e87d510e4dacf033bb800dfad36de4b51))
*  add cypress for e2e testing ([4e1be4ff](https://github.com/Formonsus/vue-plugin-cli/commit/4e1be4ffc3771dceae79db7e5b36eafe899263b2))
*  add jest for unit testing ([2888254e](https://github.com/Formonsus/vue-plugin-cli/commit/2888254e445b5259206f690d90ac110ee7783e6d))
*  add .prettierrc and override trailingComma property ([3b78f728](https://github.com/Formonsus/vue-plugin-cli/commit/3b78f728482c730eb75c6e08090843d5b56333da))
*  add jsconfig to vue-plugin-cli aswell ([dcd9ccb9](https://github.com/Formonsus/vue-plugin-cli/commit/dcd9ccb9ec27b5b7953a61348aed470122ba5597))
*  add jsconfig for Vetur ([93da6a7c](https://github.com/Formonsus/vue-plugin-cli/commit/93da6a7cc0abaa392b1ca61481107646f3a28844))
*  introduce eslint and prettier ([2eb3fb1e](https://github.com/Formonsus/vue-plugin-cli/commit/2eb3fb1e60f58a73d2bcf091e7e7d9faa0243b26))
*  add .editorconfig to plugin template ([6c6a1da5](https://github.com/Formonsus/vue-plugin-cli/commit/6c6a1da5902e28d8e5e9953332af0bc4e0234e4c))
*  make prompt required and pascalify plugin name ([8017d68b](https://github.com/Formonsus/vue-plugin-cli/commit/8017d68b49e96324e9c399a42d284671829954d5))
*  add webpackchunkname to code splitted route ([40e295aa](https://github.com/Formonsus/vue-plugin-cli/commit/40e295aa5d91d23785a2a3c5a722edbe7f5a79f2))
*  start adding support for code splitting and tree shaking ([e389cccf](https://github.com/Formonsus/vue-plugin-cli/commit/e389cccf3e721526ebaed35c5c00f7a0448961ec))

##### Bug Fixes

*  fixing prettier errors ([fe9cb64a](https://github.com/Formonsus/vue-plugin-cli/commit/fe9cb64a3656e1248069d38e1165ad8a0bf28e3e))
*  incorrect import ([604842ba](https://github.com/Formonsus/vue-plugin-cli/commit/604842baaa06953c73f766ab15d17a11577ced20))
*  fix root jsoncif for vue-plugin-cli ([4a84e53c](https://github.com/Formonsus/vue-plugin-cli/commit/4a84e53c58d0681089d17d76e5fe6dd55b2f5a1d))
*  add prettierrc to plugin-init script ([7b4e7765](https://github.com/Formonsus/vue-plugin-cli/commit/7b4e7765c8a84b3db781d532252839eeea588824))

##### Refactors

*  remove defineComponent leftovers ([8200f001](https://github.com/Formonsus/vue-plugin-cli/commit/8200f0011986219b4ecd48f0a84a0b0f5c6e020b))
*  rename state to store ([2871ba50](https://github.com/Formonsus/vue-plugin-cli/commit/2871ba5041b43f6ad3cc179337e2fa502358de60))
*  remove update-check ([88764929](https://github.com/Formonsus/vue-plugin-cli/commit/88764929e8f92402df40c257930a1355018b927c))
*  separate files in different categories ([36cfb7aa](https://github.com/Formonsus/vue-plugin-cli/commit/36cfb7aaac8f7e521400015f97530a5afaf1394e))
*  code formatting, renaming, conventions, new component, etc ([918b3694](https://github.com/Formonsus/vue-plugin-cli/commit/918b3694a7549bf21ac34f7b1d018fd72b0ef8b4))
*  drop entry.js file and replace it with single index.js ([76c63c2a](https://github.com/Formonsus/vue-plugin-cli/commit/76c63c2ad4bdd4b0f10b6508670a45d576a72d82))
*  do not initialize git repo inside plugin folder ([bf505d2f](https://github.com/Formonsus/vue-plugin-cli/commit/bf505d2fd8ef810f4670c31c3470a16d5eb1f997))
*  rename entry.esm.js to index.js ([8607dc9d](https://github.com/Formonsus/vue-plugin-cli/commit/8607dc9dfce77e201402cb76cdd069bf9e51a480))
*  drop support for cjs (for now) and inlineDynamicImports for .min builds ([3df88b0f](https://github.com/Formonsus/vue-plugin-cli/commit/3df88b0f4e59dd8e760f751232a1eb18e1b1228d))

#### 1.1.9 (2021-04-09)

##### Bug Fixes

*  move ejs to dependencies instead of devDependencies ([d198db50](https://github.com/Formonsus/vue-plugin-cli/commit/d198db5015a5fb4c82642df40870f09e667c4a4e))

#### 1.1.8 (2021-04-09)

##### Bug Fixes

*  check if response from updateCheck is not null ([ce2d7593](https://github.com/Formonsus/vue-plugin-cli/commit/ce2d7593a445cc5c4875821cb702db8c9156dca1))

#### 1.1.7 (2021-04-09)

##### Chores

*  wording ([f60b4d48](https://github.com/Formonsus/vue-plugin-cli/commit/f60b4d48b43a88cfc14ff4a942c8792df955f6a4))

##### Documentation Changes

*  add attribution secrion ([5be75ebb](https://github.com/Formonsus/vue-plugin-cli/commit/5be75ebb16d7f81b441fda50a772b7639fb676ac))
*  update readme ([e761bdf9](https://github.com/Formonsus/vue-plugin-cli/commit/e761bdf95324492ecf6da71fac7e051a6b8db768))

#### 1.1.6 (2021-04-08)

##### Bug Fixes

*  fixed save path ([54a74191](https://github.com/Formonsus/vue-plugin-cli/commit/54a7419188ff19326d2f298906684b9c4b706085))

#### 1.1.5 (2021-04-08)

##### Bug Fixes

*  conflicting variable name ([f8638d00](https://github.com/Formonsus/vue-plugin-cli/commit/f8638d00ef179e86941d506fab1a1a758282eaf9))

#### 1.1.4 (2021-04-08)

##### Bug Fixes

*  use shelljs to get pwd ([578f431f](https://github.com/Formonsus/vue-plugin-cli/commit/578f431fdc401b74309b06cec9f7f0648205c587))

#### 1.1.3 (2021-04-08)

##### Chores

*  npmrc ([574f7f06](https://github.com/Formonsus/vue-plugin-cli/commit/574f7f061455739e89acd997086113bee5bf9e1d))

##### Bug Fixes

*  navigate to pwd ([35c0f5d3](https://github.com/Formonsus/vue-plugin-cli/commit/35c0f5d321057dc477af5d36859cb720feb657ed))

#### 1.1.2 (2021-04-08)

##### Documentation Changes

*  description in readme ([aaf7ebdb](https://github.com/Formonsus/vue-plugin-cli/commit/aaf7ebdbca518648b4d3294ee0e8e03a630950c8))

#### 1.1.1 (2021-04-08)

##### Build System / Dependencies

*  update rollup config ([137d2b7a](https://github.com/Formonsus/vue-plugin-cli/commit/137d2b7afe9ade2684cea45ea51d9a6d2de532b2))

##### Refactors

*  update plugin-package.json ([3006e7d6](https://github.com/Formonsus/vue-plugin-cli/commit/3006e7d6a92bd55c7da49d278bee8d1ecb4a7053))

### 1.1.0 (2021-04-08)

##### New Features

*  setup git repo, install dependencies and console output ([777ce9a5](https://github.com/Formonsus/vue-plugin-cli/commit/777ce9a542dbcdb6bddb229a209253bf1f85bd85))
*  display current version and latest vesrion ([b3ea9ed5](https://github.com/Formonsus/vue-plugin-cli/commit/b3ea9ed5876814169204ce7645cd2f673b7b8ec0))

##### Bug Fixes

*  remove console.log ([5ffb7ef7](https://github.com/Formonsus/vue-plugin-cli/commit/5ffb7ef79f19f18331fd9f3ed3b8c7ca95367f80))

##### Refactors

*  remove unused properties ([8664674a](https://github.com/Formonsus/vue-plugin-cli/commit/8664674adbd37aa32bb78050acb93b9d26fb8976))

## 1.0.0 (2021-04-08)

##### Refactors

*  remove typescript support ([125659b4](https://github.com/Formonsus/vue-plugin-cli/commit/125659b421e56e78d0050a0b22bddaeb9197673d))
*  code style ([ced79b9c](https://github.com/Formonsus/vue-plugin-cli/commit/ced79b9c12c758a80277266be19ab79de0d5062c))

### 0.8.0 (2021-04-07)

##### Refactors

*  opt in for vue router and vuex ([ddf38198](https://github.com/Formonsus/vue-plugin-cli/commit/ddf381988c986ac9014bf25d31cc1924f1332fec))

### 0.7.0 (2021-04-07)

##### Documentation Changes

*  add developer instructions to home page ([89d31338](https://github.com/Formonsus/vue-plugin-cli/commit/89d31338f5df0375b78340453486ed76aabfb6fe))
*  add some comment explaining each file purpose ([d7038589](https://github.com/Formonsus/vue-plugin-cli/commit/d70385891cc34f313e4b9e5b1b99f5c6cfd114f8))

##### Refactors

*  style dev home page and add more information ([03bc52de](https://github.com/Formonsus/vue-plugin-cli/commit/03bc52deacfe98939af70f4e31505af6f731462b))
*  local development app ([3710a6c1](https://github.com/Formonsus/vue-plugin-cli/commit/3710a6c192b2a215ff17c9dbd5f34736e6e8105b))

### 0.6.0 (2021-04-06)

##### Refactors

*  drop support for Vue 2 ([76eaf479](https://github.com/Formonsus/vue-plugin-cli/commit/76eaf479a393b4c87ff1ecbe1a5692cbbe86b3d8))

#### 0.5.1 (2021-04-06)

##### Bug Fixes

*  replace hardcoded id with plugin name ([be585a9f](https://github.com/Formonsus/vue-plugin-cli/commit/be585a9f519bcb9ce349f46ca27aa0408268cec9))

### 0.5.0 (2021-04-06)

##### New Features

*  add example counter component and counter Vuex module ([743e836d](https://github.com/Formonsus/vue-plugin-cli/commit/743e836d295b58a7da48650522a2dadd905b5e7f))
*  add information paragraph to home page of dev ([df53a378](https://github.com/Formonsus/vue-plugin-cli/commit/df53a37858216801dd53883568076aab8e7ee316))
*  creating starting development template ([03af6826](https://github.com/Formonsus/vue-plugin-cli/commit/03af6826a4914dcde9bab3e302008c85075f7f56))

##### Bug Fixes

*  add message with instructions on next step when script is completed ([35fb72fd](https://github.com/Formonsus/vue-plugin-cli/commit/35fb72fddbae4d83c6bd2bf442c222bb4bd5e4fa))

##### Refactors

*  remove componentName property and use npm instead ([851476ec](https://github.com/Formonsus/vue-plugin-cli/commit/851476ec32937c61892c8a7714b9318731fe17ef))
*  remove h1 from home page ([8fbee46e](https://github.com/Formonsus/vue-plugin-cli/commit/8fbee46e1bf57e9758c190be7a8a5e1858c1c546))

### 0.4.0 (2021-04-05)

##### New Features

*  default plugin name ([7cb6fcbe](https://github.com/Formonsus/vue-plugin-cli/commit/7cb6fcbe3a6d2704213ab1600619f2ae75586de4))
*  copy vuex files only if Vuex was selected during prompt ([4e77c133](https://github.com/Formonsus/vue-plugin-cli/commit/4e77c1335fdd1426d59bc51cc44a62cda5d28113))
*  copy router files only if Vue Router was selected during prompt ([14b6e1c4](https://github.com/Formonsus/vue-plugin-cli/commit/14b6e1c4ebd245147a2df4ae48fec99130635490))
*  depending on the Vue version use different syntax for Vue Router ([25c50946](https://github.com/Formonsus/vue-plugin-cli/commit/25c50946629afbb805708b33968045c003768698))
*  depending on Vue version use different syntax for creating a Vuex store ([b60b4711](https://github.com/Formonsus/vue-plugin-cli/commit/b60b4711a4a0bf1c3b0fa276a5e425af8cd892c6))
*  add appropriate vue router and vuex versions to package.json ([1f0f3e3c](https://github.com/Formonsus/vue-plugin-cli/commit/1f0f3e3c0f8f6c40530a2678abf5c3faf335d49c))
*  add vue router and vuex selection to generator ([2742a6cf](https://github.com/Formonsus/vue-plugin-cli/commit/2742a6cfff8f6fc7c258b2710d5df171577b75a2))
*  add router and store files to cli script ([7799ad9e](https://github.com/Formonsus/vue-plugin-cli/commit/7799ad9e4159a5510205ef8da9293bb8504d5c33))
*  add router and store definitions for development environment of Vue plugin ([1150015d](https://github.com/Formonsus/vue-plugin-cli/commit/1150015d515cda8797de12131919518302a4d8da))
*  add two more question prompts, use router and use vuex ([35747bed](https://github.com/Formonsus/vue-plugin-cli/commit/35747bedbceb2f4385afa93690f6c8ab6a0e1c35))

##### Bug Fixes

*  fixing Vue 2 template ([ca4d6fa5](https://github.com/Formonsus/vue-plugin-cli/commit/ca4d6fa587f436932c57327dbf43f335fba8e8d5))
*  remove unused file and fix ejs template ([eabc9433](https://github.com/Formonsus/vue-plugin-cli/commit/eabc9433dc35f1a4fcea74935dfa7c3c3297c255))
*  remove types for non typescript projects ([8e81173f](https://github.com/Formonsus/vue-plugin-cli/commit/8e81173fcbd8661cd495d171b5383529209729c5))
*  fix the output of template ([00fabf7f](https://github.com/Formonsus/vue-plugin-cli/commit/00fabf7f387fd5583a88ebf48cb1e09d2cc703ab))

##### Refactors

*  add new file groups ([a254a3f8](https://github.com/Formonsus/vue-plugin-cli/commit/a254a3f8a3d0de9c9a8177d603de4c902da0731b))
*  separate vue router and vuex files, move store.ts file ([349f3f13](https://github.com/Formonsus/vue-plugin-cli/commit/349f3f1365c9aa7832bc0eefbc0a95f3ba9528ce))

### 0.3.0 (2021-04-02)

##### Chores

*  update scripts inside package.json ([390bcb77](https://github.com/Formonsus/vue-plugin-cli/commit/390bcb77e7c1de0783bf12520ab5505484e084a6))

##### New Features

*  first implementation of generator ([94d2223d](https://github.com/Formonsus/vue-plugin-cli/commit/94d2223d318e3dfaa37b6fa465aa03f5dcd0006a))

##### Bug Fixes

*  wrong ejs tags ([71a20730](https://github.com/Formonsus/vue-plugin-cli/commit/71a20730c784768bfab82d052b16979d15a732f6))
*  incorrect character in path ([70f2fdb7](https://github.com/Formonsus/vue-plugin-cli/commit/70f2fdb702d595781584d6caa9a54b98ede7729d))
*  entry => fileAction ([dc1a313a](https://github.com/Formonsus/vue-plugin-cli/commit/dc1a313af10c8e2770c31948abe77942cd3de098))
*  missing require, and wrong variable name ([28530942](https://github.com/Formonsus/vue-plugin-cli/commit/28530942b848ae2964c7cc520c3ea3bae7d71341))

### 0.2.0 (2021-04-02)

##### Chores

*  fix version ([f5dddcc4](https://github.com/Formonsus/vue-plugin-cli/commit/f5dddcc4c774432e59aa38a1eb0891656a4babf3))
*  update CHANGELOG.md ([c858bfc3](https://github.com/Formonsus/vue-plugin-cli/commit/c858bfc3e23b04be8c14c6160bd0ed9f1d93f19e))
*  remove duplicated script ([96212acb](https://github.com/Formonsus/vue-plugin-cli/commit/96212acbfbaca620891b03dc995f18c54cbcbe4a))
*  bump package version ([618b03ad](https://github.com/Formonsus/vue-plugin-cli/commit/618b03adf1285ebcafc52d0075eba5c0d0362e07))
*  update package.json ([1e30bb26](https://github.com/Formonsus/vue-plugin-cli/commit/1e30bb2604c1a8ae0e73a39da2eb0f1b0a7700a6))
*  add changelog.md ([11040ed0](https://github.com/Formonsus/vue-plugin-cli/commit/11040ed0c512a2ccb88218bdd04ddeb4c2f43033))
*  add plugin-init.js main file for our cli tool ([1a1b09ae](https://github.com/Formonsus/vue-plugin-cli/commit/1a1b09aefc9e9c080ea2679220548aec5c5d51fb))
*  add .editorconfig and formatted existing .js files ([b28af76a](https://github.com/Formonsus/vue-plugin-cli/commit/b28af76a5ab1214e1611b963b20b1ebc973d6bed))
*  installed husky and commitlint to lint messages on commit ([9c01810c](https://github.com/Formonsus/vue-plugin-cli/commit/9c01810c433b8cc22e0c4b54d508e5779d550656))

##### New Features

*  check if vue-plugin-cli has any updates ([d0d0f216](https://github.com/Formonsus/vue-plugin-cli/commit/d0d0f216f2a759810cc3108a968f370135c98036))
*  created couple of questions that user of this cli must answer ([6e0f62bd](https://github.com/Formonsus/vue-plugin-cli/commit/6e0f62bddc4b3e68d4c6b9084878ef31cf6433e9))

##### Refactors

*  renamet function for package update ([2846fdc8](https://github.com/Formonsus/vue-plugin-cli/commit/2846fdc89027c360ccb83b4921b8c65377f628d7))

#### 0.1.2 (2021-04-02)

##### Chores

*  remove duplicated script ([96212acb](https://github.com/Formonsus/vue-plugin-cli/commit/96212acbfbaca620891b03dc995f18c54cbcbe4a))
*  bump package version ([618b03ad](https://github.com/Formonsus/vue-plugin-cli/commit/618b03adf1285ebcafc52d0075eba5c0d0362e07))
*  update package.json ([1e30bb26](https://github.com/Formonsus/vue-plugin-cli/commit/1e30bb2604c1a8ae0e73a39da2eb0f1b0a7700a6))
*  add changelog.md ([11040ed0](https://github.com/Formonsus/vue-plugin-cli/commit/11040ed0c512a2ccb88218bdd04ddeb4c2f43033))
*  add plugin-init.js main file for our cli tool ([1a1b09ae](https://github.com/Formonsus/vue-plugin-cli/commit/1a1b09aefc9e9c080ea2679220548aec5c5d51fb))
*  add .editorconfig and formatted existing .js files ([b28af76a](https://github.com/Formonsus/vue-plugin-cli/commit/b28af76a5ab1214e1611b963b20b1ebc973d6bed))
*  installed husky and commitlint to lint messages on commit ([9c01810c](https://github.com/Formonsus/vue-plugin-cli/commit/9c01810c433b8cc22e0c4b54d508e5779d550656))

##### New Features

*  created couple of questions that user of this cli must answer ([6e0f62bd](https://github.com/Formonsus/vue-plugin-cli/commit/6e0f62bddc4b3e68d4c6b9084878ef31cf6433e9))

##### Refactors

*  renamet function for package update ([2846fdc8](https://github.com/Formonsus/vue-plugin-cli/commit/2846fdc89027c360ccb83b4921b8c65377f628d7))

### 0.1.0 (2021-04-02)

##### Chores

*  add plugin-init.js main file for our cli tool (1a1b09ae)
*  add .editorconfig and formatted existing .js files (b28af76a)
*  installed husky and commitlint to lint messages on commit (9c01810c)

##### New Features

*  created couple of questions that user of this cli must answer (6e0f62bd)

