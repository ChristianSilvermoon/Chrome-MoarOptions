BROWSER = google-chrome

default:
	${BROWSER} --pack-extension=src
	mv "src.crx" "build/MoarOptions.crx"
	mv "src.pem" "build/MoarOptions.pem"

clean:
	rm -rf build/* 
