npm run build
cd dist
FILE=$(npm pack)
cp $FILE ../tar/