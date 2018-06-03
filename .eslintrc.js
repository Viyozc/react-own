// module.exports = {
//     "extends": "standard",
//     "parser": "babel-eslint",
// };
module.exports = { 
    "env": { 
        "browser": true, 
        "commonjs": true, 
        "es6": true 
    }, 
    "extends": "eslint:recommended", 
    "globals": { 
        "process": true, 
        "__dirname": true 
    },
     "parser": "babel-eslint", 
     "parserOptions": { 
         "ecmaFeatures": { 
            "experimentalObjectRestSpread": true, 
            "jsx": true 
        }, 
        "sourceType": "module", 
        "ecmaVersion": 7 
    }, 
    "plugins": [ "react" ], 
    "rules": { 
        "quotes": [2, "single"],
        "no-unused-vars": 0,

    },
    "settings": { 
      "import/ignore": [ "node_modules" ] 
    }
};
