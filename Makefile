NOW := `date +%Y/%m/%dT%H:%M:%S+09:00`

.PHONY: deploy
deploy:
	-git add .
	-git commit -m "update ${NOW}"
	-git push origin master
	git checkout gh-pages
	git merge master
	-git push origin gh-pages
	git checkout master

.PHONY: setup
setup:
	git checkout -b gh-pages origin/gh-pages
	git checkout master
