NOW := `date +%Y/%m/%dT%H:%M:%S+09:00`

.PHONY: deploy
deploy:
	git add .
	git commit -m "update ${NOW}"
	git push origin master
	git push origin gh-pages
