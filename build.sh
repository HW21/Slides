

p=ChipsMadeFromPython

mkdir -p docs/${p}
cd $p
yarn build 
cd ..
mv ${p}/dist/* ./docs/${p}
cp -r ${p}/img ./docs/${p}/img


