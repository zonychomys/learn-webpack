yum install -y nodejs
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm install -g webpack --save-dev
mkdir webpack-demo && cd webpack-demo
cnpm init -y
sed -i '6a \ \ \ \ "webpack": "webpack --progress --display-modules --display-reasons",' package.json
cnpm install webpack --save-dev
cnpm install css-loader style-loader
cnpm install html-webpack-plugin --save-dev
mkdir -p src/{style,script} dist
