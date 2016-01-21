#!/bin/zsh
now=$(date +"%Y-%m-%d-%S")
jsfolder="../assets/js/"

cd $jsfolder

for f in *.js
do
  echo "Compiling $f"
  java -jar ../../scripts/compiler.jar --language_in=ECMASCRIPT5 --js "$f" --js_output_file "voipdown.min.js" --compilation_level SIMPLE_OPTIMIZATIONS
done
