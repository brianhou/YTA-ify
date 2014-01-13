all: YTA-ify.crx

YTA-ify.crx:
	google-chrome --pack-extension=YTA-ify --pack-extension-key=yta-ify.pem

clean:
	rm YTA-ify.crx
