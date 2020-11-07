# setconf

**Simple cli tool to manage your config files easily.**

## Installing

<br/>

using npm

``` bash
$ npm i -g setconf 
```

## Updating  
using npm 

``` bash 
$ npm update -g setconf
```


## Usage 
to make sure that cli is properly installedc and check the current version.
``` bash
$ npx setconf -V
```

#### **To show all Config files**

``` bash
$ npx setconf show-all
```

#### **Add new config file to manage**

-- Note: make sure your are in the same directory where your config is saved.

``` bash
$ npx setconf add <filename>
```

#### **Use existing config file**

``` bash
$ npx setconf setup <filename>
```

#### **Update existing config file**

``` bash
$ npx setconf update <filename>
```

#### **Remove existing config file**

``` bash
$ npx setconf remove <filename>
```

#### **for more info and using alias** 
``` bash
$ npx setconf --help
```