#!/bin/bash
#michael hug
#mrhhug@gmail.com

device="/dev/ttyUSB0";
#stty -F $device  cs8 9600 ignbrk -brkint -imaxbel -opost -onlcr -isig -icanon -iexten -echo -echoe -echok -echoctl -echoke noflsh -ixon -crtscts
echo $device;
while true; do
	oup=$(head -n 1 $device);
	#sqlite3 "cooler.db" "INSERT INTO daTable values($oup)"
	echo $oup;
done
	'''
	#IFS= read first_line <$device ;
	#echo $first_line
	#if [ ${#first_line} -ge 3 ]; then
		#sqlite3 "cooler.db" "INSERT INTO daTable values($first_line);";
		echo $first_line;
	fi
	echo -n "Hello" > $device
	#echo ${first_line::-2}
	#TODO parse newline correctly
	#IFS= read -r first_line <$device ;
	'''
