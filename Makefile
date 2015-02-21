N=[0m
V=[01;32m

all:
	@echo "Comandos disponibles:"
	@echo ""
	@echo "   $(V)iniciar $(N) Instala las dependencias iniciales."
	@echo "   $(V)preview $(N) Muestra el sitio de forma local."
	@echo "   $(V)deploy  $(N) Sube el sitio completo a la web."
	@echo ""

iniciar:
	npm install
	bower install

preview:
	ember serve

deploy:
	@echo " " >> Makefile
	git add .
	git commit -m "actualizacion..."
	git push
	ember build --environment production
	cp -r -f dist/* ../ghpages__huayra-tips/
	cd ../ghpages__huayra-tips/; git add --all .; git commit -m "update"; git push origin gh-pages
	
	@echo ""
	@echo " * Subiendo los cambios a: http://hugoruscitti.github.io/huayra-tips "
	@echo ""
 
 
 
 
