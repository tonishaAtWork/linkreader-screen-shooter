#!/bin/bash
# This is an example configuration file to be used with ui-screen-shooter
# It is designed to work with the Hello World International application
# Please copy to config-screenshots.sh and edit for your needs


# LOCALE
# ======
# Set the locales here in which your screenshots should be made.
# Use format like en-US zh-Hans for filenames compatible with iTMSTransporter
# Note: to get the locale names for your existing app:
#  - Download .itmsp file with iTMSTransporter
#  - Run `grep locale ~/Desktop/*.itmsp/metadata.xml  | grep name | sort -u`

export languages="en-US fr ja"

# PHYSICAL DEVICES
# ==========
# The devices attached via usb that we want to run the script against, 
# declared as a Bash array.
# Run `instruments -s devices` to get a list of all the possible string values.

declare -xa simulators=()
while read -r line ; do 
      simulators+=($line)
    done < <(instruments -s devices | grep -o "[0-9a-f]\{12,\}") 

echo "number of simulators ${#simulators[*]}"
for item in ${simulators[*]}
  do 
  printf "  %s\n" $item
done
echo 

#declare -xa simulators=(
#"somedevicenumber1"
#"somedevicenumber2"
#)
