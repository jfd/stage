#!/bin/sh

builddate=$(stat -f "%Sm" package.json)
ronn=./node_modules/ronn/bin/ronn.js

targets=(
  "doc/commands/abort.md" "man/abort.1"
  "doc/commands/collect.md" "man/collect.1"
  "doc/commands/clients.md" "man/clients.1"
  "doc/commands/install.md" "man/install.1"
  "doc/commands/jobs.md" "man/jobs.1"
  "doc/commands/localenv.md" "man/localenv.1"
  "doc/commands/master.md" "man/master.1"
  "doc/commands/run.md" "man/run.1"
  "doc/commands/slave.md" "man/slave.1"
  "doc/commands/stage.md" "man/stage.1"
  "doc/commands/tests.md" "man/tests.1"
  "doc/commands/uninstall.md" "man/uninstall.1"
  "doc/commands/setup-machine.md" "man/setup-machine.1"
  "doc/commands/setup-smartdc.md" "man/setup-smartdc.1"
  "doc/commands/clean-smartdc.md" "man/clean-smartdc.1"
  "doc/commands/init-test.md" "man/init-test.1"
)

if ! [ -x $ronn ]; then
  echo "-- Installing ronn.js --"
  $(npm install ronn)
fi

echo "-- Generating manpages --"

$(mkdir -p man)

for (( i = 0 ; i < ${#targets[@]} ; i+=2 )) do
  echo ${targets[$i]} ">" ${targets[$i+1]}
  $ronn --date "${builddate}" -r ${targets[$i]} > ${targets[$i+1]}
done