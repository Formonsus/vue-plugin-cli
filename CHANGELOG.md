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

